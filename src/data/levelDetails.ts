export interface LevelDetail {
  level: number;
  tldr: string;
  description: string;
  thePerson: string;
  theCompany: string;
  theUnlock: string;
  checklist: string[];
  whosHere: string;
}

export const levelDetails: LevelDetail[] = [
  {
    level: 0,
    tldr: "Not for me. I'll wait and see.",
    description:
      "You've heard the hype, tried nothing, and remain unconvinced. AI is a distraction for people who don't know how to do their job properly. You're good at what you do and have been for years — experience and expertise built over a career aren't something a chatbot can replicate. You're often the most vocal person in the room about AI being overhyped, and you'll be the most surprised person in the room in 24 months.",
    thePerson:
      "Typically a high performer with deep domain expertise and a strong professional identity. Pride in craft is real and earned — but it's also the thing making it hardest to start. Often senior, often influential. Skepticism isn't laziness; it's a belief system. The unlock isn't a feature demo — it's a single genuinely useful experience on something they already care about.",
    theCompany:
      "Traditional, established, often regulated. AI policy may be unclear or explicitly restrictive. Leadership hasn't made AI adoption a priority or has actively discouraged it. Culture rewards expertise and tenure over experimentation. The tools exist; the permission — explicit or implicit — doesn't yet.",
    theUnlock:
      "One genuinely useful experience on a task they already care about. Not a demo. Not a mandate. Something that saves them ten minutes on something annoying — and makes them wonder what else is possible.",
    checklist: [
      "Never opened ChatGPT, Claude, or any AI tool with genuine intent to use it for work",
      "Believes AI produces unreliable output, is a passing trend, or is someone else's problem",
      "Proud of doing things the right way — experience and expertise over shortcuts",
      "Often the most vocal person in the room about AI being overhyped",
      "Has colleagues using AI tools but hasn't felt the pressure to follow",
    ],
    whosHere: "~4% of professionals in 2026. Shrinking fast — but the holdouts are dug in.",
  },
  {
    level: 1,
    tldr: "Tried it once. Wasn't impressed.",
    description:
      "Placeholder: You gave AI a shot, got a mediocre result, and moved on. The first attempt rarely showcases what's possible — but you haven't had a reason to try again yet.",
    thePerson:
      "Placeholder: Curious but unconvinced. Tried a generic prompt, got a generic answer, and concluded it wasn't worth the effort. Needs a use case that hits close to home.",
    theCompany:
      "Placeholder: May have AI tools available but no structured onboarding or use-case guidance. Adoption is individual, not institutional.",
    theUnlock:
      "Placeholder: A second attempt with a specific, personal task — something that shows AI rewards context and effort, not just a question.",
    checklist: [
      "Opened an AI tool at least once with genuine curiosity",
      "Got an underwhelming result and didn't return",
      "Hasn't changed any part of their daily workflow",
      "Aware that colleagues are using AI more regularly",
      "Open to trying again if shown a compelling use case",
    ],
    whosHere: "~14% of professionals. The 'I tried it' crowd.",
  },
  {
    level: 2,
    tldr: "AI writes my first drafts.",
    description:
      "Placeholder: You're saving real time by letting AI handle first drafts — emails, summaries, reports. But the way you work hasn't fundamentally changed. AI is faster typing, not different thinking.",
    thePerson:
      "Placeholder: Pragmatic and busy. Found that AI can save 15 minutes on a task and uses it for that. Hasn't explored beyond the obvious use cases yet.",
    theCompany:
      "Placeholder: AI is tolerated or lightly encouraged. No formal strategy. Individual contributors are experimenting; leadership hasn't set direction.",
    theUnlock:
      "Placeholder: Discovering that how you prompt matters — that specificity and context transform output quality from 'meh' to 'actually useful.'",
    checklist: [
      "Uses AI for first drafts of emails, summaries, or reports",
      "Copies and pastes output with light editing",
      "Hasn't developed a consistent prompting approach",
      "Workflow is the same — just faster on certain tasks",
      "Hasn't explored tools beyond ChatGPT or one main tool",
    ],
    whosHere: "~30% of professionals. The fat middle of the bell curve.",
  },
  {
    level: 3,
    tldr: "I've learned that prompts matter.",
    description:
      "Placeholder: You've figured out that context and specificity change everything. You have saved prompts. You iterate. But most interactions are still one-shot — you haven't unlocked the conversation yet.",
    thePerson:
      "Placeholder: Detail-oriented and process-minded. Enjoys optimizing and has started treating prompts as a skill, not a search query.",
    theCompany:
      "Placeholder: Some teams are sharing prompts informally. No centralized prompt library or AI playbook. Knowledge is siloed.",
    theUnlock:
      "Placeholder: Moving from one-shot prompting to multi-turn conversation — treating AI like a collaborator, not a search engine.",
    checklist: [
      "Has saved prompts in Notes, Notion, or a shared doc",
      "Understands that context and specificity improve output",
      "Iterates on prompts to get better results",
      "Still treats most sessions as one-shot interactions",
      "Hasn't built AI into a repeatable workflow yet",
    ],
    whosHere: "~24% of professionals. The prompt-curious middle.",
  },
  {
    level: 4,
    tldr: "I manage AI like a smart intern.",
    description:
      "Placeholder: You treat AI as a capable but directionless collaborator. You confirm understanding before execution. You iterate in conversation, not in re-prompts. This is where AI starts to feel genuinely different.",
    thePerson:
      "Placeholder: A strong communicator who's realized that managing AI is a lot like managing people — clear briefs, context setting, and iterative feedback.",
    theCompany:
      "Placeholder: Pockets of sophisticated usage. Some teams have informal best practices. No org-wide AI strategy, but the early adopters are visible.",
    theUnlock:
      "Placeholder: Becoming tool-agnostic — learning to pick the right AI tool for the right job, and picking up new ones without tutorials.",
    checklist: [
      "Asks AI to confirm understanding before starting",
      "Uses multi-turn conversations, not single prompts",
      "Provides context about audience, format, and constraints",
      "Has noticed a meaningful productivity improvement",
      "Starting to explore multiple AI tools",
    ],
    whosHere: "~14% of professionals. The conversation-fluent.",
  },
  {
    level: 5,
    tldr: "Right tool, right job, no tutorial needed.",
    description:
      "Placeholder: You're fluent across tools — ChatGPT, Claude, NotebookLM, Perplexity, and whatever launched last week. You learn new tools by asking AI to explain them. Tool fluency is table stakes.",
    thePerson:
      "Placeholder: Confident experimenter. Comfortable being a beginner in a new tool because they know the learning curve is AI-assisted and therefore near-zero.",
    theCompany:
      "Placeholder: Multiple AI tools in use across teams. Some budget allocated. Power users are emerging as informal leaders and trainers.",
    theUnlock:
      "Placeholder: Moving from tool usage to workflow design — systematically mapping your job and building AI into the repeatable parts.",
    checklist: [
      "Uses 3+ AI tools for different purposes",
      "Can pick up a new AI tool without reading documentation",
      "Learns new tools by asking AI to explain them",
      "Has a clear sense of which tool is best for which task",
      "Starting to think about systematic workflow integration",
    ],
    whosHere: "~8% of professionals. The tool-fluent minority.",
  },
  {
    level: 6,
    tldr: "My job is mapped and AI is built in.",
    description:
      "Placeholder: You've done what most people skip — mapped your weekly tasks, identified the repeatable ones, and built AI into them systematically. You're saving hours, not minutes.",
    thePerson:
      "Placeholder: Systems thinker. Sees their job as a set of processes, not a set of tasks. Has the discipline to document and optimize, not just use.",
    theCompany:
      "Placeholder: AI is becoming part of operations, not just individual productivity. Some workflows are documented and shared. Early signs of institutional capability.",
    theUnlock:
      "Placeholder: Moving from personal workflows to prototyping — being able to build tools and solutions without waiting for a developer.",
    checklist: [
      "Has mapped weekly tasks and identified repeatable ones",
      "AI is built into workflows as a system, not ad hoc",
      "Saves hours per week, not just minutes",
      "Has documented workflows others could follow",
      "Starting to see opportunities to build, not just use",
    ],
    whosHere: "~4% of professionals. The workflow architects.",
  },
  {
    level: 7,
    tldr: "I build what vendors try to sell me.",
    description:
      "Placeholder: When a vendor pitches their $50K AI solution, you can reverse-engineer the spec in real time. You prototype faster than they present. You've stopped buying AI wrappers and started building your own.",
    thePerson:
      "Placeholder: Builder mindset. Sees a pitch deck and thinks 'I could build that this afternoon.' Comfortable with rapid prototyping and iteration.",
    theCompany:
      "Placeholder: Internal tools are being built by non-developers. The line between 'user' and 'builder' is blurring. Vendor relationships are shifting.",
    theUnlock:
      "Placeholder: Making AI outputs indistinguishable from expert human work — defining audiences with depth, not demographics.",
    checklist: [
      "Can prototype a working solution faster than a vendor can pitch one",
      "Has built internal tools that replaced vendor solutions",
      "Comfortable reverse-engineering product specs",
      "Thinks in terms of build vs buy with a bias toward build",
      "Colleagues come to you when they need something built",
    ],
    whosHere: "~1% of professionals. The vendor nightmares.",
  },
  {
    level: 8,
    tldr: "One source, six formats, every audience served.",
    description:
      "Placeholder: Your AI outputs don't sound like AI. You define audiences with depth — demographics, pain points, triggers — not just job titles. One piece of content becomes six formats for six audiences.",
    thePerson:
      "Placeholder: Communication strategist. Thinks in audiences, not outputs. Understands that the same information needs different packaging for different people.",
    theCompany:
      "Placeholder: Content operations are AI-augmented at scale. Small teams produce what used to require departments. Quality is high and consistent.",
    theUnlock:
      "Placeholder: Empowering your team to code, automate, and build — without a CS degree in sight.",
    checklist: [
      "AI outputs are indistinguishable from expert human work",
      "Defines audience personas with depth — pain points, triggers, context",
      "Produces multiple formats from a single source",
      "Has eliminated 'that AI feel' from all outputs",
      "Audiences receive exactly what they need, tailored precisely",
    ],
    whosHere: "~0.5% of professionals. The persona architects.",
  },
  {
    level: 9,
    tldr: "My team codes without a CS degree.",
    description:
      "Placeholder: Nobody on your team has a CS degree and nobody needs one. Marketing builds dashboards. Ops automates integrations. Finance ships internal tools. Code is just another output format.",
    thePerson:
      "Placeholder: Technical enabler. Has democratized code across their team. Sees coding as a literacy, not a specialization — and AI makes it accessible.",
    theCompany:
      "Placeholder: Non-technical teams are shipping technical solutions. Development backlogs are shrinking because users build their own tools. IT is shifting from builder to platform.",
    theUnlock:
      "Placeholder: Moving from personal and team productivity to organizational redesign — rethinking headcount, structure, and what work means.",
    checklist: [
      "Team members write and run code without developer support",
      "Internal tools are built by the people who use them",
      "Dashboards, scripts, and automations are self-served",
      "No CS degree on the team — and no need for one",
      "Code is treated as another output format, like a slide deck",
    ],
    whosHere: "~0.15% of professionals. The technical non-coders.",
  },
  {
    level: 10,
    tldr: "I redesign how organizations work.",
    description:
      "Placeholder: You're not just productive — you're redesigning what work looks like. Reporting lines, headcount decisions, and team structure all start with: 'What can't AI do here?'",
    thePerson:
      "Placeholder: Organizational thinker. Sees AI not as a tool for individuals but as a lever for restructuring how teams operate, what roles mean, and what headcount looks like.",
    theCompany:
      "Placeholder: AI is embedded in organizational design, not just operations. Headcount decisions are AI-informed. Small teams produce outsized output by design.",
    theUnlock:
      "Placeholder: Building the operating system — the infrastructure that makes AI-native operations possible at scale.",
    checklist: [
      "Has restructured team processes around AI-augmented outputs",
      "Headcount decisions start with 'What can't AI do?'",
      "Two-person teams produce what used to require eight",
      "Thinks in workforce-level ROI, not personal efficiency",
      "Has deployed AI workflows that entire teams run on",
    ],
    whosHere: "~0.05% of professionals. The org redesigners.",
  },
  {
    level: 11,
    tldr: "AI isn't a tool — it's the org chart.",
    description:
      "Placeholder: 10 people. Unicorn output. Every core workflow runs with minimal human initiation. Your competitive advantage isn't a product or a process — it's the operating system you built.",
    thePerson:
      "Placeholder: Visionary operator. Has built an organization where AI isn't augmenting work — it IS the work infrastructure. Humans handle responsibility; AI handles tasks.",
    theCompany:
      "Placeholder: AI-native from the ground up. The org chart is designed around AI capabilities. Peers can't explain the output-to-headcount ratio without seeing the workflows.",
    theUnlock:
      "Placeholder: You're already here. The unlock is showing others what's possible — and watching them try to catch up.",
    checklist: [
      "10-person team with unicorn-level output",
      "Every core workflow runs with minimal human initiation",
      "Competitive advantage is the operating system, not the product",
      "Peers can't explain output-to-headcount ratio",
      "AI isn't a tool — it's the organizational infrastructure",
    ],
    whosHere: "<0.01% of professionals. The AI-native operators.",
  },
];
