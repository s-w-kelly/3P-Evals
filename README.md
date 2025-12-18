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

All data lives in `src/data.js`. This is the only file you need to edit for routine updates.

### Adding a new model release

Find the lab in `labsData` and add a new entry to its `models` object. Models should be ordered newest-first (the first key is the default selected model).

```js
"Claude 5 Opus": {
  biorisk: [
    { evaluator: "Faculty", recurring: true, source: "https://..." }
  ],
  cybersec: [],
  nuclear: [],
  autonomous: [],
  modelWelfare: [],
},
```

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

### Adding a new evaluator to the color palette

Add the evaluator name and hex color to `evaluatorColors`:

```js
export const evaluatorColors = {
  // ...existing entries...
  "New Evaluator": "#hexcolor",
};
```

### Adding a new test category

1. Add the category to `testCategories`:
```js
{ 
  id: "newCategory",           // Must match keys in testing objects
  name: "Display Name", 
  description: "Brief description" 
}
```

2. Add the category key to all model testing objects in `labsData`:
```js
newCategory: [],  // or with evaluator entries
```

### Adding a new lab

Add a new top-level entry to `labsData`:

```js
newlab: {
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
}
```

## File Structure

```
src/
├── data.js                      # ← Edit this for updates
├── components/
│   └── SafetyTestingTracker.jsx # Main component
├── App.jsx
├── main.jsx
└── index.css
```
