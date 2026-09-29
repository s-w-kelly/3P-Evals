/**
 * AI Safety Testing Tracker - Statistics
 *
 * Pure functions that derive every number on the Data tab from labsData.
 * Nothing here is hand-maintained: add models/engagements in data.js and the
 * Data tab updates automatically.
 *
 * Counting units:
 * - "Engagement" = one (model, evaluator) pair. An evaluator listed under three
 *   domains for the same model counts once.
 * - Domain-level stats (heatmap) count one entry per (model, evaluator, domain).
 */

import { labsData, testCategories, evaluators } from './data';

// Spelling variants / renames that should roll up to one evaluator.
// Keys are names as they may appear in data.js; values are the canonical name.
export const evaluatorAliases = {
  "US AISI": "US CAISI",
};

export const canonicalName = (name) => evaluatorAliases[name] || name;

export const evaluatorTypes = ['private', 'public', 'other'];
export const evaluatorTypeLabels = {
  private: 'Private',
  public: 'Government',
  other: 'Individuals & unnamed',
};

export const evaluatorType = (name) => evaluators[canonicalName(name)]?.type || 'private';

const parseDate = (value) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const d = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? null : d;
};

export const labIds = Object.keys(labsData);
export const labNames = Object.fromEntries(labIds.map(id => [id, labsData[id].name]));

// ---------- Flattened base data ----------

// One entry per model.
export const allModels = labIds.flatMap(labId =>
  Object.entries(labsData[labId].models).map(([model, data]) => ({
    labId,
    model,
    released: parseDate(data.released),
    frontier: typeof data.frontier === 'boolean' ? data.frontier : null,
  }))
);

// One entry per (model, evaluator, domain) as listed in data.js.
export const allRecords = labIds.flatMap(labId =>
  Object.entries(labsData[labId].models).flatMap(([model, data]) =>
    testCategories.flatMap(cat =>
      (data[cat.id] || []).map(entry => {
        const evaluator = canonicalName(entry.evaluator);
        return {
          labId,
          model,
          released: parseDate(data.released),
          frontier: typeof data.frontier === 'boolean' ? data.frontier : null,
          category: cat.id,
          evaluator,
          type: evaluatorType(evaluator),
          recurring: !!entry.recurring,
        };
      })
    )
  )
);

// Evaluator names used in labsData but missing from the evaluators registry.
export const unregisteredEvaluators = [...new Set(
  allRecords.filter(r => !evaluators[r.evaluator]).map(r => r.evaluator)
)];

if (import.meta.env?.DEV && unregisteredEvaluators.length) {
  console.warn('Evaluators missing from the evaluators registry in data.js:', unregisteredEvaluators);
}

// ---------- Filtering ----------

/**
 * Applies lab, evaluator-type, and model-scope filters.
 * scope: 'all' | 'frontier' (only models marked frontier: true).
 * Returns { models, records, pairs } where pairs are unique (model, evaluator)
 * engagements with the domains each covered.
 */
export function filterData({ labs, types, scope = 'all' }) {
  const labSet = new Set(labs);
  const typeSet = new Set(types);
  const inScope = (m) => scope !== 'frontier' || m.frontier === true;
  const models = allModels.filter(m => labSet.has(m.labId) && inScope(m));
  const records = allRecords.filter(r => labSet.has(r.labId) && typeSet.has(r.type) && inScope(r));

  const pairMap = new Map();
  records.forEach(r => {
    const key = `${r.labId}|${r.model}|${r.evaluator}`;
    if (!pairMap.has(key)) {
      pairMap.set(key, {
        labId: r.labId,
        model: r.model,
        released: r.released,
        evaluator: r.evaluator,
        type: r.type,
        recurring: false,
        categories: new Set(),
      });
    }
    const pair = pairMap.get(key);
    pair.recurring = pair.recurring || r.recurring;
    pair.categories.add(r.category);
  });

  return { models, records, pairs: [...pairMap.values()] };
}

const modelKey = (labId, model) => `${labId}|${model}`;

const countBy = (items, keyFn) => {
  const out = {};
  items.forEach(item => {
    const k = keyFn(item);
    out[k] = (out[k] || 0) + 1;
  });
  return out;
};

// ---------- Summary ----------

export function summaryStats({ models, pairs }) {
  const modelsWithAny = new Set(pairs.map(p => modelKey(p.labId, p.model)));
  const namedOrgs = new Set(pairs.filter(p => p.type !== 'other').map(p => p.evaluator));
  const governmentPairs = pairs.filter(p => p.type === 'public').length;
  return {
    models: models.length,
    engagements: pairs.length,
    namedOrgs: namedOrgs.size,
    coverage: models.length ? modelsWithAny.size / models.length : 0,
    modelsWithAny: modelsWithAny.size,
    governmentShare: pairs.length ? governmentPairs / pairs.length : 0,
  };
}

// ---------- Lab comparison ----------

export function labStats({ models, pairs }, labs) {
  return labs.map(labId => {
    const labModels = models.filter(m => m.labId === labId);
    const labPairs = pairs.filter(p => p.labId === labId);
    const withAny = new Set(labPairs.map(p => p.model));
    const byEvaluator = Object.entries(countBy(labPairs, p => p.evaluator))
      .sort((a, b) => b[1] - a[1]);
    const top3 = byEvaluator.slice(0, 3).reduce((sum, [, n]) => sum + n, 0);
    return {
      labId,
      name: labNames[labId],
      models: labModels.length,
      modelsWithAny: withAny.size,
      coverage: labModels.length ? withAny.size / labModels.length : 0,
      engagements: labPairs.length,
      avgPerModel: labModels.length ? labPairs.length / labModels.length : 0,
      distinctEvaluators: byEvaluator.length,
      topEvaluators: byEvaluator.slice(0, 3).map(([name, n]) => ({ name, n })),
      top3Share: labPairs.length ? top3 / labPairs.length : 0,
    };
  });
}

// ---------- Lab x domain ----------

/**
 * For each lab and domain: share of the lab's models with at least one
 * third-party eval in that domain, plus the raw entry count.
 */
export function domainMatrix({ models, records }, labs) {
  return labs.map(labId => {
    const labModelCount = models.filter(m => m.labId === labId).length;
    const cells = testCategories.map(cat => {
      const catRecords = records.filter(r => r.labId === labId && r.category === cat.id);
      const modelsCovered = new Set(catRecords.map(r => r.model)).size;
      return {
        category: cat.id,
        modelsCovered,
        entries: catRecords.length,
        share: labModelCount ? modelsCovered / labModelCount : 0,
      };
    });
    return { labId, name: labNames[labId], models: labModelCount, cells };
  });
}

// Total entries per domain across the selected labs (for the column footer).
export function domainTotals({ records }) {
  return testCategories.map(cat => ({
    category: cat.id,
    entries: records.filter(r => r.category === cat.id).length,
  }));
}

// ---------- Evaluators ----------

/**
 * One row per evaluator: engagements broken down by lab, domains covered,
 * number of labs served. Sorted by total engagements, descending.
 */
export function evaluatorStats({ pairs, records }, labs) {
  const byName = {};
  pairs.forEach(p => {
    if (!byName[p.evaluator]) {
      byName[p.evaluator] = {
        name: p.evaluator,
        type: p.type,
        total: 0,
        byLab: Object.fromEntries(labs.map(id => [id, 0])),
        domains: {},
        recurring: 0,
      };
    }
    const row = byName[p.evaluator];
    row.total += 1;
    row.byLab[p.labId] += 1;
    if (p.recurring) row.recurring += 1;
  });
  records.forEach(r => {
    const row = byName[r.evaluator];
    if (row) row.domains[r.category] = (row.domains[r.category] || 0) + 1;
  });
  return Object.values(byName)
    .map(row => ({
      ...row,
      labsServed: labs.filter(id => row.byLab[id] > 0).length,
    }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

// ---------- Trends (require release dates) ----------

// How many of the given models have been marked frontier true/false.
export function frontierCoverage(models) {
  const classified = models.filter(m => m.frontier !== null).length;
  const frontier = models.filter(m => m.frontier === true).length;
  return { classified, frontier, total: models.length };
}

export function datedCoverage(models) {
  const dated = models.filter(m => m.released).length;
  return { dated, total: models.length };
}

/**
 * Cumulative count of distinct named organizations (private + government)
 * at each release date where a new one first appears.
 */
export function ecosystemGrowth({ pairs }) {
  const dated = pairs
    .filter(p => p.released && p.type !== 'other')
    .sort((a, b) => a.released - b.released);
  const seen = new Set();
  const points = [];
  dated.forEach(p => {
    if (seen.has(p.evaluator)) return;
    seen.add(p.evaluator);
    const last = points[points.length - 1];
    if (last && last.date.getTime() === p.released.getTime()) {
      last.count = seen.size;
      last.added.push(p.evaluator);
    } else {
      points.push({ date: p.released, count: seen.size, added: [p.evaluator] });
    }
  });
  return points;
}

// Evaluator count for every dated model.
export function evaluatorsPerModel({ models, pairs }) {
  const counts = countBy(pairs, p => modelKey(p.labId, p.model));
  return models
    .filter(m => m.released)
    .map(m => ({ ...m, count: counts[modelKey(m.labId, m.model)] || 0 }))
    .sort((a, b) => a.released - b.released);
}

/**
 * Per release year: engagements by evaluator type, and how many were
 * recurring relationships.
 */
export function yearlyBreakdown({ pairs }) {
  const years = {};
  pairs.filter(p => p.released).forEach(p => {
    const year = p.released.getUTCFullYear();
    if (!years[year]) years[year] = { year, total: 0, recurring: 0, private: 0, public: 0, other: 0 };
    const y = years[year];
    y.total += 1;
    y[p.type] += 1;
    if (p.recurring) y.recurring += 1;
  });
  return Object.values(years).sort((a, b) => a.year - b.year);
}
