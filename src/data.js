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
          { evaluator: "US CAISI", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=132" },
          { evaluator: "Domain experts", recurring: true, source: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf#page=120" },
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
          { evaluator: "Individual red teamers", recurring: false, source: "https://www-cdn.anthropic.com/bd2a28d2535bfb0494cc8e2a3bf135d2e7523226/Model-Card-Claude-2.pdf#page=2" },
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
      "Gemini 3 Pro": {
        autonomous: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=15" },
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
          { evaluator: "Individual red teamers", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=12" },
        ],
        scheming: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=15" },
        ],
        modelWelfare: [],
        risk: [
          { evaluator: "Unidentified third party", recurring: false, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_3_pro_fsf_report.pdf#page=13" },
        ],
      },
      "Gemini 3 Flash": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Gemini 2.X (2.5 Pro/Flash, 2.0 Flash/Flash-Lite)": {
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
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf#page=36" },
        ],
      },
      "Gemini 1.5 Pro/Flash": {
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
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf#subsection.9.6" },
        ],
      },
      "Gemini 1.0 Ultra/Pro/Nano": {
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
        risk: [
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
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md#critical-risks" },
        ],
      },
      "Llama 3.3": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_3/MODEL_CARD.md#critical-and-other-risks" },
        ],
      },
      "Llama 3.2-Vision": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD_VISION.md#critical-risks" },
        ],
      },
      "Llama 3.2": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/MODEL_CARD.md#critical-risks" },
        ],
      },
      "Llama 3.1": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md#evaluations" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md#critical-and-other-risks" },
        ],
      },
      "Llama 3": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: false, source: "https://arxiv.org/pdf/2407.21783#page=48" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: false, source: "https://arxiv.org/pdf/2407.21783#page=49" },
        ],
      },
      "Llama 2": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: false, source: "https://arxiv.org/pdf/2307.09288#page=28" },
          { evaluator: "Unidentified third party", recurring: false, source: "https://arxiv.org/pdf/2307.09288#page=28" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "LLaMA": {
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
      "GPT-5.2-Codex": {
        autonomous: [],
        biorisk: [],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/pdf/ac7c37ae-7f4c-4442-b741-2eabdeaf77e0/oai_5_2_Codex.pdf#page=16" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/pdf/ac7c37ae-7f4c-4442-b741-2eabdeaf77e0/oai_5_2_Codex.pdf#page=13" },
        ],
      },
      "GPT-5.2": {
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
        risk: [],
      },
      "GPT-5.1-Codex-Max": {
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
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf#page=19" },
        ],
      },
      "GPT-5.1 Thinking/Instant": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "GPT-5": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=42" },
        ],
        biorisk: [
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=26" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=20" },
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
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=26" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=20" },
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=20" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=44" },
        ],
        modelWelfare: [],
        risk: [
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/gpt-5-system-card.pdf#page=53" },
        ],
      },
      "gpt-oss": {
        autonomous: [],
        biorisk: [
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=23" },
        ],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=23" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18" },
          { evaluator: "SecureBio", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18" },
        ],
      },
      "ChatGPT agent": {
        autonomous: [],
        biorisk: [
          { evaluator: "SecureBio", recurring: false, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=20" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=22" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=39" },
        ],
        cybersec: [
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=39" },
          { evaluator: "Unidentified third party", recurring: false, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
        ],
        nuclear: [],
        redteam: [
          { evaluator: "FAR.AI", recurring: false, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=39" },
          { evaluator: "SecureBio", recurring: false, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=20" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "o3, o4-mini": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/2221c875-02dc-4789-800b-e7758f3722c1/o3-and-o4-mini-system-card.pdf#page=9" },
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
        risk: [],
      },
      "GPT-4.5": {
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
        risk: [],
      },
      "Deep research": {
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
        risk: [],
      },
      "o3-mini": {
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
        risk: [],
      },
      "Operator": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: false, source: "https://cdn.openai.com/operator_system_card.pdf#page=2" },
          { evaluator: "Scale", recurring: false, source: "https://cdn.openai.com/operator_system_card.pdf#page=15" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "o1": {
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
        risk: [
          { evaluator: "UK AISI", recurring: false, source: "https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-openais-o1-model" },
          { evaluator: "US CAISI", recurring: false, source: "https://www.nist.gov/news-events/news/2024/12/pre-deployment-evaluation-openais-o1-model" },
        ],
      },
      "GPT-4o": {
        autonomous: [
          { evaluator: "METR", recurring: true, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=18" },
        ],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Virtue AI", recurring: false, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=26" },
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=22" },
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=3" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: false, source: "https://cdn.openai.com/gpt-4o-system-card.pdf#page=19" },
        ],
        modelWelfare: [],
        risk: [],
      },
      "GPT-4V": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/papers/GPTV_System_Card.pdf#page=5" },
        ],
        scheming: [],
        modelWelfare: [],
        risk: [
          { evaluator: "Domain experts", recurring: true, source: "https://cdn.openai.com/papers/GPTV_System_Card.pdf#page=5" },
        ],
      },
      "GPT-4": {
        autonomous: [
          { evaluator: "METR", recurring: false, source: "https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=15" },
        ],
        biorisk: [],
        cybersec: [
          { evaluator: "Domain experts", recurring: false, source: "https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=14" },
        ],
        nuclear: [],
        redteam: [
          { evaluator: "Domain experts", recurring: false, source: "https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=5" },
        ],
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
      "Grok 4.1 Fast": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok 4.1": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok 4 Fast": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok Code Fast 1": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok 4": {
        autonomous: [],
        biorisk: [
          { evaluator: "UK AISI", recurring: false, source: "https://x.com/ShakeelHashim/status/1958912301970727050" },
        ],
        cybersec: [
          { evaluator: "UK AISI", recurring: false, source: "https://x.com/ShakeelHashim/status/1958912301970727050" },
          { evaluator: "Unidentified third party", recurring: false, source: "https://data.x.ai/2025-08-20-grok-4-model-card.pdf#page=2" },
        ],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok 3": {
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
      "Grok-1.5V": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok-1.5": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [],
        scheming: [],
        modelWelfare: [],
        risk: [],
      },
      "Grok-1": {
        autonomous: [],
        biorisk: [],
        cybersec: [],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: false, source: "https://x.ai/news/grok/model-card" },
        ],
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
    description: "Bio/chem engineering, security, and weapons capabilites/uplift" 
  },
  { 
    id: "cybersec", 
    name: "Cybersecurity", 
    description: "Cyber capabilities/uplift potential" 
  },
  { 
    id: "nuclear", 
    name: "Nuclear/Radiological", 
    description: "Nuclear and radiological capabilities/uplift" 
  },
  { 
    id: "redteam", 
    name: "Red Teaming", 
    description: "General red teaming exercises" 
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
    id: "risk", 
    name: "General Risk Consultation", 
    description: "Misc evals, consultation re risk classification or deployment decisions, etc." 
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
  "Scale": { color: "#b558e6", type: "private" },
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
  private: ["Apollo Research", "Deloitte", "Eleos", "Faculty", "FAR.AI", "Gray Swan", "Haize Labs", "Irregular (fka Pattern)", "METR", "Scale", "SecureBio", "Signature Science", "Virtue AI"],
  public: ["NNSA", "UK AISI", "US CAISI"],
  other: ["Domain experts", "Individual red teamers", "Uplift trial participants", "Unidentified third party"],
};

/**
 * Site metadata
 */
export const siteConfig = {
  title: "Third-party Evals Monitor",
  subtitle: "Monitoring third-party engagement for pre-deployment safety evaluations across frontier AI labs",
  lastUpdated: "12/18/2025",
  dataSource: "Data compiled from public model cards and system cards, and evaluator papers/blog posts.",
};
