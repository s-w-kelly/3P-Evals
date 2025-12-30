import React, { useState, useRef, useEffect, useCallback } from 'react';
import { labsData, testCategories, evaluators, evaluatorOrder, siteConfig } from '../data';

// Muted, professional evaluator colors (for left border accent only)
const evaluatorAccentColors = {
  "Apollo Research": "#2d7a6d",
  "Deloitte": "#5a8520",
  "Eleos": "#4a5cb8",
  "Faculty": "#5a6b4d",
  "FAR.AI": "#4a5560",
  "Gray Swan": "#4a6a8a",
  "Haize Labs": "#555555",
  "Irregular (fka Pattern)": "#3a3a3a",
  "METR": "#4a7a45",
  "Microsoft": "#b83a10",
  "SecureBio": "#0078a0",
  "Signature Science": "#005520",
  "Virtue AI": "#3040a0",
  "NNSA": "#a86010",
  "UK AISI": "#901028",
  "US CAISI": "#006820",
  "Domain experts": "#6a2590",
  "Individual red teamers": "#8a2525",
  "Uplift trial participants": "#287818",
  "Unidentified third party": "#505050",
};

const getEvaluatorColor = (name) => evaluatorAccentColors[name] || "#505050";

// Lab colors
const labColors = {
  anthropic: { bg: "#c96746", header: "#b85a3c" },
  google: { bg: "#2858c7", header: "#1e4aa8" },
  meta: { bg: "#0070dc", header: "#0060c0" },
  openai: { bg: "#0d8a6c", header: "#0a7058" },
  xai: { bg: "#1a1c20", header: "#000000" },
};

export default function SafetyTestingTracker() {
  const [selectedModels, setSelectedModels] = useState(() =>
    Object.fromEntries(
      Object.entries(labsData).map(([id, lab]) => [id, Object.keys(lab.models)[0]])
    )
  );
  const [highlightedEvaluator, setHighlightedEvaluator] = useState(null);
  const [notesOpen, setNotesOpen] = useState(false);
  const notesRef = useRef(null);
  const [notesMaxHeight, setNotesMaxHeight] = useState('0px');

  const notesFull = siteConfig?.notesFull || "";

  useEffect(() => {
    if (notesRef.current) {
      setNotesMaxHeight(notesOpen ? `${notesRef.current.scrollHeight}px` : '0px');
    }
  }, [notesOpen, notesFull]);

  const handleModelChange = (labId, model) => {
    setSelectedModels(prev => ({ ...prev, [labId]: model }));
  };

  const isHighlighted = (evaluator) => {
    return highlightedEvaluator === null || highlightedEvaluator === evaluator;
  };

  // Export functions - exports ALL data, not just current view
  const exportToCSV = useCallback(() => {
    const rows = [];

    // Header row
    rows.push(['Lab', 'Model', 'Evaluation Domain', 'Evaluators', 'Recurring Evaluators', 'Sources']);

    // Iterate through all labs, all models, all categories
    Object.entries(labsData).forEach(([labId, lab]) => {
      Object.entries(lab.models).forEach(([modelName, modelData]) => {
        testCategories.forEach(category => {
          const tests = modelData[category.id] || [];
          if (tests.length > 0) {
            rows.push([
              lab.name,
              modelName,
              category.name,
              tests.map(t => t.evaluator).join('; '),
              tests.filter(t => t.recurring).map(t => t.evaluator).join('; ') || '—',
              tests.map(t => t.source).join(' | ')
            ]);
          } else {
            rows.push([
              lab.name,
              modelName,
              category.name,
              '—',
              '—',
              '—'
            ]);
          }
        });
      });
    });

    const csvContent = [
      `"3P Evals Monitor - Complete Data Export"`,
      `"Generated: ${new Date().toLocaleDateString()}"`,
      `"Total Labs: ${Object.keys(labsData).length}"`,
      `"Total Models: ${Object.values(labsData).reduce((acc, lab) => acc + Object.keys(lab.models).length, 0)}"`,
      '',
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `3p-evals-monitor-complete-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  }, []);

  const exportToPDF = useCallback(() => {
    // Use browser print with print-optimized styles
    window.print();
  }, []);

  const labEntries = Object.entries(labsData);

  const categoryLabels = {
    private: "Private Organizations",
    public: "Government Agencies",
    other: "Other",
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
    },
    inner: {
      maxWidth: '1440px',
      margin: '0 auto',
      padding: 'var(--space-xl) var(--space-lg)',
    },
    // Header section - more dashboard-like
    header: {
      marginBottom: 'var(--space-xl)',
      paddingBottom: 'var(--space-lg)',
      borderBottom: '2px solid var(--border-light)',
    },
    headerTop: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      marginBottom: 'var(--space-md)',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-lg)',
    },
    logo: {
      width: '64px',
      height: '64px',
      flexShrink: 0,
    },
    headerContent: {
      flex: 1,
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.875rem',
      fontWeight: '700',
      color: 'var(--text-primary)',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      marginBottom: '4px',
    },
    subtitle: {
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      fontWeight: '400',
      color: 'var(--text-secondary)',
      lineHeight: 1.5,
      maxWidth: '600px',
    },
    // Export buttons
    exportButtons: {
      display: 'flex',
      gap: 'var(--space-sm)',
      flexShrink: 0,
    },
    exportButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 14px',
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-secondary)',
      fontSize: '0.8125rem',
      fontWeight: '500',
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      transition: 'all 0.15s ease',
    },
    // Notes section
    notesCard: {
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-lg)',
      marginBottom: 'var(--space-lg)',
      boxShadow: 'var(--shadow-sm)',
    },
    notesHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-md) var(--space-lg)',
      cursor: 'pointer',
    },
    notesTitle: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: 'var(--text-primary)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
    },
    notesToggle: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: '6px 12px',
      backgroundColor: 'transparent',
      border: '1px solid var(--border-medium)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-secondary)',
      fontSize: '0.75rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.15s ease',
    },
    notesContent: {
      overflow: 'hidden',
      transition: 'max-height 300ms ease-in-out',
    },
    notesInner: {
      padding: 'var(--space-lg)',
      paddingTop: 'var(--space-md)',
      fontSize: '0.875rem',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--border-light)',
    },
    // Evaluators section
    evaluatorsSection: {
      marginBottom: 'var(--space-lg)',
    },
    sectionHeader: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.875rem',
      fontWeight: '700',
      color: 'var(--text-primary)',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '4px',
    },
    sectionSubheader: {
      fontSize: '0.8125rem',
      color: 'var(--text-tertiary)',
      marginBottom: 'var(--space-md)',
    },
    evaluatorCategory: {
      marginBottom: 'var(--space-md)',
    },
    categoryLabel: {
      fontSize: '0.6875rem',
      fontWeight: '600',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: '6px',
    },
    evaluatorGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
    },
    // Grid section
    gridSection: {
      marginBottom: 'var(--space-xl)',
    },
    gridContainer: {
      overflowX: 'auto',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-medium)',
      backgroundColor: 'var(--bg-secondary)',
      boxShadow: 'var(--shadow-md)',
    },
    grid: {
      display: 'grid',
      minWidth: '1000px',
    },
    // Legend
    legend: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-lg)',
      padding: 'var(--space-md) var(--space-lg)',
      backgroundColor: 'var(--bg-tertiary)',
      borderRadius: 'var(--radius-md)',
      marginBottom: 'var(--space-lg)',
      border: '1px solid var(--border-light)',
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '0.75rem',
      color: 'var(--text-tertiary)',
    },
    // Footer
    footer: {
      paddingTop: 'var(--space-lg)',
      borderTop: '1px solid var(--border-light)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 'var(--space-lg)',
    },
    footerMeta: {
      fontSize: '0.75rem',
      color: 'var(--text-tertiary)',
      lineHeight: 1.6,
    },
  };

  // Evaluator button - muted style with colored left border
  const EvaluatorButton = ({ name }) => {
    const isActive = highlightedEvaluator === name;
    const color = getEvaluatorColor(name);

    return (
      <button
        onClick={() => setHighlightedEvaluator(isActive ? null : name)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '5px 10px',
          paddingLeft: '12px',
          backgroundColor: isActive ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
          border: '1px solid var(--border-medium)',
          borderLeft: `3px solid ${color}`,
          borderRadius: 'var(--radius-sm)',
          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
          fontSize: '0.75rem',
          fontWeight: '500',
          fontFamily: 'var(--font-body)',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          whiteSpace: 'nowrap',
          boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'var(--bg-tertiary)';
          e.target.style.borderColor = 'var(--border-dark)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isActive ? 'var(--bg-tertiary)' : 'var(--bg-secondary)';
          e.target.style.borderColor = 'var(--border-medium)';
          e.target.style.borderLeftColor = color;
        }}
      >
        {name}
      </button>
    );
  };

  // Lab header cell
  const LabHeaderCell = ({ labId, lab }) => {
    const currentModel = selectedModels[labId];
    const modelData = lab.models[currentModel] || {};
    const colors = labColors[labId] || { bg: lab.color, header: lab.color };

    return (
      <div
        style={{
          backgroundColor: colors.bg,
          padding: 'var(--space-md)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: '110px',
        }}
      >
        <div style={{
          fontSize: '0.9375rem',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '6px',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
        }}>
          {lab.name}
        </div>
        <select
          value={selectedModels[labId]}
          onChange={(e) => handleModelChange(labId, e.target.value)}
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 'var(--radius-sm)',
            color: '#ffffff',
            padding: '6px 10px',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-body)',
            cursor: 'pointer',
            width: '100%',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 8px center',
            paddingRight: '28px',
          }}
        >
          {Object.keys(lab.models).map(model => (
            <option key={model} value={model} style={{ color: '#1a1c20' }}>
              {model}
            </option>
          ))}
        </select>
        {modelData.systemCard && (
          <a
            href={modelData.systemCard}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              marginTop: '6px',
              fontSize: '0.6875rem',
              color: 'rgba(255,255,255,0.8)',
              textDecoration: 'none',
            }}
          >
            Documentation
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    );
  };

  // Category row label
  const CategoryLabel = ({ category }) => (
    <div style={{
      backgroundColor: 'var(--bg-tertiary)',
      padding: 'var(--space-md)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRight: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div style={{
        fontSize: '0.8125rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '2px',
        fontFamily: 'var(--font-body)',
      }}>
        {category.name}
      </div>
      <div style={{
        fontSize: '0.6875rem',
        color: 'var(--text-tertiary)',
        lineHeight: 1.4,
      }}>
        {category.description}
      </div>
    </div>
  );

  // Data cell - with null state treatment, centered content, and uniform-width pills
  const DataCell = ({ labId, categoryId }) => {
    const currentModel = selectedModels[labId];
    const modelData = labsData[labId].models[currentModel] || {};
    const tests = modelData[categoryId] || [];
    const isEmpty = tests.length === 0;

    return (
      <div style={{
        backgroundColor: isEmpty ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
        padding: 'var(--space-sm) var(--space-md)',
        minHeight: '56px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        borderRight: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        // Subtle diagonal pattern for empty cells
        backgroundImage: isEmpty
          ? 'repeating-linear-gradient(135deg, transparent, transparent 8px, rgba(0,0,0,0.015) 8px, rgba(0,0,0,0.015) 9px)'
          : 'none',
      }}>
        {isEmpty ? (
          <span style={{
            color: 'var(--text-muted)',
            fontSize: '0.6875rem',
            fontStyle: 'italic',
            opacity: 0.7,
          }}>
            No engagement
          </span>
        ) : (
          tests.map((test, idx) => {
            const color = getEvaluatorColor(test.evaluator);
            const highlighted = isHighlighted(test.evaluator);

            return (
              <a
                key={idx}
                href={test.source}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  width: '100%',
                  maxWidth: '140px',
                  padding: '4px 8px',
                  paddingLeft: '10px',
                  backgroundColor: highlighted ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderLeft: `3px solid ${highlighted ? color : 'var(--border-medium)'}`,
                  borderRadius: 'var(--radius-sm)',
                  color: highlighted ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  opacity: highlighted ? 1 : 0.5,
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                  e.currentTarget.style.borderLeftColor = color;
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.opacity = 1;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = highlighted ? 'var(--bg-tertiary)' : 'var(--bg-secondary)';
                  e.currentTarget.style.borderLeftColor = highlighted ? color : 'var(--border-medium)';
                  e.currentTarget.style.color = highlighted ? 'var(--text-primary)' : 'var(--text-muted)';
                  e.currentTarget.style.opacity = highlighted ? 1 : 0.5;
                }}
              >
                <span style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '5px',
                  flex: 1,
                  minWidth: 0,
                }}>
                  {test.recurring && (
                    <span
                      title="Recurring engagement"
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: highlighted ? color : 'var(--text-muted)',
                        flexShrink: 0,
                        marginTop: '5px',
                      }}
                    />
                  )}
                  <span style={{ lineHeight: 1.3 }}>
                    {test.evaluator}
                  </span>
                </span>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ opacity: 0.5, flexShrink: 0, marginLeft: '6px', marginTop: '3px' }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        {/* Print styles */}
        <style>{`
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
          }
          .notes-html {
            font-family: var(--font-body);
          }
          .notes-html p {
            margin-bottom: 10px;
          }
          .notes-html ul {
            margin-left: 20px;
            margin-bottom: 10px;
            list-style-type: disc;
          }
          .notes-html ul ul {
            margin-left: 20px;
            list-style-type: circle;
          }
          .notes-html li {
            margin: 4px 0;
          }
          .notes-html strong {
            color: var(--text-primary);
            font-weight: 600;
          }
        `}</style>

        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerTop}>
            <div style={styles.headerLeft}>
              <img
                src="/3pfavnew.png"
                alt="3P Evals Monitor"
                style={styles.logo}
              />
              <div style={styles.headerContent}>
                <h1 style={styles.title}>{siteConfig.title}</h1>
                <p style={styles.subtitle}>{siteConfig.subtitle}</p>
              </div>
            </div>
            <div style={styles.exportButtons} className="no-print">
              <button
                style={styles.exportButton}
                onClick={exportToCSV}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-tertiary)';
                  e.target.style.borderColor = 'var(--border-dark)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-secondary)';
                  e.target.style.borderColor = 'var(--border-medium)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Export CSV
              </button>
              <button
                style={styles.exportButton}
                onClick={exportToPDF}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-tertiary)';
                  e.target.style.borderColor = 'var(--border-dark)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-secondary)';
                  e.target.style.borderColor = 'var(--border-medium)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Print / PDF
              </button>
            </div>
          </div>
        </header>

        {/* Notes Section */}
        <div style={styles.notesCard} className="no-print">
          <div
            style={styles.notesHeader}
            onClick={() => setNotesOpen(o => !o)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setNotesOpen(o => !o)}
          >
            <div style={styles.notesTitle}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              Methodology, Scope & Definitions
            </div>
            <button
              style={{
                ...styles.notesToggle,
                borderColor: notesOpen ? 'var(--accent-primary)' : 'var(--border-medium)',
                color: notesOpen ? 'var(--accent-primary)' : 'var(--text-secondary)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setNotesOpen(o => !o);
              }}
            >
              {notesOpen ? 'Collapse' : 'Expand'}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: notesOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease'
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
          <div
            ref={notesRef}
            style={{
              ...styles.notesContent,
              maxHeight: notesMaxHeight,
            }}
          >
            <div
              style={styles.notesInner}
              className="notes-html"
              dangerouslySetInnerHTML={{ __html: notesFull }}
            />
          </div>
        </div>

        {/* Evaluators Section */}
        <section style={styles.evaluatorsSection} className="no-print">
          <h2 style={styles.sectionHeader}>Third-Party Evaluators</h2>
          <p style={styles.sectionSubheader}>
            Select an evaluator to highlight their engagements
          </p>

          {Object.entries(evaluatorOrder).map(([category, evaluatorList]) => {
            const firstRow = category === 'private' ? evaluatorList.slice(0, 7) : evaluatorList;
            const secondRow = category === 'private' ? evaluatorList.slice(7) : [];

            return (
              <div key={category} style={styles.evaluatorCategory}>
                <div style={styles.categoryLabel}>{categoryLabels[category]}</div>
                <div style={styles.evaluatorGrid}>
                  {firstRow.map(name => (
                    <EvaluatorButton key={name} name={name} />
                  ))}
                </div>
                {secondRow.length > 0 && (
                  <div style={{ ...styles.evaluatorGrid, marginTop: '6px' }}>
                    {secondRow.map(name => (
                      <EvaluatorButton key={name} name={name} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Legend */}
        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <span style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-tertiary)',
            }} />
            <span>Recurring engagement</span>
          </div>
          <div style={styles.legendItem}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>Source link</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{
              width: '16px',
              height: '12px',
              backgroundColor: 'var(--bg-tertiary)',
              backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)',
              borderRadius: '2px',
              border: '1px solid var(--border-light)',
            }} />
            <span>No third-party engagement disclosed</span>
          </div>
        </div>

        {/* Main Data Grid */}
        <section style={styles.gridSection}>
          <div style={styles.gridContainer}>
            <div style={{
              ...styles.grid,
              gridTemplateColumns: `180px repeat(${labEntries.length}, minmax(150px, 1fr))`,
            }}>
              {/* Header Row */}
              <div style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderRight: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 'var(--space-md)',
              }}>
                <span style={{
                  fontSize: '0.6875rem',
                  fontWeight: '700',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  Eval Domain
                </span>
              </div>
              {labEntries.map(([labId, lab]) => (
                <div key={labId} style={{ borderBottom: '1px solid var(--border-medium)' }}>
                  <LabHeaderCell labId={labId} lab={lab} />
                </div>
              ))}

              {/* Data Rows */}
              {testCategories.map(category => (
                <React.Fragment key={category.id}>
                  <CategoryLabel category={category} />
                  {labEntries.map(([labId]) => (
                    <DataCell key={labId} labId={labId} categoryId={category.id} />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerMeta}>
            <div style={{ fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '2px' }}>
              Last updated: {siteConfig.lastUpdated}
            </div>
            <div>{siteConfig.dataSource}</div>
          </div>
          <div style={{
            fontSize: '0.6875rem',
            color: 'var(--text-muted)',
            textAlign: 'right',
            maxWidth: '320px',
          }}>
            Data compiled from publicly available system cards, technical reports, and official disclosures.
          </div>
        </footer>
      </div>
    </div>
  );
}
