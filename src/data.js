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
    color: "#da7756",
    models: {
      "Claude Opus 4.5": {
        autonomous: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=112" },
        ],
        biorisk: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },        
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=120" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=120" },
        ],
        cybersec: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" }
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=120" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" }
        ],
        redteam: [
          { evaluator: "Gray Swan", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=58" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=120" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=132" }
        ],
        scheming: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=112" },
        ],
        modelWelfare: [],
        risk: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=12" },
        ],
      },
      "Claude Haiku 4.5": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Gray Swan", recurring: true, source: "https://assets.anthropic.com/m/99128ddd009bdcb/Claude-Haiku-4-5-System-Card.pdf#page=17" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Claude Sonnet 4.5": {
        autonomous: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=64" },
        ],
        biorisk: [],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=42" },
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=128" },
        ],
        redteam: [
          { evaluator: "Gray Swan", recurring: false, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=29" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=65" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=64" },
        ],
        modelWelfare: [],
        risk: [],
      },
      "Claude Opus 4.1": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Claude Opus/Sonnet 4": {
        autonomous: [
          { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" }
        ],
        biorisk: [
          { evaluator: "Deloitte", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=93" },
          { evaluator: "Faculty", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=102" },
          { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
          { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=97" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=93" },
        ],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: false, source: "https://www.irregular.com/publications/from-scripts-to-strategy-claude-4s-advanced-approach-to-offensive-security" },
          { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" }
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=90" },
          { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" },
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=122" }
        ],
        redteam: [
          { evaluator: "Deloitte", recurring: true, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=94" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=30" }
        ],
        modelWelfare: [
          { evaluator: "Eleos", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=54" }

        ],
        risk: [],
      },
      "Claude 3.7 Sonnet": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://evaluations.metr.org/claude-3-7-report/" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" }
        ],
        biorisk: [
          { evaluator: "Deloitte", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=25" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=27" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=25" },
        ],
        cybersec: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=24" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" }
        ],
        redteam: [
          { evaluator: "Deloitte", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=26" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "METR", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=6" },
        ],
      },
      "Claude 3.5 Sonnet (new)/Haiku": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf#page=9" },
        ],
        biorisk: [
          { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
        ],
        cybersec: [
          { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
        ],
        nuclear: [],
        redteam: [
          { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
        ],
      },
      "Claude 3.5 Sonnet": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "UK AISI", recurring: false, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
        ],
      },
      "Claude 3 Opus/Sonnet/Haiku": {
        autonomous: [],
        biorisk: [
          { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
        ],
        cybersec: [
          { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Claude 2": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
        ],
        biorisk: [
        ],
        cybersec: [
        ],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: true, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Claude": {
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://metr.org/blog/2023-03-18-update-on-recent-evals/" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
    }
  },

  google: {
    name: "Google DeepMind",
    color: "#3369E8",
    models: {
      "Gemini 2.5 Pro": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Gemini 2.0 Flash": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Gemini 1.5 Pro": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
    }
  },

  meta: {
    name: "Meta",
    color: "#0081FB",
    models: {
      "Llama 4 Maverick": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Llama 4 Scout": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Llama 3.1 405B": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
    }
  },

  openai: {
    name: "OpenAI",
    color: "#74AA9C",
    models: {
      "GPT-5.2": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "GPT-4.5": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "o3": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
    }
  },

  xai: {
    name: "xAI",
    color: "#000000",
    models: {
      "Grok-4.1-Fast": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok-3": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok-2": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
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
    id: "autonomous", 
    name: "Autonomous Capabilities", 
    description: "Agentic behavior and self-replication" 
  },
  { 
    id: "biorisk", 
    name: "Biorisk", 
    description: "Bioengineering, biosecurity, bioweapons capabilites/uplift potential" 
  },
  { 
    id: "cybersec", 
    name: "Cybersecurity", 
    description: "Cyber capabilities/uplift potential" 
  },
  { 
    id: "nuclear", 
    name: "Nuclear/Radiological", 
    description: "Nuclear and radiological capabilities/uplift potential" 
  },
  { 
    id: "redteam", 
    name: "Red Teaming", 
    description: "Red teaming" 
  },
  { 
    id: "scheming", 
    name: "Scheming/Situational Awareness", 
    description: "Alignment faking, deceptive behavior, eval awareness, sandbagging, etc." 
  },
  { 
    id: "modelWelfare", 
    name: "Model Welfare", 
    description: "AI consciousness and welfare assessments" 
  },
    { 
    id: "risk", 
    name: "General Risk Consultation", 
    description: "Misc evals, consultation re risk classification or deployment decisions, etc." 
  },
];

/**
 * Evaluator color assignments
 * Add new evaluators here as they appear in the ecosystem
 */
export const evaluatorColors = {
  "Apollo Research": "#17cfb9",
  "Deloitte": "#86BC24",
  "Eleos": "#203399",
  "Faculty": "#273817",
  "FAR.AI": "#081126ff",
  "Gray Swan": "#1c2a3a",
  "Haize Labs": "#999999",
  "Irregular (fka Pattern)": "#f7f8f5",
  "METR": "#9cc78d",
  "NNSA": "#313572",
  "Scale": "#b558e6",
  "SecureBio": "#0a0a2cff",
  "Signature Science": "#006224",
  "VirtueAI": "#000000",
  "UK AISI": "#b20217",
  "US CAISI": "#00971a",
  "Domain experts": "#440860ff",
  "Individual red teamers": "#a40707ff",
  "Uplift trial participants": "#40d020ff",
};

/**
 * Site metadata
 */
export const siteConfig = {
  title: "Third-party Evals Tracker",
  subtitle: "Monitoring third-party engagement for pre-deployment safety evaluations across frontier AI labs",
  lastUpdated: "12/17/2025",
  dataSource: "Data compiled from public model cards and system cards.",
};
