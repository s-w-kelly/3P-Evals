import React, { useState } from 'react';
import { labsData, testCategories, evaluators, evaluatorOrder, siteConfig } from '../data';

const getEvaluatorColor = (name) => evaluators[name]?.color || "#888888";

export default function SafetyTestingTracker() {
  // Initialize selected models to the first (most recent) model for each lab
  const [selectedModels, setSelectedModels] = useState(() => 
    Object.fromEntries(
      Object.entries(labsData).map(([id, lab]) => [id, Object.keys(lab.models)[0]])
    )
  );
  const [highlightedEvaluator, setHighlightedEvaluator] = useState(null);

  const handleModelChange = (labId, model) => {
    setSelectedModels(prev => ({ ...prev, [labId]: model }));
  };

  const isHighlighted = (evaluator) => {
    return highlightedEvaluator === null || highlightedEvaluator === evaluator;
  };

  const labEntries = Object.entries(labsData);

  // Category labels for display
  const categoryLabels = {
    private: "Private",
    public: "Public", 
    other: "Other",
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1f2e',
      color: '#e0e0e0',
      padding: '32px',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#ffffff',
          margin: '0 0 8px 0',
          letterSpacing: '-0.5px',
        }}>
          {siteConfig.title}
        </h1>
        <p style={{
          fontSize: '14px',
          color: '#8a8f9d',
          margin: '0 0 4px 0',
        }}>
          {siteConfig.subtitle}
        </p>
        <p style={{
          fontSize: '12px',
          color: '#5a5f6d',
          margin: 0,
        }}>
          Click on an evaluator to highlight their engagements
        </p>
      </div>

      {/* Key Evaluators Summary */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#8a8f9d',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '12px',
        }}>
          Key Evaluators
        </div>

        {/* New layout: each category has its label ABOVE its evaluators.
            Private gets split into two rows (7 on the first, rest on the second). */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.entries(evaluatorOrder).map(([category, evaluatorList]) => {
            const isPrivate = category === 'private';
            const topRow = isPrivate ? evaluatorList.slice(0, 7) : evaluatorList;
            const bottomRow = isPrivate ? evaluatorList.slice(7) : [];

            return (
              <div key={category} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Category header (now above the badges) */}
                <span style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#5a5f6d',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {categoryLabels[category]}
                </span>

                {/* Top row of evaluators */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {topRow.map(name => {
                    const evaluator = evaluators[name];
                    if (!evaluator) return null;
                    return (
                      <button
                        key={name}
                        onClick={() => setHighlightedEvaluator(highlightedEvaluator === name ? null : name)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '6px 12px',
                          backgroundColor: highlightedEvaluator === name ? evaluator.color : 'transparent',
                          border: `2px solid ${evaluator.color}`,
                          borderRadius: '20px',
                          color: highlightedEvaluator === name ? '#ffffff' : evaluator.color,
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {name}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom row only for private (when there are remaining items) */}
                {bottomRow.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    {bottomRow.map(name => {
                      const evaluator = evaluators[name];
                      if (!evaluator) return null;
                      return (
                        <button
                          key={name}
                          onClick={() => setHighlightedEvaluator(highlightedEvaluator === name ? null : name)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px 12px',
                            backgroundColor: highlightedEvaluator === name ? evaluator.color : 'transparent',
                            border: `2px solid ${evaluator.color}`,
                            borderRadius: '20px',
                            color: highlightedEvaluator === name ? '#ffffff' : evaluator.color,
                            fontSize: '13px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {name}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `180px repeat(${labEntries.length}, 1fr)`,
        gap: '2px',
        backgroundColor: '#2a2f3e',
        borderRadius: '8px',
        overflow: 'hidden',
      }}>
        {/* Header Row */}
        <div style={{ backgroundColor: '#1a1f2e', padding: '16px' }} />
        {labEntries.map(([labId, lab]) => (
          <div
            key={labId}
            style={{
              backgroundColor: lab.color,
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '90px',
            }}
          >
            <div style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '8px',
              textAlign: 'center',
            }}>
              {lab.name}
            </div>
            <select
              value={selectedModels[labId]}
              onChange={(e) => handleModelChange(labId, e.target.value)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '4px',
                color: '#ffffff',
                padding: '4px 8px',
                fontSize: '12px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {Object.keys(lab.models).map(model => (
                <option key={model} value={model} style={{ color: '#1a1f2e' }}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Data Rows */}
        {testCategories.map(category => (
          <React.Fragment key={category.id}>
            {/* Row Label */}
            <div style={{
              backgroundColor: '#252a39',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#ffffff',
              }}>
                {category.name}
              </div>
              <div style={{
                fontSize: '11px',
                color: '#6a6f7d',
                marginTop: '4px',
              }}>
                {category.description}
              </div>
            </div>

            {/* Data Cells */}
            {labEntries.map(([labId, lab]) => {
              const currentModel = selectedModels[labId];
              const modelData = lab.models[currentModel] || {};
              const tests = modelData[category.id] || [];
              
              return (
                <div
                  key={labId}
                  style={{
                    backgroundColor: '#1e2330',
                    padding: '12px',
                    minHeight: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  {tests.length === 0 ? (
                    <span style={{ color: '#3a3f4d', fontSize: '13px' }}>—</span>
                  ) : (
                    tests.map((test, idx) => (
                      <a
                        key={idx}
                        href={test.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 8px',
                          backgroundColor: isHighlighted(test.evaluator)
                            ? `${getEvaluatorColor(test.evaluator)}20`
                            : 'transparent',
                          border: `1px solid ${isHighlighted(test.evaluator) ? getEvaluatorColor(test.evaluator) : '#3a3f4d'}`,
                          borderRadius: '4px',
                          color: isHighlighted(test.evaluator) ? getEvaluatorColor(test.evaluator) : '#5a5f6d',
                          fontSize: '13px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          opacity: isHighlighted(test.evaluator) ? 1 : 0.4,
                          width: 'fit-content',
                        }}
                      >
                        {test.recurring && (
                          <span
                            title="Recurring engagement (multiple model generations)"
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: isHighlighted(test.evaluator)
                                ? getEvaluatorColor(test.evaluator)
                                : '#5a5f6d',
                              flexShrink: 0,
                            }}
                          />
                        )}
                        {test.evaluator}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          style={{ opacity: 0.5, flexShrink: 0 }}
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ))
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* Legend */}
      <div style={{
        marginTop: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        fontSize: '12px',
        color: '#6a6f7d',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#8a8f9d',
          }} />
          Recurring engagement (multiple model generations)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15,3 21,3 21,9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Source link (model card / system card)
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '32px',
        paddingTop: '16px',
        borderTop: '1px solid #2a2f3e',
        fontSize: '12px',
        color: '#5a5f6d',
      }}>
        <div>Last updated: {siteConfig.lastUpdated}</div>
        <div>{siteConfig.dataSource}</div>
      </div>
    </div>
  );
}
