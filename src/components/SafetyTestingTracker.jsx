import React, { useState, useRef, useEffect, useCallback } from 'react';
import { labsData, testCategories, evaluators, evaluatorOrder, siteConfig, analysisContent } from '../data';
import DataTab from './DataTab';
import './SafetyTestingTracker.css';

// Evaluator accent colors live in data.js (evaluators registry)
const getEvaluatorColor = (name) => evaluators[name]?.color || "#505050";

// Lab colors are CSS variables (--lab-<id>) in index.css; fall back to the color in data.js
const getLabColor = (labId, lab) => `var(--lab-${labId}, ${lab.color})`;

const tabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'data', label: 'Data' },
];

const categoryLabels = {
  private: "Private Organizations",
  public: "Government Agencies",
  other: "Other",
};

const ExternalIcon = ({ size = 10, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="8 7 17 7 17 16" />
  </svg>
);

const Chevron = ({ size = 10 }) => (
  <svg className="stt-chevron" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Accordion item for the Analysis tab
function AccordionItem({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <li className={`stt-acc-item${isOpen ? ' is-open' : ''}`}>
      <button className="stt-acc-head" onClick={onToggle} aria-expanded={!!isOpen}>
        <span className="stt-acc-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="stt-acc-title">{item.title}</span>
        <Chevron size={12} />
      </button>
      <div ref={contentRef} className="stt-collapse" style={{ maxHeight }}>
        <div className="stt-acc-body notes-html" dangerouslySetInnerHTML={{ __html: item.content }} />
      </div>
    </li>
  );
}

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
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openAccordions, setOpenAccordions] = useState({});
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const notesFull = siteConfig?.notesFull || "";

  useEffect(() => {
    if (notesRef.current) {
      setNotesMaxHeight(notesOpen ? `${notesRef.current.scrollHeight}px` : '0px');
    }
  }, [notesOpen, notesFull]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleModelChange = (labId, model) => {
    setSelectedModels(prev => ({ ...prev, [labId]: model }));
  };

  const toggleAccordion = (id) => {
    setOpenAccordions(prev => ({ ...prev, [id]: !prev[id] }));
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
              tests.filter(t => t.recurring).map(t => t.evaluator).join('; ') || '',
              tests.map(t => t.source).join(' | ')
            ]);
          } else {
            rows.push([
              lab.name,
              modelName,
              category.name,
              '',
              '',
              ''
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
    link.download = `3p-eval-monitor-data-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  }, []);

  const labEntries = Object.entries(labsData);

  // Evaluator filter chip
  const EvaluatorButton = ({ name }) => {
    const isActive = highlightedEvaluator === name;
    return (
      <button
        className="stt-chip"
        aria-pressed={isActive}
        style={{ '--ev': getEvaluatorColor(name) }}
        onClick={() => setHighlightedEvaluator(isActive ? null : name)}
      >
        <span className="stt-swatch" aria-hidden="true" />
        {name}
      </button>
    );
  };

  // Lab column header
  const LabHeaderCell = ({ labId, lab }) => {
    const modelData = lab.models[selectedModels[labId]] || {};
    return (
      <div className="stt-lab-head" style={{ '--lab': getLabColor(labId, lab) }}>
        <div className="stt-lab-name">{lab.name}</div>
        <select
          className="stt-select"
          value={selectedModels[labId]}
          onChange={(e) => handleModelChange(labId, e.target.value)}
          aria-label={`${lab.name} model`}
        >
          {Object.keys(lab.models).map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        {modelData.systemCard && (
          <a className="stt-doc-link" href={modelData.systemCard} target="_blank" rel="noopener noreferrer">
            Documentation
            <ExternalIcon size={9} />
          </a>
        )}
      </div>
    );
  };

  // Eval domain row label
  const CategoryLabel = ({ category }) => (
    <div className="stt-cat">
      <div className="stt-cat-name">{category.name}</div>
      <div className="stt-cat-desc">{category.description}</div>
    </div>
  );

  // Data cell: one entry per evaluator, linking to its source
  const DataCell = ({ labId, categoryId }) => {
    const modelData = labsData[labId].models[selectedModels[labId]] || {};
    const tests = modelData[categoryId] || [];

    if (tests.length === 0) {
      return (
        <div className="stt-cell is-empty">
          <span className="stt-cell-empty">No engagement</span>
        </div>
      );
    }

    return (
      <div className="stt-cell">
        <ul className="stt-entries">
          {tests.map((test, idx) => {
            const state = highlightedEvaluator === null
              ? ''
              : highlightedEvaluator === test.evaluator ? ' is-match' : ' is-dim';
            return (
              <li key={idx}>
                <a
                  className={`stt-entry${state}`}
                  href={test.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--ev': getEvaluatorColor(test.evaluator) }}
                >
                  <span className="stt-swatch" aria-hidden="true" />
                  <span className="stt-entry-name">
                    {test.evaluator}
                    {test.recurring && (
                      <span className="stt-recurring-dot" title="Recurring engagement" />
                    )}
                  </span>
                  <ExternalIcon size={9} className="stt-entry-icon" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="stt">
      {/* Site bar: wordmark, tabs, theme toggle */}
      <div className="stt-sitebar no-print">
        <div className="stt-bar-inner">
          <button
            className="stt-brand"
            onClick={() => setActiveTab('dashboard')}
            aria-label={`${siteConfig.title}: go to Dashboard`}
          >
            <span className="stt-brand-mark" aria-hidden="true" />
            <span className="stt-brand-name">{siteConfig.title}</span>
          </button>
          <nav className="stt-tabs" role="tablist" aria-label="Sections">
            {tabs.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className="stt-tab"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <button
            className="stt-icon-btn"
            onClick={() => setDarkMode(prev => !prev)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Page header on a tinted band */}
      <header className="stt-masthead">
        <div className="stt-bar-inner stt-masthead-inner">
          <h1 className="stt-title">{siteConfig.title}</h1>
          <p className="stt-subtitle">{siteConfig.subtitle}</p>
          <div className="stt-meta">
            <span>
              Last updated: <span className="stt-meta-strong">{siteConfig.lastUpdated}</span>
            </span>
            {siteConfig.dataSource && <span>{siteConfig.dataSource}</span>}
            <button className="stt-meta-btn no-print" onClick={exportToCSV}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export data
            </button>
          </div>
        </div>
      </header>

      <div className="stt-inner">
        <main>
          {/* Dashboard Tab Content */}
          {activeTab === 'dashboard' && (
            <>
              <h2 className="stt-page-title">Third-Party Evals Dashboard</h2>

              {/* Notes Section */}
              <div className={`stt-notes no-print${notesOpen ? ' is-open' : ''}`}>
                <div
                  className="stt-notes-head"
                  onClick={() => setNotesOpen(o => !o)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={notesOpen}
                  onKeyDown={(e) => e.key === 'Enter' && setNotesOpen(o => !o)}
                >
                  <span className="stt-notes-title">Methodology, Scope, and Definitions</span>
                  <button
                    className="stt-text-btn"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.stopPropagation();
                      setNotesOpen(o => !o);
                    }}
                  >
                    {notesOpen ? 'Collapse' : 'Expand'}
                    <Chevron />
                  </button>
                </div>
                <div ref={notesRef} className="stt-collapse" style={{ maxHeight: notesMaxHeight }}>
                  <div className="stt-notes-body notes-html" dangerouslySetInnerHTML={{ __html: notesFull }} />
                </div>
              </div>

              {/* Evaluators Section */}
              <section className="stt-evaluators no-print">
                <div className="stt-section-head">
                  <h2 className="stt-section-title">Evaluators</h2>
                  <p className="stt-section-sub">Select an evaluator to highlight their engagements</p>
                </div>
                <div className="stt-eval-groups">
                  {Object.entries(evaluatorOrder).map(([category, evaluatorList]) => (
                    <div key={category} className="stt-eval-group">
                      <div className="stt-eval-group-label">{categoryLabels[category]}</div>
                      <div className="stt-chips">
                        {evaluatorList.map(name => (
                          <EvaluatorButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legend */}
              <div className="stt-toolbar">
                <ul className="stt-legend">
                  <li><span className="stt-recurring-dot" />Recurring engagement</li>
                  <li><ExternalIcon size={10} />Source link</li>
                  <li><span className="stt-empty-swatch" />No third-party engagement found</li>
                </ul>
              </div>

              {/* Main Data Grid */}
              <section className="stt-grid-wrap">
                <div className="stt-grid-scroll">
                  <div className="stt-grid" style={{ '--lab-count': labEntries.length }}>
                    {/* Header Row */}
                    <div className="stt-grid-corner">Eval Domain</div>
                    {labEntries.map(([labId, lab]) => (
                      <LabHeaderCell key={labId} labId={labId} lab={lab} />
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
            </>
          )}

          {/* Analysis Tab Content */}
          {activeTab === 'analysis' && (
            <section className="stt-analysis">
              <h2 className="stt-page-title">Key Insights/Analysis</h2>
              <ol className="stt-accordion">
                {analysisContent.analysisInsights.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    index={index}
                    isOpen={openAccordions[item.id]}
                    onToggle={() => toggleAccordion(item.id)}
                  />
                ))}
              </ol>
            </section>
          )}

          {/* Data Tab Content */}
          {activeTab === 'data' && <DataTab />}
        </main>

        {/* Footer */}
        <footer className="stt-footer">
          <div className="stt-footer-brand">
            <span className="stt-brand-mark" aria-hidden="true" />
            {siteConfig.title}
          </div>

          <div className="stt-footer-credit">
            <div>
              Created and maintained by{' '}
              <a
                href="https://www.skellydotcom.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spencer Kelly on LinkedIn"
              >
                Spencer Kelly
              </a>.
            </div>
            <div>This website was built using Claude Code but all research/analysis/content is by me.</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
