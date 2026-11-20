# AI Safety Testing Tracker

Monitoring third-party safety evaluations across frontier AI labs.

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment with Vercel

1. Push this repo to GitHub
2. Connect the repo to Vercel
3. Vercel will auto-deploy on every push to main

## Updating the Data

All data lives in `src/data/`:

- `labs/<lab>.js`: one file per lab, with its models and engagements (most routine updates happen here)
- `taxonomy.js`: `testCategories`, `evaluators`, `evaluatorOrder`
- `site.js`: `siteConfig` (title, last-updated date, notes)
- `analysis.js`: `analysisContent`
- `index.js`: assembles `labsData` and re-exports everything, so components import from `../data`

### Adding a new model release

Open the lab's file in `src/data/labs/` and add a new entry to its `models` object. Models should be ordered newest-first (the first key is the default selected model).

```js
"Claude 5 Opus": {
  systemCard: "https://...",
  released: "2026-05-14",   // YYYY-MM-DD, used by the Data tab trend charts
  frontier: true,           // pushed the lab's capability frontier? true / false / null (unclassified)
  biorisk: [
    { evaluator: "Faculty", recurring: true, source: "https://..." }
  ],
  cybersec: [],
  nuclear: [],
  autonomous: [],
  modelWelfare: [],
},
```

Leave `released` as `""` if the date is unknown. Undated models still count everywhere except the "Trends over time" section on the Data tab.

`frontier` drives the Data tab's "Frontier only" filter and the frontier trend lines. Models left as `null` are excluded when that filter is on.

### Adding a new evaluator engagement

Add an entry to the appropriate category array:

```js
{ 
  evaluator: "Evaluator Name",  // Name of the testing organization
  recurring: true,               // true if they've worked with this lab before
  source: "https://..."          // Link to model card or report
}
```

The `recurring` flag indicates whether this is a repeat engagement as of this model's release:
- `true` = This evaluator tested previous models from this lab
- `false` = First-time engagement with this lab

### Adding a new evaluator

In `src/data/taxonomy.js`, add the evaluator to `evaluators` (color + type) and to the matching list in `evaluatorOrder` (button order on the dashboard):

```js
export const evaluators = {
  // ...existing entries...
  "New Evaluator": { color: "#hexcolor", type: "private" },  // "private" | "public" | "other"
};
```

### Adding a new test category

1. Add the category to `testCategories` in `src/data/taxonomy.js`:
```js
{ 
  id: "newCategory",           // Must match keys in testing objects
  name: "Display Name", 
  description: "Brief description" 
}
```

2. Add the category key to all model testing objects in the `src/data/labs/` files:
```js
newCategory: [],  // or with evaluator entries
```

### Adding a new lab

Create `src/data/labs/newlab.js`:

```js
export const newlab = {
  name: "Lab Name",
  color: "#hexcolor",  // Header background color
  models: {
    "Model Name": {
      biorisk: [],
      cybersec: [],
      nuclear: [],
      autonomous: [],
      modelWelfare: [],
    }
  }
};
```

Then import it in `src/data/index.js` and add it to `labsData` (object order is display order).

## Data tab

Everything on the Data tab is computed from `labsData` by `src/stats.js`, so it updates automatically as you add models.

- Evaluator types (private / government / other) and dashboard colors come from the `evaluators` registry in `src/data/taxonomy.js`. Add every new evaluator there (and to `evaluatorOrder`); unregistered names are counted as private and logged as a warning in the browser console during `npm run dev`.
- Name variants and renames that should count as one evaluator go in `evaluatorAliases` in `src/stats.js` (e.g. `"US AISI"` → `"US CAISSI"`).
- An "engagement" is one (model, evaluator) pair. Domain breakdowns count one entry per (model, evaluator, domain).

## File Structure

```
src/
├── data/
│   ├── index.js                 # Assembles labsData, re-exports everything
│   ├── labs/                    # ← One file per lab; edit these for updates
│   │   ├── anthropic.js
│   │   ├── google.js
│   │   ├── meta.js
│   │   ├── openai.js
│   │   └── xai.js
│   ├── taxonomy.js              # Test categories, evaluators, evaluator order
│   ├── site.js                  # Site title, last-updated date, notes
│   └── analysis.js              # Analysis tab content
├── components/
│   ├── SafetyTestingTracker.jsx # Main component
│   ├── DataTab.jsx              # Data tab (charts)
│   └── DataTab.css
├── stats.js                     # Aggregations behind the Data tab
├── App.jsx
├── main.jsx
└── index.css
```
