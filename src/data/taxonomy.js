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
 * - color: Accent color on the dashboard (evaluator buttons and pill borders)
 * - type: "private" | "public" | "other"
 *
 * Add new evaluators here AND to evaluatorOrder below as they appear in the ecosystem.
 * Names must match the "evaluator" field used in labsData exactly.
 */
export const evaluators = {
  "10a Labs": { color: "#142cff", type: "private" },
  "ALICE": { color: "#2596be", type: "private" },
  "Andon Labs": { color: "#f6efa2", type: "private" },
  "Apollo Research": { color: "#2d7a6d", type: "private" },
  "Deloitte": { color: "#5a8520", type: "private" },
  "Dyno Therapeutics": { color: "#7691d2", type: "private" },
  "Eleos": { color: "#4a5cb8", type: "private" },
  "Epoch AI": { color: "#70efd1", type: "private" },
  "Faculty": { color: "#5a6b4d", type: "private" },
  "FAR.AI": { color: "#4a5560", type: "private" },
  "Frontier Design": { color: "#21c4c4", type: "private" },
  "Gray Swan": { color: "#4a6a8a", type: "private" },
  "Haize Labs": { color: "#555555", type: "private" },
  "Handshake": { color: "#d3fb52", type: "private" },
  "Irregular (fka Pattern)": { color: "#3a3a3a", type: "private" },
  "Meridian Labs": { color: "#0284c7", type: "private" },
  "METR": { color: "#4a7a45", type: "private" },
  "Microsoft": { color: "#b83a10", type: "private" },
  "pattrn.ai": { color: "#3978f2", type: "private" },
  "Redwood Research": { color: "#1a7d5c", type: "private" },
  "Scale": { color: "#000000", type: "private" },
  "SecureBio": { color: "#0078a0", type: "private" },
  "Sequitur Research": { color: "#8b7ff0", type: "private" },
  "Signature Science": { color: "#005520", type: "private" },
  "Trajectory Labs": { color: "#ee6018", type: "private" },
  "Vals AI": { color: "#284d32", type: "private" },
  "Virtue AI": { color: "#3b3b3b", type: "private" },

  "NNSA": { color: "#a86010", type: "public" },
  "UK AISI": { color: "#901028", type: "public" },
  "US CAISSI (fka CAISI/AISI)": { color: "#006820", type: "public" },

  "Domain experts": { color: "#6a2590", type: "other" },
  "Individual red teamers": { color: "#8a2525", type: "other" },
  "Uplift trial participants": { color: "#287818", type: "other" },
  "Unidentified third party": { color: "#505050", type: "other" },
};

/**
 * Evaluator display order within each category
 * Evaluators will appear in this order in the Key Evaluators section
 */
export const evaluatorOrder = {
  private: ["10a Labs", "ALICE", "Andon Labs", "Apollo Research", "Deloitte", "Dyno Therapeutics", "Eleos", "Epoch AI", "Faculty", "FAR.AI", "Frontier Design", "Gray Swan", "Haize Labs", "Handshake", "Irregular (fka Pattern)", "Meridian Labs", "METR", "Microsoft", "Redwood Research", "Scale", "SecureBio", "Sequitur Research", "Signature Science", "Trajectory Labs", "Vals AI", "Virtue AI"],
  public: ["NNSA", "UK AISI", "US CAISSI"],
  other: ["Domain experts", "Individual red teamers", "Uplift trial participants", "Unidentified third party"],
};
