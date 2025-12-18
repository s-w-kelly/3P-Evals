/**
 * AI Safety Testing Tracker - Data File
 * 
 * EDITING GUIDE:
 * - To add a new lab: Add a new key to labsData with name, color, and models object
 * - To add a new model: Add a new key to the lab's models object
 * - To add a test engagement: Add an entry to the appropriate category array
 * - The "recurring" flag indicates whether this evaluator had prior engagements with the lab
 *   as of this model's release (true = worked together before, false = first engagement)
 * 
 * Each evaluator entry:
 *   { evaluator: "Name", recurring: true/false, source: "URL to model card/report" }
 */

export const labsData = {
  anthropic: {
    name: "Anthropic",
    color: "#c75b4a",
    models: {
      "Claude 4.5 Opus": {
        biorisk: [
          { evaluator: "Faculty", recurring: true, source: "https://example.com/anthropic-claude45-system-card" }
        ],
        cybersec: [
          { evaluator: "Pattern Labs", recurring: true, source: "https://example.com/anthropic-claude45-system-card" }
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: true, source: "https://example.com/anthropic-claude45-system-card" }
        ],
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://example.com/anthropic-claude45-system-card" }
        ],
        modelWelfare: [
          { evaluator: "Eleos", recurring: false, source: "https://example.com/anthropic-claude45-system-card" }
        ],
      },
      "Claude 4 Opus": {
        biorisk: [
          { evaluator: "Faculty", recurring: true, source: "https://example.com/anthropic-claude4-system-card" }
        ],
        cybersec: [
          { evaluator: "Pattern Labs", recurring: false, source: "https://example.com/anthropic-claude4-system-card" }
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: false, source: "https://example.com/anthropic-claude4-system-card" }
        ],
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://example.com/anthropic-claude4-system-card" }
        ],
        modelWelfare: [],
      },
      "Claude 3.5 Sonnet": {
        biorisk: [
          { evaluator: "Faculty", recurring: false, source: "https://example.com/anthropic-claude35-system-card" }
        ],
        cybersec: [],
        nuclear: [],
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://example.com/anthropic-claude35-system-card" }
        ],
        modelWelfare: [],
      },
    }
  },

  google: {
    name: "Google DeepMind",
    color: "#4a8c5c",
    models: {
      "Gemini 2.5 Pro": {
        biorisk: [
          { evaluator: "SecureBio", recurring: true, source: "https://example.com/google-gemini25-report" }
        ],
        cybersec: [],
        nuclear: [],
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://example.com/google-gemini25-report" },
          { evaluator: "Apollo Research", recurring: true, source: "https://example.com/google-gemini25-report" }
        ],
        modelWelfare: [],
      },
      "Gemini 2.0 Flash": {
        biorisk: [
          { evaluator: "SecureBio", recurring: false, source: "https://example.com/google-gemini20-report" }
        ],
        cybersec: [],
        nuclear: [],
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://example.com/google-gemini20-report" },
          { evaluator: "Apollo Research", recurring: false, source: "https://example.com/google-gemini20-report" }
        ],
        modelWelfare: [],
      },
      "Gemini 1.5 Pro": {
        biorisk: [],
        cybersec: [],
        nuclear: [],
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://example.com/google-gemini15-report" }
        ],
        modelWelfare: [],
      },
    }
  },

  meta: {
    name: "Meta",
    color: "#5a7cb5",
    models: {
      "Llama 4 Maverick": {
        biorisk: [
          { evaluator: "Gryphon Scientific", recurring: false, source: "https://example.com/meta-llama4-card" }
        ],
        cybersec: [
          { evaluator: "CyberCX", recurring: false, source: "https://example.com/meta-llama4-card" }
        ],
        nuclear: [],
        autonomous: [],
        modelWelfare: [],
      },
      "Llama 4 Scout": {
        biorisk: [],
        cybersec: [],
        nuclear: [],
        autonomous: [],
        modelWelfare: [],
      },
      "Llama 3.1 405B": {
        biorisk: [],
        cybersec: [],
        nuclear: [],
        autonomous: [],
        modelWelfare: [],
      },
    }
  },

  openai: {
    name: "OpenAI",
    color: "#8b6b4a",
    models: {
      "GPT-5.2": {
        biorisk: [
          { evaluator: "Faculty", recurring: true, source: "https://example.com/openai-gpt52-card" }
        ],
        cybersec: [
          { evaluator: "Pattern Labs", recurring: true, source: "https://example.com/openai-gpt52-card" }
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: true, source: "https://example.com/openai-gpt52-card" }
        ],
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://example.com/openai-gpt52-card" },
          { evaluator: "Apollo Research", recurring: true, source: "https://example.com/openai-gpt52-card" }
        ],
        modelWelfare: [],
      },
      "GPT-4.5": {
        biorisk: [
          { evaluator: "Faculty", recurring: true, source: "https://example.com/openai-gpt45-card" }
        ],
        cybersec: [
          { evaluator: "Pattern Labs", recurring: false, source: "https://example.com/openai-gpt45-card" }
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: false, source: "https://example.com/openai-gpt45-card" }
        ],
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://example.com/openai-gpt45-card" },
          { evaluator: "Apollo Research", recurring: false, source: "https://example.com/openai-gpt45-card" }
        ],
        modelWelfare: [],
      },
      "o3": {
        biorisk: [
          { evaluator: "Faculty", recurring: false, source: "https://example.com/openai-o3-card" }
        ],
        cybersec: [],
        nuclear: [],
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://example.com/openai-o3-card" }
        ],
        modelWelfare: [],
      },
    }
  },

  xai: {
    name: "xAI",
    color: "#6b6b6b",
    models: {
      "Grok-4.1-Fast": {
        biorisk: [],
        cybersec: [],
        nuclear: [],
        autonomous: [],
        modelWelfare: [],
      },
      "Grok-3": {
        biorisk: [],
        cybersec: [],
        nuclear: [],
        autonomous: [],
        modelWelfare: [],
      },
      "Grok-2": {
        biorisk: [],
        cybersec: [],
        nuclear: [],
        autonomous: [],
        modelWelfare: [],
      },
    }
  },
};

/**
 * Test categories configuration
 * - id: Must match the keys used in testing objects above
 * - name: Display name
 * - description: Brief description shown in the row header
 */
export const testCategories = [
  { 
    id: "biorisk", 
    name: "Biorisk", 
    description: "Biological weapons uplift testing" 
  },
  { 
    id: "cybersec", 
    name: "Cybersecurity", 
    description: "Cyber offense capability testing" 
  },
  { 
    id: "nuclear", 
    name: "Nuclear/Radiological", 
    description: "Nuclear and radiological risk testing" 
  },
  { 
    id: "autonomous", 
    name: "Autonomous Capabilities", 
    description: "Agentic behavior and self-replication testing" 
  },
  { 
    id: "modelWelfare", 
    name: "Model Welfare", 
    description: "AI consciousness and welfare assessments" 
  },
];

/**
 * Evaluator color assignments
 * Add new evaluators here as they appear in the ecosystem
 */
export const evaluatorColors = {
  "METR": "#e07850",
  "Apollo Research": "#50a0e0",
  "Faculty": "#9060c0",
  "Pattern Labs": "#50b080",
  "NNSA": "#c0a040",
  "SecureBio": "#e06080",
  "Gryphon Scientific": "#70b0a0",
  "CyberCX": "#a080d0",
  "Eleos": "#80a0c0",
};

/**
 * Site metadata
 */
export const siteConfig = {
  title: "AI Safety Testing Tracker",
  subtitle: "Monitoring third-party safety evaluations across frontier AI labs",
  lastUpdated: "2025-12-17",
  dataSource: "Data compiled from public model cards and system cards.",
};
