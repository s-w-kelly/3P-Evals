/**
 * Site metadata
 */
export const siteConfig = {
  title: "3P Eval Monitor",
  subtitle: "Tracking frontier AI labs’ third-party engagement for pre-deployment safety evaluations",
  lastUpdated: "11/20/2026",
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
