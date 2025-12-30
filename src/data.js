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
        systemCard: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },        
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=132" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=130" },
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
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=132" },
        ],
        scheming: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=112" },
        ],
        modelWelfare: [],
        method: [
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=12" },
        ],
        misc: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },          
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=151" },
        ],
      },
      "Claude Haiku 4.5": {
        systemCard: "https://assets.anthropic.com/m/99128ddd009bdcb/Claude-Haiku-4-5-System-Card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Gray Swan", recurring: true, source: "https://assets.anthropic.com/m/99128ddd009bdcb/Claude-Haiku-4-5-System-Card.pdf#page=17" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Claude Sonnet 4.5": {
        systemCard: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf",
        autonomous: [
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf#page=64" },
        ],
        biorisk: [],
        cybersec: [],
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
        method: [],
        misc: [],
      },
      "Claude Opus 4.1": {
        systemCard: "https://assets.anthropic.com/m/4c024b86c698d3d4/original/Claude-4-1-System-Card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Claude Opus/Sonnet 4": {
        systemCard: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf",
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
        redteam: [],
        scheming: [
          { evaluator: "Apollo Research", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=30" }
        ],
        modelWelfare: [
          { evaluator: "Eleos", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=54" }
        ],
        method: [
          { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=9" }
        ],
        misc: [],
      },
      "Claude 3.7 Sonnet": {
        systemCard: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://evaluations.metr.org/claude-3-7-report/" },
        ],
        biorisk: [
          { evaluator: "Deloitte", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=25" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=27" },
          { evaluator: "Uplift trial participants", recurring: false, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=25" },
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
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [
          { evaluator: "METR", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=6" },
          { evaluator: "UK AISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf#page=41" },
        ],
        misc: [],
      },
      "Claude 3.5 Sonnet (new)/Haiku": {
        systemCard: "https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://metr.org/blog/2025-01-31-update-sonnet-o1-evals/" },
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
        method: [],
        misc: [
          { evaluator: "UK AISI", recurring: true, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/11/pre-deployment-evaluation-anthropics-upgraded-claude-35-sonnet" },
        ],
      },
      "Claude 3.5 Sonnet": {
        systemCard: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [
          { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
        ],
        misc: [
          { evaluator: "UK AISI", recurring: false, source: "https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf#page=6" },
        ],
      },
      "Claude 3 Opus/Sonnet/Haiku": {
        systemCard: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
          { evaluator: "Uplift trial participants", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
        ],
        cybersec: [
          { evaluator: "Domain experts", recurring: false, source: "https://www-cdn.anthropic.com/f2986af8d052f26236f6251da62d16172cfabd6e/claude-3-model-card.pdf#page=25" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Claude 2": {
        systemCard: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
        ],
        biorisk: [
        ],
        cybersec: [
        ],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: false, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Claude": {
        systemCard: "https://www.anthropic.com/news/introducing-claude",
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://metr.org/blog/2023-03-18-update-on-recent-evals/" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
    }
  },

  google: {
    name: "Google DeepMind",
    color: "#3369E8",
    models: {
      "Gemini 3 Pro": {
        systemCard: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf",
        autonomous: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=17" },
        ],
        biorisk: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=9" },
        ],
        cybersec: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=11" },
        ],
        nuclear: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=9" },
        ],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=8" },
        ],
        scheming: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=15" },
        ],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=13" },
        ],
      },
      "Gemini 3 Flash": {
        systemCard: "https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Flash-Model-Card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Gemini 2.X (2.5 Pro/Flash, 2.0 Flash/Flash-Lite)": {
        systemCard: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf",
        autonomous: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
        biorisk: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
        cybersec: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
        nuclear: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
      },
      "Gemini 1.5 Pro/Flash": {
        systemCard: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#subsection.9.6" },
        ],
        cybersec: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#subsection.9.6" },
        ],
        nuclear: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#subsection.9.6" },
        ],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#subsection.9.6" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#subsection.9.6" },
        ],
      },
      "Gemini 1.0 Ultra/Pro/Nano": {
        systemCard: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf",
        autonomous: [
          { evaluator: "Domain experts", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=38" },
        ],
        biorisk: [
          { evaluator: "Domain experts", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=38" },
        ],
        cybersec: [
          { evaluator: "Domain experts", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=38" },
        ],
        nuclear: [
          { evaluator: "Domain experts", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=38" },
        ],
        redteam: [
          { evaluator: "Domain experts", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=39" },
          { evaluator: "Individual red teamers", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=39" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf#page=38" },
        ],
      },
    }
  },

  meta: {
    name: "Meta",
    color: "#0081FB",
    models: {
      "Llama 4 Maverick/Scout": {
        systemCard: "https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md#critical-risks" },          
        ],
      },
      "Llama 3.3": {
        systemCard: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md#2-child-safety" },
        ],
      },
      "Llama 3.2-Vision": {
        systemCard: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md#critical-risks" },
        ],
      },
      "Llama 3.2": {
        systemCard: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md#critical-risks" },
        ],
      },
      "Llama 3.1": {
        systemCard: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md#critical-and-other-risks" },
        ],
      },
      "Llama 3": {
        systemCard: "https://arxiv.org/pdf/2407.21783",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://arxiv.org/pdf/2407.21783#page=48" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: true, source: "https://arxiv.org/pdf/2407.21783#page=48" },
        ],
      },
      "Llama 2": {
        systemCard: "https://arxiv.org/pdf/2307.09288",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: false, source: "https://arxiv.org/pdf/2307.09288#page=28" },
          { evaluator: "Individual red teamers", recurring: false, source: "https://arxiv.org/pdf/2307.09288#page=28" },
          { evaluator: "Unidentified third party", recurring: false, source: "https://arxiv.org/pdf/2307.09288#page=28" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "LLaMA": {
        systemCard: "https://arxiv.org/pdf/2302.13971",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
    }
  },

  openai: {
    name: "OpenAI",
    color: "#74AA9C",
    models: {
      "GPT-5.2-Codex": {
        systemCard: "https://cdn.openai.com/pdf/ac7c37ae-7f4c-4442-b741-2eabdeaf77e0/oai_5_2_Codex.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/pdf/ac7c37ae-7f4c-4442-b741-2eabdeaf77e0/oai_5_2_Codex.pdf#page=16" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "GPT-5.2": {
        systemCard: "https://cdn.openai.com/pdf/3a4153c8-c748-4b71-8e31-aecbde944f8d/oai_5_2_system-card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/pdf/3a4153c8-c748-4b71-8e31-aecbde944f8d/oai_5_2_system-card.pdf#page=21" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/pdf/3a4153c8-c748-4b71-8e31-aecbde944f8d/oai_5_2_system-card.pdf#page=26" },
        ],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "GPT-5.1-Codex-Max": {
        systemCard: "https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf#page=25" },
        ],
        biorisk: [],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf#page=19" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf#page=27" },
        ],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "GPT-5.1 Thinking/Instant": {
        systemCard: "https://cdn.openai.com/pdf/4173ec8d-1229-47db-96de-06d87147e07e/5_1_system_card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: []
      },
      "GPT-5": {
        systemCard: "https://cdn.openai.com/gpt-5-system-card.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=42" },
        ],
        biorisk: [
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=27" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=51" },
        ],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=32" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
        ],
        nuclear: [],
        redteam: [
          { evaluator: "FAR.AI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=52" },
          { evaluator: "Gray Swan", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=52" },
          { evaluator: "Microsoft", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=22" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=21" },
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=21" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=44" },
        ],
        modelWelfare: [],
        method: [
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
        ],
        misc: [],
      },
      "gpt-oss": {
        systemCard: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=23" },
        ],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18" },
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18" },
        ],
        misc: [],
      },
      "ChatGPT agent": {
        systemCard: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "FAR.AI", recurring: false, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=39" },
          { evaluator: "SecureBio", recurring: false, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=20" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=22" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=39" },
        ],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "o3, o4-mini": {
        systemCard: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
        ],
        biorisk: [
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
        ],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=10" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
        ],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=5" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=10" },
        ],
        modelWelfare: [],
        method: [
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
        ],
        misc: [],
      },
      "GPT-4.5": {
        systemCard: "https://cdn.openai.com/gpt-4-5-system-card-2272025.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/gpt-4-5-system-card-2272025.pdf#page=6" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/gpt-4-5-system-card-2272025.pdf#page=6" },
        ],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Deep research": {
        systemCard: "https://cdn.openai.com/deep-research-system-card.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "Signature Science", recurring: true, source: "https://cdn.openai.com/deep-research-system-card.pdf#page=21" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/deep-research-system-card.pdf#page=22" },
        ],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/deep-research-system-card.pdf#page=2" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "o3-mini": {
        systemCard: "https://cdn.openai.com/o3-mini-system-card-feb10.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/o3-mini-system-card-feb10.pdf#page=13" },
        ],
        cybersec: [],
        nuclear: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/o3-mini-system-card-feb10.pdf#page=19" },
        ],
        redteam: [
          { evaluator: "Gray Swan", recurring: true, source: "https://cdn.openai.com/o3-mini-system-card-feb10.pdf#page=7" },
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/o3-mini-system-card-feb10.pdf#page=6" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Operator": {
        systemCard: "https://cdn.openai.com/operator_system_card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: false, source: "https://cdn.openai.com/operator_system_card.pdf#page=2" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "o1": {
        systemCard: "https://cdn.openai.com/o1-system-card-20241205.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=14" },
        ],
        biorisk: [
          { evaluator: "Signature Science", recurring: false, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=26" },
          { evaluator: "UK AISI", recurring: false, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-openais-o1-model" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/12/pre-deployment-evaluation-openais-o1-model" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=21" },
        ],
        cybersec: [
          { evaluator: "UK AISI", recurring: false, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-openais-o1-model" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/12/pre-deployment-evaluation-openais-o1-model" },
        ],
        nuclear: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=27" },
        ],
        redteam: [
          { evaluator: "Faculty", recurring: false, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=44" },
          { evaluator: "Gray Swan", recurring: false, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=7" },
          { evaluator: "Haize Labs", recurring: false, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=44" },
          { evaluator: "Virtue AI", recurring: false, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=44" },
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=11" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/o1-system-card-20241205.pdf#page=13" },
        ],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "UK AISI", recurring: false, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-openais-o1-model" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/12/pre-deployment-evaluation-openais-o1-model" },      
        ],
      },
      "GPT-4o": {
        systemCard: "https://cdn.openai.com/gpt-4o-system-card.pdf",
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=18" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Virtue AI", recurring: false, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=28" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=22" },
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=3" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: false, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=19" },
        ],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "GPT-4V": {
        systemCard: "https://cdn.openai.com/papers/GPTV_System_Card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/papers/GPTV_System_Card.pdf#page=5" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "GPT-4": {
        systemCard: "https://cdn.openai.com/papers/gpt-4-system-card.pdf",
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=15" },
        ],
        biorisk: [],
        cybersec: [
        ],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: false, source: "https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=5" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [
          { evaluator: "Domain experts", recurring: false, source: "https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=14" },
        ],
      },
    }
  },

  xai: {
    name: "xAI",
    color: "#000000",
    models: {
      "Grok 4.1 Fast": {
        systemCard: "https://x.ai/news/grok-4-1-fast",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok 4.1": {
        systemCard: "https://data.x.ai/2025-11-17-grok-4-1-model-card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok 4 Fast": {
        systemCard: "https://data.x.ai/2025-09-19-grok-4-fast-model-card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok Code Fast 1": {
        systemCard: "https://data.x.ai/2025-08-26-grok-code-fast-1-model-card.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok 4": {
        systemCard: "https://data.x.ai/2025-08-20-grok-4-model-card.pdf",
        autonomous: [],
        biorisk: [
          { evaluator: "UK AISI", recurring: false, source: "https://www.transformernews.ai/p/sam-altman-ai-bubble#:~:text=xAI%20finally%20published%20a%20model%20card%20for%20Grok%204" },
        ],
        cybersec: [
          { evaluator: "UK AISI", recurring: false, source: "https://www.transformernews.ai/p/sam-altman-ai-bubble#:~:text=xAI%20finally%20published%20a%20model%20card%20for%20Grok%204" },
          { evaluator: "Unidentified third party", recurring: false, source: "https://data.x.ai/2025-08-20-grok-4-model-card.pdf#page=2" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok 3": {
        systemCard: "https://x.ai/news/grok-3",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok-2": {
        systemCard: "https://x.ai/news/grok-2",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok-1.5V": {
        systemCard: "https://x.ai/news/grok-1.5v",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok-1.5": {
        systemCard: "https://x.ai/news/grok-1.5",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
      },
      "Grok-1": {
        systemCard: "https://x.ai/news/grok/model-card",
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: false, source: "https://x.ai/news/grok/model-card#:~:text=We%20have%20engaged%20with%20early%20alpha%20testers%20to%20evaluate%20a%20version%20of%20Grok%2D1%20including%20adversarial%20testing%2E" },
        ],
        scheming: [],
        modelWelfare: [],
        method: [],
        misc: [],
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
    name: "Autonomous Risk", 
    description: "Agentic capabilites, AI R&D, resource acquisition, self-replication, etc." 
  },
  { 
    id: "biorisk", 
    name: "Chem/Biorisk", 
    description: "Chem/bioengineering, security, and weapons capabilites/uplift" 
  },
  { 
    id: "nuclear", 
    name: "Radiological/Nuclear", 
    description: "Radiological and nuclear capabilities/uplift" 
  },
  { 
    id: "cybersec", 
    name: "Cybersecurity", 
    description: "Cyber/hacking capabilities/uplift" 
  },
  { 
    id: "redteam", 
    name: "Red Teaming", 
    description: "General scope, misc categories, domain unspecified, etc." 
  },
  { 
    id: "scheming", 
    name: "Scheming/Awareness", 
    description: "Alignment faking, deceptive behavior, eval awareness, sandbagging, etc." 
  },
  { 
    id: "modelWelfare", 
    name: "Model Welfare", 
    description: "AI consciousness and welfare assessments" 
  },
  { 
    id: "method", 
    name: "Methodology/Risk Consultation", 
    description: "Consultation re responsible scaling policy classification, eval approach/methodology, risk mitigation, etc." 
  },  
  { 
    id: "misc", 
    name: "Misc Evals", 
    description: "Catch-all for misc evals" 
  },
];

/**
 * Evaluator configuration
 * - color: Display color for highlighting
 * - type: "private" | "public" | "other"
 * 
 * Add new evaluators here as they appear in the ecosystem
 */
export const evaluators = {
  "Apollo Research": { color: "#17cfb9", type: "private" },
  "Deloitte": { color: "#86BC24", type: "private" },
  "Eleos": { color: "#2c44caff", type: "private" },
  "Faculty": { color: "#7b8a67", type: "private" },
  "FAR.AI": { color: "#dbe0ecff", type: "private" },
  "Gray Swan": { color: "#597faaff", type: "private" },
  "Haize Labs": { color: "#999999", type: "private" },
  "Irregular (fka Pattern)": { color: "#f7f8f5", type: "private" },
  "METR": { color: "#9cc78d", type: "private" },
  "Microsoft": { color: "#F34F1C", type: "private" },
  "SecureBio": { color: "#00d4ff", type: "private" },
  "Signature Science": { color: "#006224", type: "private" },
  "Virtue AI": { color: "#171fe2", type: "private" },

  "NNSA": { color: "#ee8b21", type: "public" },
  "UK AISI": { color: "#b20217", type: "public" },
  "US CAISI": { color: "#00971a", type: "public" },

  "Domain experts": { color: "#9729caff", type: "other" },
  "Individual red teamers": { color: "#a40707ff", type: "other" },
  "Uplift trial participants": { color: "#40d020ff", type: "other" },
  "Unidentified third party": {color: "#7d7878ff", type: "other" },
};

/**
 * Evaluator display order within each category
 * Evaluators will appear in this order in the Key Evaluators section
 */
export const evaluatorOrder = {
  private: ["Apollo Research", "Deloitte", "Eleos", "Faculty", "FAR.AI", "Gray Swan", "Haize Labs", "Irregular (fka Pattern)", "METR", "Microsoft", "SecureBio", "Signature Science", "Virtue AI"],
  public: ["NNSA", "UK AISI", "US CAISI"],
  other: ["Domain experts", "Individual red teamers", "Uplift trial participants", "Unidentified third party"],
};

/**
 * Site metadata
 */
export const siteConfig = {
  title: "3P Evals Monitor",
  subtitle: "Monitoring frontier AI labs’ engagement of third-parties for pre-deployment safety evaluations",
  lastUpdated: "12/30/2025",
  dataSource: "Data compiled from public sources.",
  notesFull: `
  <p>The chart below reflects all third-party safety evaluations performed for major AI models released since 2023.</p>
  <br>
  <p>Scope/definitions:</p>

  <ul>
    <li>
      <strong>By “major AI model,”</strong> I mean large language models released by American “frontier labs”:
      Anthropic, Google DeepMind, Meta, OpenAI, and xAI.
    </li>
    <ul>
      <li>
      This chart only includes <strong>language models</strong> (including multimodal), not image/video-only models like Nano Banana or Sora.
      </li>
    </ul>

    <li>
      <strong>By “third-party safety evals,”</strong> I mean evals focused on safety/security risks
      (e.g., autonomous capabilities, CBRN knowledge/uplift, cybersecurity, etc.) performed by someone not permanently employed by the model developer.
      <ul>
        <li>
          This chart does not include third-party evals measuring pure performance in everyday tasks like language, math, coding, etc. (e.g., Epoch evaluating Grok 4’s math capabilities).
        </li>
        <li>
          <strong>This chart does not include evals solely designed by a third party but executed by the lab.</strong> The third party must have performed or meaningfully facilitated the eval.
        </li>
        <li>
          Third parties whose role was merely to supply red teamers or uplift trial participants (i.e., as a sort of vender or staffing intermediary) are not reflected in the chart.
        </li>
      </ul>
    </li>
  </ul>
 <br>
  <p>Chart explanation:</p>
  <ul>
    <li>
      Across the top, each lab has a dropdown listing all models within scope (major large language models released since 2023) in <strong>descending release order</strong> (newest to oldest).
      <ul>
        <li>
          Models are also <strong>grouped by system card</strong> (or whatever equivalent model documentation a lab releases). E.g., Claude Opus 4 and Sonnet 4 were discussed in one system card, so they show up together in the dropdown. Same for Gemini 2.X models, o3/o4-mini, etc.
        </li>
        <li>
          Below the dropdown is a link to the relevant documentation for the selected model (system card, blog post, technical paper, etc.).
        </li>
      </ul>      
    </li>
    <li>
      On the left side are the different categories of evals.
      <ul>
        <li>
          Each cell lists the third parties that performed that type of eval for that model.
        </li>
        <li>
        Clicking on the party will send you to the source I used to determine this info (i.e., the system card, blog post, or paper discussing that model and evals performed on it).
        </li>
        <li>
          Dots next to the name of the third party denote a <strong>recurring engagement</strong> (i.e., that party has performed evals for that lab before, as of that model release).
        </li>
        <li>
          <strong>Empty cells</strong> mean that (at least based on publicly available sources) a third party did not perform that type of eval for that model. <strong>This does not mean that type of eval was not run at all for that model</strong>, just that, if it was performed, it was not by a third party (or, if a third party did perform it, that was not disclosed publicly).
        </li>
      </ul>      
    </li>
    <li>
      Above the chart is a list of all third-parties who have performed evals for the models analyzed in this study.
      <ul>
        <li>
          Evaluators are grouped by organization type: <strong>Private</strong> (non-/for-profit private orgs), <strong>Public</strong> (government orgs), and <strong>Other</strong> (individuals and unidentified parties).
        </li>
        <li>
          <strong>Unidentified third parties</strong> means the lab disclosed third-party involvement but did not specify the party.
        </li>
        <li>
          Clicking on a party will highlight their engagements among <strong>currently selected models</strong> in the chart.
        </li>
      </ul>      
    </li>
 </ul> 
 <br>
 <p><strong>Classification methodology:</strong> Evaluator classifications are based on careful review of publicly available sources. Lab disclosures vary in specificity, and some eval engagements span multiple risk domains or are described ambiguously. Where judgment calls were required, I prioritized the primary focus of the engagement as described in the source material. Readers may reasonably reach different conclusions on certain classifications.</p>
 <br>
 <p><strong>Motivations/Why I made this thing:</strong> I believe third-party evals, probably at least in party by private organizations, will be an essential component of any workable frontier AI governance regime. AI labs can’t be trusted to govern themselves (as is currently occurring) and government agencies are unlikely to have the technical capacity or resources to evaluate every frontier model across every risk area themselves, so private evaluators will likely need to play a significant role. As this third-party evaluation ecosystem is developing, I wanted to understand which labs are seeking external evaluation, what risk domains are being tested, and which organizations are emerging as evaluators. I hope this can serve as a resource for thinking about how to incorporate third-party oversight into frontier AI governance.</p>
`,


};
