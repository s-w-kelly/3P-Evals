/**
 * AI Safety Testing Tracker - Data (entry point; re-exports everything in src/data/)
 * 
 * EDITING GUIDE:
 * - To add a new lab: Create labs/<key>.js exporting { name, color, models }, then import it
 *   below and add it to labsData
 * - To add a new model: Add a new key to the lab's models object
 *   - released: "YYYY-MM-DD" (used by the Data tab's trend charts; "" if unknown)
 *   - frontier: true if the model pushed the lab's capability frontier at release,
 *     false if not, null if not yet classified
 * - To add a test engagement: Add an entry to the appropriate category array
 * - The "recurring" flag indicates whether this evaluator had prior engagements with the lab
 *   as of this model's release (true = worked together before, false = first engagement)
 * 
 * Each evaluator entry:
 *   { evaluator: "Name", recurring: true/false, source: "URL to model card/report" }
 */

import { anthropic } from './labs/anthropic';
import { google } from './labs/google';
import { meta } from './labs/meta';
import { openai } from './labs/openai';
import { xai } from './labs/xai';

export const labsData = { anthropic, google, meta, openai, xai };

export { testCategories, evaluators, evaluatorOrder } from './taxonomy';
export { siteConfig } from './site';
export { analysisContent } from './analysis';
