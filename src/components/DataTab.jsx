import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { testCategories } from '../data';
import {
  labIds,
  labNames,
  evaluatorTypes,
  evaluatorTypeLabels,
  filterData,
  summaryStats,
  labStats,
  domainMatrix,
  evaluatorStats,
  datedCoverage,
  frontierCoverage,
  allModels,
  ecosystemGrowth,
  evaluatorsPerModel,
  yearlyBreakdown,
} from '../stats';
import './DataTab.css';

// Color follows the lab (its brand color, else its position in data.js), never its rank or filter state.
const labColor = (labId) => `var(--lab-${labId}, var(--lab-${(labIds.indexOf(labId) % 8) + 1}))`;
const typeColor = (type) => `var(--type-${type})`;

const categoryName = Object.fromEntries(testCategories.map(c => [c.id, c.name]));

const pct = (v) => `${Math.round(v * 100)}%`;
const fmt1 = (v) => (Math.round(v * 10) / 10).toFixed(1);
const fmtDate = (d) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

// ---------- Shared pieces ----------

// Callback ref so the observer follows the element even when a chart swaps
// between its empty state and its plot.
function useElementWidth() {
  const [width, setWidth] = useState(0);
  const observer = useRef(null);
  const ref = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = null;
    if (node) {
      observer.current = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
      observer.current.observe(node);
    }
  }, []);
  return [ref, width];
}

const Swatch = ({ color, square }) => (
  <span className={`dt-swatch${square ? ' dt-swatch-sq' : ''}`} style={{ background: color }} />
);

const Legend = ({ items, square }) => (
  <div className="dt-legend">
    {items.map(item => (
      <span key={item.key} className="dt-legend-item">
        <Swatch color={item.color} square={square} />
        {item.label}
      </span>
    ))}
  </div>
);

function DataTable({ columns, rows }) {
  return (
    <div className="dt-scroll">
      <table className="dt-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} className={col.num ? 'num' : ''}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map(col => (
                <td key={col.key} className={col.num ? 'num' : ''}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Card wrapper with a Chart / Table toggle so every chart's numbers are
 * available without relying on color or hover.
 */
function ChartCard({ title, subtitle, controls, table, children }) {
  const [view, setView] = useState('chart');
  return (
    <div className="dt-card">
      <div className="dt-card-head">
        <div>
          <div className="dt-card-title">{title}</div>
          {subtitle && <div className="dt-card-sub">{subtitle}</div>}
        </div>
        <div className="dt-card-controls">
          {view === 'chart' && controls}
          {table && (
            <div className="dt-seg" role="group" aria-label="View">
              <button aria-pressed={view === 'chart'} onClick={() => setView('chart')}>Chart</button>
              <button aria-pressed={view === 'table'} onClick={() => setView('table')}>Table</button>
            </div>
          )}
        </div>
      </div>
      {view === 'chart' ? children : <DataTable {...table} />}
    </div>
  );
}

function Tooltip({ tip }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ left: 0, top: 0 });
  useEffect(() => {
    if (!tip || !ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    let left = tip.x + 14;
    let top = tip.y + 14;
    if (left + width > window.innerWidth - 8) left = tip.x - width - 14;
    if (top + height > window.innerHeight - 8) top = tip.y - height - 14;
    setPos({ left: Math.max(8, left), top: Math.max(8, top) });
  }, [tip]);
  if (!tip) return null;
  return (
    <div ref={ref} className="dt-tooltip" style={pos} role="tooltip">
      <strong>{tip.title}</strong>
      {tip.lines.map((line, i) => (
        <div key={i} className="dt-tooltip-row">
          {line.color && <Swatch color={line.color} />}
          <span>{line.label}</span>
          {line.value !== undefined && <span>{line.value}</span>}
        </div>
      ))}
    </div>
  );
}

// ---------- Bar charts ----------

/** Single-series horizontal bars, one row per lab. */
function LabBars({ rows, format, max, onTip, labelWidth = 120 }) {
  const top = max ?? Math.max(...rows.map(r => r.value), 0);
  return (
    <div className="dt-bars" style={{ '--label-w': `${labelWidth}px` }}>
      {rows.map(row => (
        <div
          key={row.key}
          className="dt-bar-row"
          onMouseMove={(e) => onTip(e, row.tipTitle || row.label, row.tipLines || [{ label: format(row.value) }])}
          onMouseLeave={() => onTip(null)}
        >
          <span className="dt-bar-label" title={row.label}>{row.label}</span>
          <span className="dt-bar-track">
            <span className="dt-bar-fill" style={{ width: top ? `calc((100% - 48px) * ${row.value / top})` : 0 }}>
              {row.value > 0 && <span className="dt-bar-seg" style={{ flex: 1, background: row.color }} />}
            </span>
            <span className="dt-bar-value">{format(row.value)}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/** Horizontal bars stacked by lab. */
function StackedBars({ rows, labs, onTip, labelWidth = 170 }) {
  const top = Math.max(...rows.map(r => r.total), 0);
  return (
    <div className="dt-bars" style={{ '--label-w': `${labelWidth}px` }}>
      {rows.map(row => (
        <div
          key={row.name}
          className="dt-bar-row"
          onMouseMove={(e) => onTip(e, row.name, [
            ...labs.filter(id => row.byLab[id] > 0).map(id => ({
              color: labColor(id), label: labNames[id], value: row.byLab[id],
            })),
            { label: 'Total engagements', value: row.total },
            { label: `Domains: ${Object.keys(row.domains).map(c => categoryName[c]).join(', ')}` },
          ])}
          onMouseLeave={() => onTip(null)}
        >
          <span className="dt-bar-label" title={row.name}>{row.name}</span>
          <span className="dt-bar-track">
            <span className="dt-bar-fill" style={{ width: `calc((100% - 32px) * ${row.total / top})` }}>
              {labs.filter(id => row.byLab[id] > 0).map(id => (
                <span key={id} className="dt-bar-seg" style={{ flex: row.byLab[id], background: labColor(id) }} />
              ))}
            </span>
            <span className="dt-bar-value">{row.total}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

// ---------- Heatmap ----------

function DomainHeatmap({ matrix, metric, onTip }) {
  const maxEntries = Math.max(1, ...matrix.flatMap(r => r.cells.map(c => c.entries)));
  const intensity = (cell) => (metric === 'share' ? cell.share : cell.entries / maxEntries);

  return (
    <>
      <div className="dt-scroll">
        <div
          className="dt-heatmap"
          style={{ gridTemplateColumns: `150px repeat(${testCategories.length}, minmax(64px, 1fr))` }}
        >
          <div />
          {testCategories.map(cat => (
            <div key={cat.id} className="dt-hm-head" title={cat.description}>{cat.name}</div>
          ))}
          {matrix.map(row => (
            <React.Fragment key={row.labId}>
              <div className="dt-hm-rowlabel">
                <Swatch color={labColor(row.labId)} />
                <span>{row.name} <small>({row.models})</small></span>
              </div>
              {row.cells.map(cell => {
                const v = intensity(cell);
                const mix = cell.entries === 0 ? 0 : 8 + Math.round(v * 92);
                return (
                  <div
                    key={cell.category}
                    className="dt-hm-cell"
                    style={{
                      background: mix === 0
                        ? 'var(--bg-tertiary)'
                        : `color-mix(in oklab, var(--viz-seq) ${mix}%, var(--viz-surface))`,
                      color: mix > 55 ? '#ffffff' : 'var(--text-secondary)',
                    }}
                    onMouseMove={(e) => onTip(e, `${row.name} · ${categoryName[cell.category]}`, [
                      { label: 'Models with a 3P eval', value: `${cell.modelsCovered} of ${row.models} (${pct(cell.share)})` },
                      { label: 'Evaluator entries', value: cell.entries },
                    ])}
                    onMouseLeave={() => onTip(null)}
                  >
                    {cell.entries === 0 ? '–' : metric === 'share' ? pct(cell.share) : cell.entries}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="dt-hm-scale">
        <span>{metric === 'share' ? '0%' : '1'}</span>
        <span className="dt-hm-scale-bar" />
        <span>{metric === 'share' ? '100%' : maxEntries}</span>
        <span style={{ marginLeft: 12 }}>– = no engagement disclosed</span>
      </div>
    </>
  );
}

// ---------- Evaluator x lab matrix ----------

function EvaluatorMatrix({ rows, labs, onTip }) {
  const maxCell = Math.max(1, ...rows.flatMap(r => labs.map(id => r.byLab[id])));
  const size = (n) => (n === 0 ? 0 : 8 + Math.round(Math.sqrt(n / maxCell) * 16));
  return (
    <div className="dt-scroll">
      <div
        className="dt-matrix"
        style={{ gridTemplateColumns: `190px repeat(${labs.length}, minmax(72px, 1fr)) 80px` }}
      >
        <div className="dt-mx-head" />
        {labs.map(id => <div key={id} className="dt-mx-head">{labNames[id]}</div>)}
        <div className="dt-mx-head">Labs served</div>
        {rows.map(row => (
          <div key={row.name} className="dt-mx-row">
            <div className="dt-mx-name">
              <Swatch color={typeColor(row.type)} square />
              {row.name}
            </div>
            {labs.map(id => {
              const n = row.byLab[id];
              return (
                <div
                  key={id}
                  className="dt-mx-cell"
                  onMouseMove={(e) => n > 0 && onTip(e, `${row.name} × ${labNames[id]}`, [
                    { color: labColor(id), label: 'Models evaluated', value: n },
                  ])}
                  onMouseLeave={() => onTip(null)}
                >
                  {n > 0 && (
                    <span className="dt-mx-dot" style={{ width: size(n), height: size(n), background: labColor(id) }} />
                  )}
                </div>
              );
            })}
            <div className="dt-mx-num">{row.labsServed}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Time-series charts (need release dates) ----------

const yearTicks = (min, max) => {
  const ticks = [];
  for (let y = min.getUTCFullYear(); y <= max.getUTCFullYear() + 1; y += 1) {
    const t = Date.UTC(y, 0, 1);
    if (t >= min.getTime() && t <= max.getTime()) ticks.push({ t, label: String(y) });
  }
  return ticks;
};

const niceMax = (v) => {
  if (v <= 5) return Math.max(1, Math.ceil(v));
  const step = v <= 20 ? 5 : 10;
  return Math.ceil(v / step) * step;
};

const valueTicks = (max) => {
  const step = max <= 5 ? 1 : max <= 20 ? 5 : 10;
  const ticks = [];
  for (let v = 0; v <= max; v += step) ticks.push(v);
  return ticks;
};

function TimeAxes({ x, y, width, height, pad, xTicks, yTicks }) {
  return (
    <>
      {yTicks.map(v => (
        <g key={v}>
          <line className={v === 0 ? 'dt-baseline' : 'dt-gridline'} x1={pad.l} x2={width - pad.r} y1={y(v)} y2={y(v)} />
          <text x={pad.l - 8} y={y(v)} dy="0.32em" textAnchor="end">{v}</text>
        </g>
      ))}
      {xTicks.map(tick => (
        <text key={tick.t} x={x(tick.t)} y={height - pad.b + 16} textAnchor="middle">{tick.label}</text>
      ))}
    </>
  );
}

/** Step line: cumulative distinct named organizations. */
function GrowthChart({ points, onTip }) {
  const [ref, width] = useElementWidth();
  const height = 240;
  const pad = { l: 36, r: 16, t: 12, b: 28 };
  if (points.length === 0) return <div ref={ref} className="dt-empty">No dated engagements yet.</div>;

  const t0 = points[0].date.getTime();
  const t1 = Math.max(points[points.length - 1].date.getTime(), Date.now());
  const yMax = niceMax(points[points.length - 1].count);
  const x = (t) => pad.l + ((t - t0) / Math.max(1, t1 - t0)) * (width - pad.l - pad.r);
  const y = (v) => height - pad.b - (v / yMax) * (height - pad.t - pad.b);

  let d = `M${x(points[0].date.getTime())},${y(points[0].count)}`;
  points.slice(1).forEach(p => {
    d += `H${x(p.date.getTime())}V${y(p.count)}`;
  });
  d += `H${x(t1)}`;

  return (
    <div ref={ref}>
      {width > 0 && (
        <svg className="dt-svg" width={width} height={height} role="img" aria-label="Cumulative number of named evaluator organizations over time">
          <TimeAxes x={x} y={y} width={width} height={height} pad={pad}
            xTicks={yearTicks(new Date(t0), new Date(t1))} yTicks={valueTicks(yMax)} />
          <path d={d} fill="none" stroke="var(--viz-seq)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          {points.map(p => (
            <g key={p.date.getTime()}
              onMouseMove={(e) => onTip(e, `${fmtDate(p.date)} · ${p.count} total`, p.added.map(name => ({ label: `+ ${name}` })))}
              onMouseLeave={() => onTip(null)}
            >
              <circle className="dt-hit" cx={x(p.date.getTime())} cy={y(p.count)} r="10" />
              <circle className="dt-dot" cx={x(p.date.getTime())} cy={y(p.count)} r="4" fill="var(--viz-seq)" />
            </g>
          ))}
          <text x={x(points[points.length - 1].date.getTime())} y={y(points[points.length - 1].count) - 10}
            textAnchor="end" style={{ fill: 'var(--text-secondary)', fontWeight: 600 }}>
            {points[points.length - 1].count}
          </text>
        </svg>
      )}
    </div>
  );
}

/** Small multiples: evaluators per model over time, one panel per lab. */
function PerModelPanels({ data, labs, onTip }) {
  const [ref, width] = useElementWidth();
  if (data.length === 0) return <div ref={ref} className="dt-empty">No dated models yet.</div>;

  const t0 = data[0].released.getTime();
  const t1 = data[data.length - 1].released.getTime();
  const yMax = niceMax(Math.max(...data.map(d => d.count)));
  const cols = width > 900 ? 3 : width > 560 ? 2 : 1;
  const gap = 16;
  const panelW = Math.max(0, (width - gap * (cols - 1)) / cols);
  const height = 150;
  const pad = { l: 28, r: 10, t: 10, b: 24 };
  const x = (t) => pad.l + ((t - t0) / Math.max(1, t1 - t0)) * (panelW - pad.l - pad.r);
  const y = (v) => height - pad.b - (v / yMax) * (height - pad.t - pad.b);

  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap }}>
      {width > 0 && labs.map(labId => {
        const points = data.filter(d => d.labId === labId);
        return (
          <div key={labId}>
            <div className="dt-mini-title" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Swatch color={labColor(labId)} />{labNames[labId]}
            </div>
            <svg className="dt-svg" width={panelW} height={height} role="img"
              aria-label={`Evaluators per ${labNames[labId]} model over time`}>
              <TimeAxes x={x} y={y} width={panelW} height={height} pad={pad}
                xTicks={yearTicks(new Date(t0), new Date(t1))} yTicks={valueTicks(yMax)} />
              {points.length === 0 && (
                <text x={panelW / 2} y={height / 2} textAnchor="middle">No dated models</text>
              )}
              {/* Connect frontier models so their trend reads apart from the rest. */}
              {(() => {
                const frontier = points.filter(p => p.frontier === true);
                if (frontier.length < 2) return null;
                const d = frontier.map((p, i) => `${i ? 'L' : 'M'}${x(p.released.getTime())},${y(p.count)}`).join('');
                return <path d={d} fill="none" stroke={labColor(labId)} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />;
              })()}
              {points.map(p => (
                <g key={p.model}
                  onMouseMove={(e) => onTip(e, p.model, [
                    { label: `${fmtDate(p.released)}${p.frontier === true ? ' · frontier' : p.frontier === false ? ' · non-frontier' : ''}` },
                    { color: labColor(labId), label: 'Third-party evaluators', value: p.count },
                  ])}
                  onMouseLeave={() => onTip(null)}
                >
                  <circle className="dt-hit" cx={x(p.released.getTime())} cy={y(p.count)} r="10" />
                  {p.frontier === false ? (
                    <circle cx={x(p.released.getTime())} cy={y(p.count)} r="3.5"
                      fill="var(--viz-surface)" stroke={labColor(labId)} strokeWidth="1.5" />
                  ) : (
                    <circle className="dt-dot" cx={x(p.released.getTime())} cy={y(p.count)} r="4" fill={labColor(labId)} />
                  )}
                </g>
              ))}
            </svg>
          </div>
        );
      })}
    </div>
  );
}

/** Vertical columns per year. `series` stacks; a single series draws plain columns. */
function YearColumns({ years, series, valueOf, format, yMaxOverride, onTip, tipLines }) {
  const [ref, width] = useElementWidth();
  const height = 220;
  const pad = { l: 36, r: 12, t: 20, b: 28 };
  if (years.length === 0) return <div ref={ref} className="dt-empty">No dated engagements yet.</div>;

  const totals = years.map(yr => series.reduce((s, ser) => s + valueOf(yr, ser.key), 0));
  const yMax = yMaxOverride ?? niceMax(Math.max(...totals));
  const band = (width - pad.l - pad.r) / years.length;
  const barW = Math.min(24, band * 0.6);
  const y = (v) => height - pad.b - (v / yMax) * (height - pad.t - pad.b);
  const ticks = yMaxOverride === 1 ? [0, 0.25, 0.5, 0.75, 1] : valueTicks(yMax);

  return (
    <div ref={ref}>
      {width > 0 && (
        <svg className="dt-svg" width={width} height={height} role="img">
          {ticks.map(v => (
            <g key={v}>
              <line className={v === 0 ? 'dt-baseline' : 'dt-gridline'} x1={pad.l} x2={width - pad.r} y1={y(v)} y2={y(v)} />
              <text x={pad.l - 8} y={y(v)} dy="0.32em" textAnchor="end">{format(v)}</text>
            </g>
          ))}
          {years.map((yr, i) => {
            const cx = pad.l + band * i + band / 2;
            let acc = 0;
            const segs = series.map(ser => {
              const v = valueOf(yr, ser.key);
              const top = y(acc + v);
              const bottom = y(acc);
              acc += v;
              return { ...ser, v, top, bottom };
            }).filter(s => s.v > 0);
            return (
              <g key={yr.year}
                onMouseMove={(e) => onTip(e, String(yr.year), tipLines(yr))}
                onMouseLeave={() => onTip(null)}
              >
                <rect className="dt-hit" x={cx - band / 2} y={pad.t} width={band} height={height - pad.t - pad.b} />
                {segs.map((s, si) => {
                  const isTop = si === segs.length - 1;
                  // 2px surface gap between stacked segments.
                  const h = Math.max(0, s.bottom - s.top - (si > 0 ? 2 : 0));
                  const r = isTop ? Math.min(4, h) : 0;
                  const x0 = cx - barW / 2;
                  const yTop = s.top;
                  const path = `M${x0},${yTop + h}V${yTop + r}Q${x0},${yTop} ${x0 + r},${yTop}H${x0 + barW - r}Q${x0 + barW},${yTop} ${x0 + barW},${yTop + r}V${yTop + h}Z`;
                  return <path key={s.key} d={path} fill={s.color} />;
                })}
                <text x={cx} y={height - pad.b + 16} textAnchor="middle">{yr.year}</text>
                <text x={cx} y={y(totals[i]) - 6} textAnchor="middle" style={{ fill: 'var(--text-secondary)' }}>
                  {format(totals[i])}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}

// ---------- Main tab ----------

export default function DataTab() {
  const [labs, setLabs] = useState(labIds);
  const [types, setTypes] = useState(evaluatorTypes);
  const [scope, setScope] = useState('all');
  const [heatMetric, setHeatMetric] = useState('share');
  const [includeOther, setIncludeOther] = useState(false);
  const [tip, setTip] = useState(null);

  const onTip = useCallback((e, title, lines) => {
    if (!e) {
      setTip(null);
      return;
    }
    setTip({ x: e.clientX, y: e.clientY, title, lines });
  }, []);

  const toggle = (list, setList, value) => {
    setList(prev => {
      if (prev.includes(value)) return prev.length > 1 ? prev.filter(v => v !== value) : prev;
      return [...prev, value].sort((a, b) => list.indexOf(a) - list.indexOf(b));
    });
  };

  const data = useMemo(() => filterData({ labs, types, scope }), [labs, types, scope]);
  const frontierInfo = useMemo(
    () => frontierCoverage(allModels.filter(m => labs.includes(m.labId))),
    [labs]
  );
  const summary = useMemo(() => summaryStats(data), [data]);
  const byLab = useMemo(() => labStats(data, labs), [data, labs]);
  const matrix = useMemo(() => domainMatrix(data, labs), [data, labs]);
  const evaluatorRows = useMemo(() => evaluatorStats(data, labs), [data, labs]);
  const dates = useMemo(() => datedCoverage(data.models), [data]);
  const growth = useMemo(() => ecosystemGrowth(data), [data]);
  const perModel = useMemo(() => evaluatorsPerModel(data), [data]);
  const years = useMemo(() => yearlyBreakdown(data), [data]);

  const leaderboardRows = evaluatorRows.filter(r => includeOther || r.type !== 'other');
  const matrixRows = [...leaderboardRows].sort((a, b) =>
    b.labsServed - a.labsServed || b.total - a.total || a.name.localeCompare(b.name)
  );

  const labLegend = labs.map(id => ({ key: id, label: labNames[id], color: labColor(id) }));
  const typeSeries = types.map(t => ({ key: t, label: evaluatorTypeLabels[t], color: typeColor(t) }));

  const labBarRows = (valueFn, tipFn) => byLab.map(l => ({
    key: l.labId,
    label: l.name,
    value: valueFn(l),
    color: labColor(l.labId),
    tipTitle: l.name,
    tipLines: tipFn(l),
  }));

  return (
    <div className="data-tab">
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700,
        color: 'var(--text-primary)', marginBottom: 'var(--space-sm)',
      }}>
        Data &amp; Trends
      </h2>
      <p className="dt-intro">
        Aggregate statistics computed from every model and engagement on the dashboard.
        These figures measure <strong>what labs disclose</strong>, not necessarily all testing that happened.
        A low count may reflect how little a lab publishes rather than how little it tests.
        An <em>engagement</em> is one evaluator working on one model, however many domains it covered.
      </p>

      {/* Filters */}
      <div className="dt-filters">
        <div className="dt-filter-group" role="group" aria-label="Labs">
          <span className="dt-filter-label">Labs</span>
          {labIds.map(id => (
            <button key={id} className="dt-chip" aria-pressed={labs.includes(id)} onClick={() => toggle(labIds, setLabs, id)}>
              <Swatch color={labColor(id)} />{labNames[id]}
            </button>
          ))}
        </div>
        <div className="dt-filter-group" role="group" aria-label="Evaluator types">
          <span className="dt-filter-label">Evaluator types</span>
          {evaluatorTypes.map(t => (
            <button key={t} className="dt-chip" aria-pressed={types.includes(t)} onClick={() => toggle(evaluatorTypes, setTypes, t)}>
              <Swatch color={typeColor(t)} square />{evaluatorTypeLabels[t]}
            </button>
          ))}
        </div>
        <div className="dt-filter-group" role="group" aria-label="Models">
          <span className="dt-filter-label">Models</span>
          <div className="dt-seg">
            <button aria-pressed={scope === 'all'} onClick={() => setScope('all')}>All models</button>
            <button aria-pressed={scope === 'frontier'} onClick={() => setScope('frontier')}>Frontier only</button>
          </div>
        </div>
      </div>

      {scope === 'frontier' && frontierInfo.classified < frontierInfo.total && (
        <div className="dt-notice">
          {frontierInfo.classified} of {frontierInfo.total} selected models are marked frontier or not.
          Set <code>frontier: true</code> or <code>frontier: false</code> on each model in <code>src/data.js</code>.
          Until then, only the {frontierInfo.frontier} model{frontierInfo.frontier === 1 ? '' : 's'} marked{' '}
          <code>true</code> {frontierInfo.frontier === 1 ? 'is' : 'are'} shown.
        </div>
      )}

      {/* Summary tiles */}
      <div className="dt-tiles">
        <div className="dt-tile">
          <div className="dt-tile-label">{scope === 'frontier' ? 'Frontier models tracked' : 'Models tracked'}</div>
          <div className="dt-tile-value">{summary.models}</div>
          <div className="dt-tile-note">across {labs.length} lab{labs.length === 1 ? '' : 's'}</div>
        </div>
        <div className="dt-tile">
          <div className="dt-tile-label">Models with any 3P eval</div>
          <div className="dt-tile-value">{pct(summary.coverage)}</div>
          <div className="dt-tile-note">{summary.modelsWithAny} of {summary.models}</div>
        </div>
        <div className="dt-tile">
          <div className="dt-tile-label">Engagements</div>
          <div className="dt-tile-value">{summary.engagements}</div>
          <div className="dt-tile-note">evaluator × model pairs</div>
        </div>
        <div className="dt-tile">
          <div className="dt-tile-label">Named organizations</div>
          <div className="dt-tile-value">{summary.namedOrgs}</div>
          <div className="dt-tile-note">private + government</div>
        </div>
        <div className="dt-tile">
          <div className="dt-tile-label">Government share</div>
          <div className="dt-tile-value">{pct(summary.governmentShare)}</div>
          <div className="dt-tile-note">of engagements</div>
        </div>
      </div>

      {/* 1. Lab comparison */}
      <section className="dt-section">
        <h3 className="dt-section-title">Which labs use third parties most?</h3>
        <p className="dt-section-sub">
          How often, and how broadly, each lab brings in outside evaluators.
        </p>
        <ChartCard
          title="Lab comparison"
          subtitle="Coverage, depth, breadth, and concentration of third-party engagement"
          table={{
            columns: [
              { key: 'name', label: 'Lab' },
              { key: 'models', label: 'Models', num: true },
              { key: 'withAny', label: 'With any 3P eval', num: true },
              { key: 'coverage', label: 'Coverage', num: true },
              { key: 'engagements', label: 'Engagements', num: true },
              { key: 'avg', label: 'Evaluators / model', num: true },
              { key: 'distinct', label: 'Distinct evaluators', num: true },
              { key: 'top3', label: 'Top-3 share', num: true },
              { key: 'topNames', label: 'Top evaluators' },
            ],
            rows: byLab.map(l => ({
              name: l.name,
              models: l.models,
              withAny: l.modelsWithAny,
              coverage: pct(l.coverage),
              engagements: l.engagements,
              avg: fmt1(l.avgPerModel),
              distinct: l.distinctEvaluators,
              top3: l.engagements ? pct(l.top3Share) : '–',
              topNames: l.topEvaluators.map(t => `${t.name} (${t.n})`).join(', '),
            })),
          }}
        >
          <div className="dt-grid-4">
            <div>
              <div className="dt-mini-title">Models with any 3P eval</div>
              <LabBars
                rows={labBarRows(l => l.coverage, l => [{ label: 'Models with a 3P eval', value: `${l.modelsWithAny} of ${l.models}` }])}
                format={pct} max={1} onTip={onTip}
              />
            </div>
            <div>
              <div className="dt-mini-title">Evaluators per model (avg)</div>
              <LabBars
                rows={labBarRows(l => l.avgPerModel, l => [
                  { label: 'Engagements', value: l.engagements },
                  { label: 'Models', value: l.models },
                ])}
                format={fmt1} onTip={onTip}
              />
            </div>
            <div>
              <div className="dt-mini-title">Distinct evaluators</div>
              <LabBars
                rows={labBarRows(l => l.distinctEvaluators, l => l.topEvaluators.map(t => ({ label: t.name, value: t.n })))}
                format={v => v} onTip={onTip}
              />
            </div>
            <div>
              <div className="dt-mini-title">Top-3 evaluators' share of engagements</div>
              <LabBars
                rows={labBarRows(l => l.top3Share, l => l.topEvaluators.map(t => ({ label: t.name, value: t.n })))}
                format={pct} max={1} onTip={onTip}
              />
            </div>
          </div>
        </ChartCard>
      </section>

      {/* 2. Lab x domain */}
      <section className="dt-section">
        <h3 className="dt-section-title">For what domains?</h3>
        <p className="dt-section-sub">
          Where each lab uses outside evaluators. Darker cells mean more of that lab's models had a
          third-party eval in that domain.
        </p>
        <ChartCard
          title="Lab × eval domain"
          subtitle={heatMetric === 'share'
            ? "Share of each lab's models with at least one third-party eval in the domain"
            : 'Number of evaluator entries in each domain (one per evaluator, model, and domain)'}
          controls={(
            <div className="dt-seg" role="group" aria-label="Metric">
              <button aria-pressed={heatMetric === 'share'} onClick={() => setHeatMetric('share')}>% of models</button>
              <button aria-pressed={heatMetric === 'entries'} onClick={() => setHeatMetric('entries')}>Entries</button>
            </div>
          )}
          table={{
            columns: [
              { key: 'lab', label: 'Lab' },
              ...testCategories.map(c => ({ key: c.id, label: c.name, num: true })),
            ],
            rows: matrix.map(row => ({
              lab: `${row.name} (${row.models} models)`,
              ...Object.fromEntries(row.cells.map(c => [
                c.category,
                `${c.modelsCovered} models · ${c.entries} entries`,
              ])),
            })),
          }}
        >
          <DomainHeatmap matrix={matrix} metric={heatMetric} onTip={onTip} />
        </ChartCard>
      </section>

      {/* 3. Evaluators */}
      <section className="dt-section">
        <h3 className="dt-section-title">Which third parties are used most?</h3>
        <p className="dt-section-sub">
          Engagements per evaluator, broken down by lab. Individuals and unnamed parties are hidden by
          default because "Domain experts" alone would crowd out the organizations.
        </p>
        <div className="dt-grid-2">
          <ChartCard
            title="Evaluator leaderboard"
            subtitle="Number of models each evaluator worked on"
            controls={(
              <label className="dt-check">
                <input type="checkbox" checked={includeOther} onChange={(e) => setIncludeOther(e.target.checked)} />
                Include individuals &amp; unnamed
              </label>
            )}
            table={{
              columns: [
                { key: 'name', label: 'Evaluator' },
                { key: 'type', label: 'Type' },
                ...labs.map(id => ({ key: id, label: labNames[id], num: true })),
                { key: 'total', label: 'Total', num: true },
                { key: 'recurring', label: 'Recurring', num: true },
              ],
              rows: leaderboardRows.map(r => ({
                name: r.name,
                type: evaluatorTypeLabels[r.type],
                ...r.byLab,
                total: r.total,
                recurring: r.recurring,
              })),
            }}
          >
            <Legend items={labLegend} />
            {leaderboardRows.length
              ? <StackedBars rows={leaderboardRows} labs={labs} onTip={onTip} />
              : <div className="dt-empty">No evaluators match the current filters.</div>}
          </ChartCard>

          <ChartCard
            title="Who works with whom"
            subtitle="Evaluators sorted by number of labs served. Dot size = models evaluated."
            table={{
              columns: [
                { key: 'name', label: 'Evaluator' },
                ...labs.map(id => ({ key: id, label: labNames[id], num: true })),
                { key: 'labsServed', label: 'Labs served', num: true },
              ],
              rows: matrixRows.map(r => ({ name: r.name, ...r.byLab, labsServed: r.labsServed })),
            }}
          >
            <Legend items={types.filter(t => includeOther || t !== 'other').map(t => ({
              key: t, label: evaluatorTypeLabels[t], color: typeColor(t),
            }))} square />
            {matrixRows.length
              ? <EvaluatorMatrix rows={matrixRows} labs={labs} onTip={onTip} />
              : <div className="dt-empty">No evaluators match the current filters.</div>}
          </ChartCard>
        </div>
      </section>

      {/* 4. Trends */}
      <section className="dt-section">
        <h3 className="dt-section-title">Trends over time</h3>
        <p className="dt-section-sub">
          How the evaluator ecosystem and lab practices have changed, by model release date.
        </p>

        {dates.dated < dates.total && (
          <div className="dt-notice">
            {dates.dated} of {dates.total} selected models have a release date. Add{' '}
            <code>released: "YYYY-MM-DD"</code> to each model in <code>src/data.js</code> to fill in these charts.
            Undated models are left out of this section.
          </div>
        )}

        {dates.dated > 0 && (
          <>
            <div className="dt-grid-2">
              <ChartCard
                title="Growth of the evaluator ecosystem"
                subtitle="Cumulative number of named organizations (private + government) that have done a disclosed eval"
                table={{
                  columns: [
                    { key: 'date', label: 'First appearance' },
                    { key: 'added', label: 'New evaluator(s)' },
                    { key: 'count', label: 'Cumulative', num: true },
                  ],
                  rows: growth.map(p => ({ date: fmtDate(p.date), added: p.added.join(', '), count: p.count })),
                }}
              >
                <GrowthChart points={growth} onTip={onTip} />
              </ChartCard>

              <ChartCard
                title="Engagements by evaluator type"
                subtitle="Engagements per release year, by type of evaluator"
                table={{
                  columns: [
                    { key: 'year', label: 'Year' },
                    ...typeSeries.map(s => ({ key: s.key, label: s.label, num: true })),
                    { key: 'total', label: 'Total', num: true },
                  ],
                  rows: years.map(yr => ({
                    year: yr.year,
                    ...Object.fromEntries(typeSeries.map(s => [s.key, yr[s.key]])),
                    total: yr.total,
                  })),
                }}
              >
                <Legend items={typeSeries} square />
                <YearColumns
                  years={years}
                  series={typeSeries}
                  valueOf={(yr, key) => yr[key]}
                  format={v => v}
                  onTip={onTip}
                  tipLines={yr => typeSeries.map(s => ({
                    color: s.color, label: s.label, value: `${yr[s.key]} (${pct(yr.total ? yr[s.key] / yr.total : 0)})`,
                  }))}
                />
              </ChartCard>
            </div>

            <ChartCard
              title="Evaluators per model over time"
              subtitle={scope === 'frontier'
                ? 'Each dot is one frontier model release'
                : frontierInfo.classified > 0
                  ? 'Each dot is one model release. Filled dots joined by a line are frontier models; hollow dots are not.'
                  : 'Each dot is one model release'}
              table={{
                columns: [
                  { key: 'date', label: 'Released' },
                  { key: 'lab', label: 'Lab' },
                  { key: 'model', label: 'Model' },
                  { key: 'frontier', label: 'Frontier' },
                  { key: 'count', label: 'Evaluators', num: true },
                ],
                rows: perModel.map(p => ({
                  date: fmtDate(p.released),
                  lab: labNames[p.labId],
                  model: p.model,
                  frontier: p.frontier === null ? '–' : p.frontier ? 'Yes' : 'No',
                  count: p.count,
                })),
              }}
            >
              <PerModelPanels data={perModel} labs={labs} onTip={onTip} />
            </ChartCard>

            <ChartCard
              title="Recurring relationships"
              subtitle="Share of each year's engagements where the evaluator had worked with that lab before"
              table={{
                columns: [
                  { key: 'year', label: 'Year' },
                  { key: 'recurring', label: 'Recurring', num: true },
                  { key: 'total', label: 'Engagements', num: true },
                  { key: 'share', label: 'Share', num: true },
                ],
                rows: years.map(yr => ({
                  year: yr.year, recurring: yr.recurring, total: yr.total, share: pct(yr.total ? yr.recurring / yr.total : 0),
                })),
              }}
            >
              <YearColumns
                years={years}
                series={[{ key: 'share', label: 'Recurring share', color: 'var(--viz-seq)' }]}
                valueOf={yr => (yr.total ? yr.recurring / yr.total : 0)}
                format={pct}
                yMaxOverride={1}
                onTip={onTip}
                tipLines={yr => [
                  { label: 'Recurring', value: yr.recurring },
                  { label: 'First-time', value: yr.total - yr.recurring },
                ]}
              />
            </ChartCard>
          </>
        )}
      </section>

      <Tooltip tip={tip} />
    </div>
  );
}
