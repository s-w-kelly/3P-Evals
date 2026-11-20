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
