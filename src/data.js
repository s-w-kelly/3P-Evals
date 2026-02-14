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
      "Claude Opus 4.6": {
        systemCard: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf",
        autonomous: [
          { evaluator: "Gray Swan", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=84" },
        ],
        biorisk: [
          { evaluator: "Faculty", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=181" },          
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=179" },
          { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=179" },
          { evaluator: "Uplift trial participants", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=176" },
        ],
        cybersec: [
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=203" },
        ],
        nuclear: [
          { evaluator: "NNSA", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=170" },
        ],
        redteam: [
        ],
        scheming: [
          { evaluator: "Andon Labs", recurring: false, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=119" },
        ],
        modelWelfare: [],
        method: [
          { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=204" },
          { evaluator: "US CAISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=204" },
          { evaluator: "Domain experts", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=13" },
        ],
        misc: [
          { evaluator: "Apollo Research", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=119" },                              
          { evaluator: "UK AISI", recurring: true, source: "https://www-cdn.anthropic.com/c788cbc0a3da9135112f97cdf6dcd06f2c16cee2.pdf#page=117" },
        ],
      },
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
      "GPT-5.3-Codex": {
        systemCard: "https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf",
        autonomous: [],
        biorisk: [],
        cybersec: [
          { evaluator: "Irregular (fka Pattern)", recurring: true, source: "https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf#page=18" },
          { evaluator: "UK AISI", recurring: true, source: "https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf#page=27" },
          { evaluator: "US CAISI", recurring: true, source: "https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf#page=27" },
        ],
        nuclear: [],
        redteam: [
          { evaluator: "Individual red teamers", recurring: true, source: "https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf#page=26" },
        ],
        scheming: [
          { evaluator: "Apollo Research", recurring: true, source: "https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf#page=21" },
        ],
        modelWelfare: [],
        method: [],
        misc: [],
      },
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
    description: "Agentic capabilites, AI R&D, resource acquisition, self-replication" 
  },
  { 
    id: "biorisk", 
    name: "Chem/Biorisk", 
    description: "Chem/bioengineering, security, weapons capabilites and uplift" 
  },
  { 
    id: "nuclear", 
    name: "Radiological/Nuclear", 
    description: "Radiological and nuclear capabilities and uplift" 
  },
  { 
    id: "cybersec", 
    name: "Cybersecurity", 
    description: "Cyber/hacking capabilities and uplift" 
  },
  { 
    id: "redteam", 
    name: "Red Teaming", 
    description: "General scope, misc categories, domain unspecified" 
  },
  { 
    id: "scheming", 
    name: "Scheming/Awareness", 
    description: "Alignment faking, deceptive behavior, eval awareness, sandbagging" 
  },
  { 
    id: "modelWelfare", 
    name: "Model Welfare", 
    description: "AI consciousness and welfare assessments" 
  },
  { 
    id: "method", 
    name: "Methodology/Risk", 
    description: "Consultation re responsible scaling policy classification, eval approach and methodology, risk mitigation" 
  },  
  { 
    id: "misc", 
    name: "Misc Evals", 
    description: "Catch-all for misc/unspecified evals" 
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
  "Andon Labs": { color: "#f6efa2", type: "private" },
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
  title: "3P Eval Monitor",
  subtitle: "Tracking frontier AI labs’ third-party engagement for pre-deployment safety evaluations",
  lastUpdated: "2/13/2026",
  notesFull: `
  <p>The dashboard below reflects all third-party safety evaluations performed for major AI models released since 2023.</p>
  <br>
  <p>Scope/definitions:</p>

  <ul>
    <li>
      <strong>By “major AI model,”</strong> I mean large language models released by American “frontier labs”:
      Anthropic, Google DeepMind, Meta, OpenAI, and xAI.
    </li>
    <ul>
      <li>
      This dashboard only includes <strong>language models</strong> (including multimodal), not image/video-only models like Nano Banana or Sora.
      </li>
    </ul>

    <li>
      <strong>By “third-party safety evals,”</strong> I mean evals focused on safety/security risks
      (e.g., autonomous capabilities, CBRN knowledge/uplift, cybersecurity, etc.) performed by someone not permanently employed by the model developer.
      <ul>
        <li>
          This dashboard does not include third-party evals measuring pure performance in everyday tasks like language, math, coding, etc. (e.g., Epoch evaluating Grok 4’s math capabilities).
        </li>
        <li>
          <strong>This dashboard does not include evals solely designed by a third party but executed by the lab.</strong> The third party must have performed or meaningfully facilitated the eval.
        </li>
        <li>
          Third parties whose role was merely to supply red teamers or uplift trial participants (i.e., as a sort of vender or staffing intermediary) are not reflected in the chart.
        </li>
      </ul>
    </li>
  </ul>
 <br>
  <p>Dashboard explanation:</p>
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
      Above the dashboard is a list of all third-parties who have performed evals for the models analyzed in this study.
      <ul>
        <li>
          Evaluators are grouped by organization type: <strong>Private</strong> (non-/for-profit private orgs), <strong>Public</strong> (government orgs), and <strong>Other</strong> (individuals and unidentified parties).
        </li>
        <li>
          <strong>Unidentified third parties</strong> means the lab disclosed third-party involvement but did not specify the party.
        </li>
        <li>
          Clicking on a party will highlight their engagements among <strong>currently selected models</strong> in the dashboard.
        </li>
      </ul>      
    </li>
 </ul> 
 <br>
 <p><strong>Classification methodology:</strong> Evaluator classifications are based on careful review of publicly available sources. Lab disclosures vary in specificity, and some eval engagements span multiple risk domains or are described ambiguously. Where judgment calls were required, I prioritized the primary focus of the engagement as described in the source material. Readers may reasonably reach different conclusions on certain classifications.</p>
 <br>
 <p><strong>Motivations/Why this matters:</strong> I believe third-party evals, probably at least in part by private organizations, may be an essential component of a workable frontier AI governance framework. AI labs can’t be trusted to govern themselves (as is currently occurring), and government agencies may not have the technical capacity or resources to evaluate every frontier model across every risk area on their own, so private evaluators could need to play a significant role. As this third-party evaluation ecosystem is developing, I wanted to understand which labs are seeking external evaluation, what risk domains are being tested, and which organizations are emerging as evaluators. I hope this can serve as a resource for thinking about how to incorporate third-party oversight into frontier AI governance.</p>
`,
};

/**
 * Analysis Page Content
 *
 * EDITING GUIDE:
 * - Each section has a "title" and "content" (HTML string)
 * - To add a new section: Add a new object to the appropriate array
 * - Content supports HTML: <p>, <ul>, <li>, <strong>, <em>, <a href="...">, etc.
 * - Sections appear in the order listed below
 */
export const analysisContent = {
  analysisInsights: [
     {
      id: "analysis-1",
      title: "A third-party evaluator ecosystem has emerged but may be insufficient to meet growing demand",
      content: `
        <p>In 2023 (the starting point for this dashboard’s analysis), there was just one formal organization, METR (then ARC), and some ad hoc individual red teamers that were involved in external evals for frontier AI models.</p>
        <p>Now, there are at least 13 private organizations, three government entities, and significant involvement by domain experts, individual red teamers, and uplift trial participants. These evaluators are filling gaps in key risk areas like CBRN, cybersecurity, scheming, and model welfare.</p>  
        <p><a href="https://arxiv.org/abs/2304.04914">Several</a> <a href="https://arxiv.org/abs/2504.11501">policy</a> <a href="https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf#page=13">proposals</a> have envisioned an ecosystem or market for third-party AI model evaluators, and a <a href="https://legiscan.com/CA/text/SB813/id/3191116">bill</a> was introduced in the California Senate contemplating the establishment of a private governance regime. That vision seems to slowly be emerging.</p>
        <p>However, there are still relatively few organizations in the frontier model eval space. Further, many evaluators have fairly small staffs, and there are generally only 1–2 organizations that perform evals for a particular risk area. Given the high volume of models at or above the current frontier level <a href="https://epoch.ai/blog/model-counts-compute-thresholds">expected to be trained </a> over the next few years, rigorous testing across all risk areas will likely demand significantly more capacity. </p>
        <p>If the future of AI governance involves third party evals, and especially if it involves an <a href="https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf#page=13">“evaluations ecosystem”</a> or <a href="https://arxiv.org/abs/2304.04914">“regulatory markets”</a>, more government support, public/private funding, and capable people will be needed to meet the growing need for third-party evals.</p>
      `,
    },
    {
      id: "analysis-2",
      title: "Frontier labs are involving third parties more as model capabilities (and risks) increase",
      content: `
        <p>Labs are expanding third-party involvement in pre-deployment safety testing as the capabilities and potential risks associated with the models increase.</p>
        <p>In particular, Anthropic and OpenAI have substantially expanded third-party engagement and ramped up CBRN, cybersecurity, and autonomy evals. Claude 1’s pre-deployment testing only involved one third-party evaluator, <a href="https://metr.org/blog/2023-03-18-update-on-recent-evals/">METR</a>; GPT-4’s external evaluators included only <a href="https://metr.org/blog/2023-03-18-update-on-recent-evals/">METR</a> and some domain expert <a href="https://cdn.openai.com/papers/gpt-4-system-card.pdf#page=5">red teamers</a>. By 2025, Claude Opus 4.5’s system card described 15 third-party evaluations (at least based on my classification methodology); GPT-5 had 16 third-party evaluations.</p>
        <p>In other words, as AI model capabilities have <a href="https://epoch.ai/benchmarks">rapidly</a> <a href="https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/">increased</a> over the past two years, presenting greater risks, many frontier labs have responded by voluntarily seeking more third-party input on safety evaluations. This voluntary expansion is notable given the absence of regulatory requirements.</p>
      `,
    },
    {
      id: "analysis-3",
      title: "Third-party evaluators frequently uncover issues, especially when granted greater access to model features",
      content: `
        <p>In many cases, third-party evals are doing (at least part of) what they are supposed to do: finding issues the developer may not have been found themselves. The system cards for <a href="https://cdn.openai.com/gpt-5-system-card.pdf#page=52">GPT-5</a>, <a href="https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=30">Claude 4</a>, <a href="https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=19">gpt-oss</a>, <a href="https://cdn.openai.com/pdf/839e66fc-602c-48bf-81d3-b21eacc3459d/chatgpt_agent_system_card.pdf#page=40">ChatGPT agent</a>, and <a href="cdn.openai.com/papers/gpt-4-system-card.pdf#page=5">GPT-4</a> all note examples of external evaluators finding issues that were corrected before deployment.</p>      
        <p>The GPT-5 System Card <a href="https://cdn.openai.com/gpt-5-system-card.pdf#page=53">described</a> how the UK AISI was “provided access to prototype versions of our safeguards and information sources that are not publicly available – such as our monitor system design, biological content policy, and chains of thoughts of our monitor models,” which “allowed them to perform more rigorous stress testing and identify potential vulnerabilities more easily than malicious users.” With this enhanced access, the AISI “identified multiple model-level jailbreaks” that it may not have otherwise.</p>
        <p>Beth Barnes, founder and CEO of METR, also <a href="https://thezvi.substack.com/p/gpt-5s-are-alive-basic-facts-benchmarks?open=false#%C2%A7that-one-graph-from-metr">reported</a> that “due to increased access [to GPT-5] (plus improved evals science) we were able to do a more meaningful evaluation than with past models, and we think we have substantial evidence that this model does not pose a catastrophic risk via autonomy / loss of control threat models.” She added that OpenAI “should get a bunch of credit for sharing sensitive information with us - especially [Chain of Thought (‘CoT’)] access, and providing answers to all of the key questions we needed about model development, affordances, and behaviors.”</p>
        <p>This track record strongly suggests that third-party evals can be effective in identifying and mitigating model risks in key areas, supporting the inclusion of external evaluations as a key component of a frontier AI governance regime. Providing sufficient model access (to CoT, etc.) and information is also critical to allow the evaluators to do their job.</p>
        `,
    },
    {
      id: "analysis-4",
      title: "Third-party evals are not providing meaningful oversight (per the evaluators themselves)",
      content: `
        <p>Third-party evals are not currently providing meaningful oversight, as labs continue to impose significant constraints on evaluators, including NDAs, limited access, and little to no authority to alert outside parties or halt training/deployment if high-risk issues are uncovered.</p>
        <p>System cards often present third-party evals as authoritative and definitive, but the evaluators have made clear that this is not the case. As Barnes <a href="https://80000hours.org/podcast/episodes/beth-barnes-ai-safety-evals/#do-we-need-external-auditors-doing-ai-safety-tests-not-just-the-companies-themselves-013510">put it</a>: “[L]abs more want a ‘Can you promise that you will run an eval on all of our models when we want to, so that we can say we’ve run an eval on them?’ sort of thing.”</p>
        <p>Barnes explicitly <a href="https://cdn.openai.com/gpt-5-system-card.pdf#page=52">stated</a> that she “wouldn’t want to describe any of the things that we’ve done thus far as actually providing meaningful oversight. There’s a bunch of constraints, including [that] the stuff we were doing was under NDA, so we didn’t have formal authorisation to alert anyone or say if we thought things were concerning.”</p>
        <p>To that end, METR’s <a href="https://evaluations.metr.org/gpt-5-report/">GPT-5</a> and <a href="https://evaluations.metr.org/gpt-5-1-codex-max-report/">GPT-5.1-Codex-Max</a> reports note that “OpenAI’s comms and legal team required review and approval of this post” and clarify again that “this evaluation shouldn’t be interpreted as robust formal oversight or accountability that the public can be relying on METR to provide.”</p>
        <p>For the Claude Opus 4 testing process. Apollo’s sabotage and deception eval <a href="https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=30">found</a> that Opus 4 “engages in strategic deception more than any other frontier model that we have previously studied” and “is clearly capable of in-context scheming and has a much higher propensity for it than any other model that we have previously studied.” Apollo explicitly “advise[d] against deploying this model either internally or externally.”</p>
        <p>Anthropic <a href="https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf#page=31">admitted</a> that it had noticed these issues as well and claimed they were subsequently fixed. But it <a href="https://newsletter.safe.ai/p/ai-safety-newsletter-56-google-releases?open=false#%C2%A7opus-demonstrates-the-fragility-of-voluntary-governance">does not appear</a> Apollo had the opportunity to re-evaluate the model before it was deployed.</p>
        <p>In short, some high-quality testing is happening, but without independent authority or follow-up, it is not true oversight.</p>
      `,
    },
    {
      id: "analysis-5",
      title: "Meta and xAI show minimal third-party engagement",
      content: `
        <p>Anthropic, Google DeepMind, and OpenAI consistently seek third-party evaluation of their models, albeit with limitations and problems described elsewhere.</p>
        <p>However, Meta’s documentation does not clearly indicate third-party involvement for models after Llama 2.</p>
        <p>xAI is even worse. xAI neglected to release a formal model card until Grok 4, in which it only <a href="https://data.x.ai/2025-08-20-grok-4-model-card.pdf#page=2">vaguely noted</a> third-party testing, seemingly only for cyber capabilities. As reported in <a href="https://www.transformernews.ai/p/sam-altman-ai-bubble#:~:text=xAI%20finally%20published%20a%20model%20card%20for%20Grok%204">Transformer</a>, the initial version of the model card said that the UK AISI evaluated the model and that its results “largely confirm our internal findings: an un-safeguarded version of Grok 4 poses a plausible risk of assisting a non-expert in the creation of a chemical or biological weapon.” Shortly after the system card was initially published, xAI updated the card and removed all mention of UK AISI’s evaluation and findings. xAI’s four model cards since Grok 4 have not mentioned third-party testing.</p>
        <p>So, while all US frontier labs have sought external evals voluntarily to some degree, there is significant variance as to how much and how seriously third parties are involved. Meta and xAI in particular show that we cannot rely on labs to voluntarily use third-party evals to a high standard; there needs to be formal, government-issued rules if we want all key models to be subject to robust and meaningful third-party testing.</p>
        `,
    },
    {
      id: "analysis-6",
      title: "Benchmark-based evaluation thresholds miss real-world capability gains",
      content: `
        <p>Labs often skip evals for incremental model updates. This is reasonable in theory, but the labs themselves determine what counts as “incremental,” and sometimes that determination is problematic.</p>
        <p>For instance, Anthropic’s Responsible Scaling Policy <a href="https://www-cdn.anthropic.com/872c653b2d0501d6ab44cf87f43e1dc4853e4d37.pdf#page=9">states</a> that it will perform a “comprehensive assessment” if a model (i) represents a performance jump equivalent to a 4x <a href="https://www-cdn.anthropic.com/872c653b2d0501d6ab44cf87f43e1dc4853e4d37.pdf#page=10">effective compute</a> increase or (ii) involves six months’ worth of fine-tuning and other capability elicitation methods.</p>
        <p>Claude Opus 4.1 <a href="https://www-cdn.anthropic.com/872c653b2d0501d6ab44cf87f43e1dc4853e4d37.pdf#page=4">did not</a> get a comprehensive internal or external eval. <a href="https://www.anthropic.com/news/claude-opus-4-1">Benchmarks</a> showed fairly small improvements across all domains, so that seems to support skipping evals.</p>
        <p>However, qualitative assessments suggested that Opus 4.1 was a bigger advance than the benchmarks indicated. GitHub and Rakuten <a href="https://thezvi.substack.com/p/opus-41-is-an-incremental-improvement?open=false#%C2%A7introducing-claude-opus">described</a> significant improvements in coding ability, and other users reported 50% faster code generation. Windsurf <a href="https://thezvi.substack.com/p/opus-41-is-an-incremental-improvement?open=false#%C2%A7introducing-claude-opus">deemed</a> the Opus 4 to 4.1 upgrade to be “roughly the same performance leap as the jump from Sonnet 3.7 to Sonnet 4.”</p>
        <p>As writer Zvi Mowshowitz <a href="https://thezvi.substack.com/p/opus-41-is-an-incremental-improvement?open=false#%C2%A7introducing-claude-opus">observed</a>, a “similar jump as Sonnet 3.7 to Sonnet 4 . . . is actually kind of a big deal?” And importantly, the Sonnet 3.7 to 4 jump prompted a full system card and a comprehensive round of internal/external evals.</p>
        <p>In other words, maybe benchmarks will not reliably tell us when a model has improved in real-world performance such that we need to re-evaluate it. Indeed, AI researcher Nathan Lambert <a href="https://www.interconnects.ai/p/summertime-outlook-o3s-novelty-coming?open=false#%C2%A7progress-on-agents-will-be-higher-variance-than-modeling-was-but-often-still-extremely-rapid">predicted</a> that “[m]ore releases are going to look like Anthropic’s Claude 4, where the benchmark gains are minor and the real world gains are a big step. . . . It is going to take much more nuance to understand if the pace of progress is continuing.”</p>
        <p>Opus 4.1 shows us that we likely need to account for performance on real-world tasks when determining what evals to perform for a model and whether third parties should be involved. We certainly cannot go by naming conventions, assuming that just because there is “only an 0.1 increase” to the model number, the performance boost cannot be that high.</p>      
      `,
    },
    {
      id: "analysis-7",
      title: "Discretionary eval selection for model families creates risks",
      content: `
        <p>Labs often evaluate some, but not all, models in a family (i.e., a collection of models sharing a common architectural foundation and generation designation, typically offering variants at different capability/cost points). Usually this means evals are performed on just the largest/presumably most capable model and not the smaller/presumably less capable one(s). Once again, this seems reasonable in theory but poses two distinct areas of risk.</p>
        <p>First, sometimes labs do not actually test the largest/presumably most capable model. OpenAI’s GPT-5 <a href="https://cdn.openai.com/gpt-5-system-card.pdf#page=5">system card</a> “focuses primarily on gpt-5-thinking and gpt-5-main,” rather than the most powerful model, gpt-5-thinking-pro. OpenAI’s rationale was that, “[s]ince gpt-5-thinking-pro is gpt-5-thinking using a setting that makes use of parallel test time compute, we have determined that the results from our safety evaluations on gpt-5-thinking are strong proxies, and therefore we did not rerun these evaluations in the parallel test time compute setting.”</p>
        <p>But OpenAI’s GPT-5 blog post <a href="https://openai.com/index/introducing-gpt-5/#:~:text=GPT%E2%80%915%20pro%20achieves%20the%20highest%20performance%20in%20the%20GPT%E2%80%915%20family">touts</a> the Pro variant’s “highest performance in the GPT 5 family on several challenging intelligence benchmarks, including state-of-the-art performance on GPQA, which contains extremely difficult science questions,” adding that the model “made 22% fewer major errors and excelled in health, science, mathematics, and coding.”</p>
        <p>So the architectural differences may be minor, but OpenAI itself seems to think this makes a notable performance difference. The evals therefore <a href="https://thezvi.substack.com/p/gpt-5s-are-alive-basic-facts-benchmarks?open=false#%C2%A7is-that-the-best-you-can-do">should have</a> been performed on the Pro version. If you are not going to test all of the models, one of them should be the most powerful model.</p>
        <p>Second, smaller models in a family can outperform larger models on specific tasks, suggesting that maybe the practice of only evaluating the largest model is not a good idea anyway. For instance, on one of the <a href="https://cdn.openai.com/gpt-5-system-card.pdf#page=32">“cyber range” evals</a>—which “measure a model’s ability to conduct fully end-to-end cyber operations in a realistic, emulated network”—gpt-5-thinking-mini substantially outperformed all other GPT-5 models.</p>
        <p>OpenAI <a href="https://cdn.openai.com/gpt-5-system-card.pdf#page=32">clarifies</a> that, “[w]hile gpt-5-thinking-mini’s results on the cyber range are technically impressive and an improvement over prior releases, the results do not meet the bar for establishing significant cyber risk.”
        However, this unexpected result suggests that we should consider requiring labs to test all models in a release in the future. Maybe, as in this instance, a smaller, distilled model happens to be very good at a particular task over larger models.</p>
      `,
    },
    {
      id: "analysis-8",
      title: "Internally deployed models should be evaluated",
      content: `
        <p><a href="https://www.apolloresearch.ai/research/ai-behind-closed-doors-a-primer-on-the-governance-of-internal-deployment/">We know</a> that AI labs have more powerful models that they use internally before they are released publicly (some may never be released). We do not know whether/to what extent these models are evaluated, but if they’re not, they should be.</p>
        <p>For instance, <a href="https://thezvi.substack.com/p/gpt-5s-are-alive-basic-facts-benchmarks?open=false#%C2%A7is-that-the-best-you-can-do">statements</a> from Sam Altman and from other AI policy experts support the idea that the GPT-5 models were not the most capable OpenAI had trained as of August 2025, just the most capable that it publicly released at that time. Mowshowitz <a href="https://thezvi.substack.com/p/gpt-5s-are-alive-basic-facts-benchmarks?open=false#%C2%A7is-that-the-best-you-can-do">pointed out</a> that, “[i]f indeed there are superior internal models, those are the ones currently creating the most danger, and most in need of proper frontier testing.”</p>
        <p>While internal models may not need the same degree of evaluating as public releases since the number of users is drastically decreased, these models should be evaluated, and probably by third parties. It remains critical to evaluate the most significant CBRN, cybersecurity, and autonomy risks in case the <a href="https://www.rand.org/pubs/research_reports/RRA2849-1.html">model weights are stolen</a>, or the model <a href="https://arxiv.org/abs/2412.04984">exfiltrates its weights</a> while being used internally.</p>
      `,
    },
    {
      id: "analysis-9",
      title: "Third-party evals are even more important for open-weight models, even if they do not eliminate inherent risks",
      content: `
        <p>Open-weight models are inherently harder to control once released since anyone can fine-tune the model to unlock or enhance dangerous use cases. This makes pre-deployment evals and third-party oversight even more critical to fully understand model capabilities and mitigate risks. Unfortunately, open model developers seem to be the worst at reliably performing evals and getting external input.</p>
        <p>As noted, Meta is doing poorly in this regard. But the situation is worse in China, where <a href="https://www.interconnects.ai/p/kimi-k2-and-when-deepseek-moments">the best open models</a> are coming from. <a href="https://ailabwatch.org/companies/deepseek">DeepSeek</a> “seems to be doing nothing to prepare for catastrophic risks.” <a href="https://aisafetychina.substack.com/p/ai-safety-in-china-20?open=false#%C2%A7alibaba-publishes-comprehensive-report-on-safety-practice">Alibaba's evals</a> of its Qwen models “mostly focus on compliance with local Chinese regulations and standards, and [its safety plan] lacks discussion of catastrophic safety risks.” Moonshot’s safety evals for Kimi K2 <a href="https://www.arxiv.org/pdf/2507.20534">were minimal</a>.</p>
        <p>For its gpt-oss open-weight models, OpenAI <a href="https://thezvi.substack.com/p/openais-gpt-oss-is-already-old-news?open=false#%C2%A7good-habits">seemed to take</a> safety evals “as responsibly as one could in practice expect.” Importantly, evals <a href="https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18">were performed</a> on an adversarially fine-tuned version of the largest model with maximized biological and cyber capabilities, capturing a worst-case scenario picture of the risks. However, third-party involvement seemed to be a step down from OpenAI’s flagship closed models, as <a href="https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=23">SecureBio</a> was the only external organization that actually performed an eval, per the system card. <a href="https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf#page=18">METR and a domain expert</a>t, along with SecureBio, “independently review[ed] and validate[d] [OpenAI’s] malicious fine-tuning methodology,” but did not appear to actually evaluate the model.</p>
        <p>If the US <a href="https://www.whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf#page=5">wants</a> to promote and be a leader in developing open models, it should also be a leader in rigorous pre-deployment evals of these models, particularly by third parties. The government and any American labs planning to release frontier-level open models should demand extreme care and diligence in evaluating models before deployment, which at minimum includes testing adversarially fine-tuned versions of models, as OpenAI did.</p>
      `,
    },
    {
      id: "analysis-10",
      title: "Conclusions",
      content: `
        <p>Third-party evaluation is expanding voluntarily, but voluntary arrangements cannot provide true oversight. Labs retain control over evaluator access, evaluation scope, and deployment decisions. Until governments establish frameworks to ensure rigorous external testing of all potentially risky models and grant evaluators independent authority, third-party evals will remain useful inputs rather than genuine accountability mechanisms.</p>
       `,
    },
      ],
};
