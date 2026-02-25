export interface QuizQuestion {
  id: number;
  levelContext: number;
  question: string;
  answers: {
    text: string;
    type: "yes" | "maybe" | "skip";
    score: number;
  }[];
}

export interface LevelInfo {
  level: number;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  percentOfDevs: string;
  percentile: string;
  whatThisLooksLike: string[];
  whosHere: string;
  imageKey: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    levelContext: 0,
    question: "Be honest: when you sit down to code, is every single character in that file something you personally typed? No AI, no suggestions, no autocomplete?",
    answers: [
      { text: "Yes, and I write solid, production-ready code because of it", type: "yes", score: 0 },
      { text: "Mostly, but I'll tab over to ChatGPT when I'm truly stuck", type: "maybe", score: 1 },
      { text: "LOL. Next question.", type: "skip", score: 3 },
    ],
  },
  {
    id: 2,
    levelContext: 1,
    question: "Have you ever pasted code into ChatGPT or Claude and asked 'what does this do?' or 'can you fix this?'",
    answers: [
      { text: "Yes, it's my go-to debugging tool now", type: "yes", score: 1 },
      { text: "A few times, but I still prefer reading docs", type: "maybe", score: 0 },
      { text: "I've moved way beyond copy-paste workflows", type: "skip", score: 3 },
    ],
  },
  {
    id: 3,
    levelContext: 2,
    question: "Do you use GitHub Copilot, Cursor, or similar AI coding assistants in your daily workflow?",
    answers: [
      { text: "Yes, tab-complete is my best friend", type: "yes", score: 2 },
      { text: "I've tried them but keep turning them off", type: "maybe", score: 1 },
      { text: "I architect entire features with AI pair programming", type: "skip", score: 4 },
    ],
  },
  {
    id: 4,
    levelContext: 3,
    question: "When starting a new feature, do you write a detailed prompt/spec before touching code?",
    answers: [
      { text: "Always — prompt engineering is half the job now", type: "yes", score: 4 },
      { text: "Sometimes, depends on complexity", type: "maybe", score: 2 },
      { text: "I just start coding and use AI when needed", type: "skip", score: 1 },
    ],
  },
  {
    id: 5,
    levelContext: 4,
    question: "Do you review and refactor AI-generated code, or do you trust it after basic testing?",
    answers: [
      { text: "I review every line — AI makes subtle mistakes", type: "yes", score: 3 },
      { text: "Quick scan, then ship if tests pass", type: "maybe", score: 5 },
      { text: "My AI pipeline includes automated review", type: "skip", score: 7 },
    ],
  },
  {
    id: 6,
    levelContext: 5,
    question: "Have you built custom AI workflows — chaining prompts, using APIs, or creating agents for your dev process?",
    answers: [
      { text: "Yes, I have custom toolchains that multiply my output", type: "yes", score: 6 },
      { text: "I've experimented but nothing in production yet", type: "maybe", score: 4 },
      { text: "I mostly use off-the-shelf tools as-is", type: "skip", score: 2 },
    ],
  },
  {
    id: 7,
    levelContext: 6,
    question: "Can you ship a complete feature — front-end, back-end, tests — primarily through AI-assisted generation?",
    answers: [
      { text: "Absolutely, and faster than writing it manually", type: "yes", score: 7 },
      { text: "Parts of it, but I still hand-write critical sections", type: "maybe", score: 5 },
      { text: "AI handles boilerplate, I handle architecture", type: "skip", score: 4 },
    ],
  },
  {
    id: 8,
    levelContext: 7,
    question: "Do you use AI to generate tests, documentation, and deployment configs — not just application code?",
    answers: [
      { text: "Yes, AI handles most of my SDLC beyond just coding", type: "yes", score: 8 },
      { text: "For docs and tests sometimes, not deployment", type: "maybe", score: 6 },
      { text: "I mainly use AI for writing application code", type: "skip", score: 3 },
    ],
  },
  {
    id: 9,
    levelContext: 8,
    question: "Have you built or deployed autonomous AI agents that complete multi-step tasks without human intervention?",
    answers: [
      { text: "Yes, agents handle entire workflows for me", type: "yes", score: 9 },
      { text: "I've experimented with agents but keep humans in the loop", type: "maybe", score: 7 },
      { text: "Not yet, but I'm interested", type: "skip", score: 4 },
    ],
  },
  {
    id: 10,
    levelContext: 9,
    question: "Is your development process more about orchestrating AI systems than writing code yourself?",
    answers: [
      { text: "Yes — I'm more architect/orchestrator than coder now", type: "yes", score: 9 },
      { text: "Getting there, but I still write significant code", type: "maybe", score: 7 },
      { text: "I'm hands-on-keyboard most of the day", type: "skip", score: 3 },
    ],
  },
  {
    id: 11,
    levelContext: 10,
    question: "Could your team ship production software with zero human keystrokes — fully autonomous AI pipelines from spec to deploy?",
    answers: [
      { text: "We're already doing this for some projects", type: "yes", score: 10 },
      { text: "We're building toward this but not there yet", type: "maybe", score: 8 },
      { text: "That sounds like science fiction", type: "skip", score: 2 },
    ],
  },
];

export const levels: LevelInfo[] = [
  {
    level: 0,
    title: "Manual Coder",
    emoji: "✍️",
    tagline: "I write everything myself. AI is just Google.",
    description: "You are a craftsperson. Every line of code is yours: written, considered, and owned. You take pride in understanding exactly what's in your codebase, and you're skeptical of tools that feel like black boxes. The risk? The world is moving fast around you, and developers using AI effectively are starting to ship 2-3x faster. Being a great coder is no longer enough on its own.",
    percentOfDevs: "20%",
    percentile: "Top 100%",
    whatThisLooksLike: [
      "I write all my code by hand, every character is mine",
      "I might use AI like a search engine to look something up, but I don't let it write code",
      "I don't use Copilot, Cursor, or any AI coding tool in my daily workflow",
      "I'm skeptical AI can write code I'd actually trust in production",
    ],
    whosHere: "Still the majority of working developers globally, especially in enterprise and regulated industries. Shrinking fast.",
    imageKey: "level0",
  },
  {
    level: 1,
    title: "Copy-Paster",
    emoji: "📋",
    tagline: "ChatGPT is my Stack Overflow replacement.",
    description: "You've discovered that AI can explain code, debug errors, and answer questions faster than searching forums. You copy-paste between your editor and ChatGPT. It's helpful, but you're not yet integrating AI into your actual development flow.",
    percentOfDevs: "25%",
    percentile: "Top 80%",
    whatThisLooksLike: [
      "I paste error messages into ChatGPT to understand what went wrong",
      "I ask AI to explain code I don't understand",
      "My workflow is: write code → get stuck → ask AI → paste answer back",
      "I don't use any AI IDE extensions",
    ],
    whosHere: "Many developers who are AI-curious but haven't changed their tooling yet. Common entry point.",
    imageKey: "level0",
  },
  {
    level: 2,
    title: "Assisted Coder",
    emoji: "🤖",
    tagline: "Copilot is on, but I'm still driving.",
    description: "You've installed an AI coding assistant and accept its suggestions when they're good. You're starting to code faster, but you still write most of the logic yourself. AI is a convenience, not a strategy.",
    percentOfDevs: "20%",
    percentile: "Top 55%",
    whatThisLooksLike: [
      "GitHub Copilot or similar is active in my editor",
      "I accept maybe 30-50% of AI suggestions",
      "I still write all the important logic myself",
      "AI helps with boilerplate and repetitive patterns",
    ],
    whosHere: "Developers who've adopted tooling but haven't changed their mental model of development. Growing rapidly.",
    imageKey: "level3",
  },
  {
    level: 3,
    title: "Prompt-First Developer",
    emoji: "💬",
    tagline: "I describe what I want, then refine what AI generates.",
    description: "You've shifted from writing code to describing code. You start features with prompts, review what comes back, and iterate. Your prompt engineering skills are becoming as important as your coding skills.",
    percentOfDevs: "12%",
    percentile: "Top 35%",
    whatThisLooksLike: [
      "I write detailed prompts before writing code",
      "I use AI chat to plan architecture and approaches",
      "I spend more time reviewing AI output than writing from scratch",
      "Prompt quality directly impacts my productivity",
    ],
    whosHere: "Early adopters and tech-forward teams. Disproportionately startup developers and indie hackers.",
    imageKey: "level3",
  },
  {
    level: 4,
    title: "AI Pair Programmer",
    emoji: "👥",
    tagline: "AI and I are a team. I architect, it implements.",
    description: "You and AI work together fluidly. You handle the thinking — architecture, edge cases, user experience — and AI handles the typing. You're significantly faster than you were before, and the code quality is still high because you review everything.",
    percentOfDevs: "8%",
    percentile: "Top 23%",
    whatThisLooksLike: [
      "I use AI for first drafts of most code I write",
      "I have refined workflows for different types of tasks",
      "I review and refactor AI output as a core part of my process",
      "My productivity has noticeably increased since adopting AI tools",
    ],
    whosHere: "Power users of AI dev tools. Often senior developers who know what good code looks like and can guide AI effectively.",
    imageKey: "level5",
  },
  {
    level: 5,
    title: "AI-Native Developer",
    emoji: "⚡",
    tagline: "AI is integrated into every part of my workflow.",
    description: "AI isn't a tool you use — it's how you work. From planning to coding to testing to deployment, AI is woven through your entire process. You've built custom workflows and your output is 3-5x what it was before AI.",
    percentOfDevs: "5%",
    percentile: "Top 15%",
    whatThisLooksLike: [
      "Custom AI workflows for different development tasks",
      "AI generates tests, docs, and deployment configs",
      "I chain multiple AI tools together for complex tasks",
      "My development speed would dramatically drop without AI",
    ],
    whosHere: "Forward-thinking developers who've restructured their entire workflow around AI. Often building their own tooling.",
    imageKey: "level5",
  },
  {
    level: 6,
    title: "Full-Stack AI Builder",
    emoji: "🏗️",
    tagline: "I ship complete features through AI generation.",
    description: "You can go from idea to deployed feature primarily through AI-assisted generation. Front-end, back-end, database, tests — AI handles the implementation while you handle the vision and quality control.",
    percentOfDevs: "4%",
    percentile: "Top 10%",
    whatThisLooksLike: [
      "I can ship a complete feature mostly through AI generation",
      "AI handles both front-end and back-end code for me",
      "I focus on architecture decisions and edge cases",
      "My velocity has increased 5x or more",
    ],
    whosHere: "Elite AI-powered developers. Often solo founders shipping products that used to require teams.",
    imageKey: "level5",
  },
  {
    level: 7,
    title: "AI Workflow Architect",
    emoji: "🔧",
    tagline: "I build systems that build software.",
    description: "You're not just using AI — you're building AI-powered development systems. Custom agents, automated pipelines, intelligent toolchains. You think in terms of systems that produce software, not individual coding sessions.",
    percentOfDevs: "3%",
    percentile: "Top 6%",
    whatThisLooksLike: [
      "I've built custom AI agents for development tasks",
      "My CI/CD pipeline includes AI-powered steps",
      "I think in terms of AI systems, not individual prompts",
      "I can set up autonomous coding sessions that run without me",
    ],
    whosHere: "AI infrastructure builders, DevTools creators, and developers pushing the boundaries of what's possible.",
    imageKey: "level8",
  },
  {
    level: 8,
    title: "Autonomous Orchestrator",
    emoji: "🎯",
    tagline: "I define outcomes. AI figures out the implementation.",
    description: "You've moved from implementation to orchestration. You define what needs to be built at a high level, and AI systems figure out how to build it. You spend your time on strategy, user experience, and quality — not code.",
    percentOfDevs: "2%",
    percentile: "Top 3%",
    whatThisLooksLike: [
      "AI agents complete multi-step tasks autonomously",
      "I review pull requests generated entirely by AI",
      "My role is more product/architecture than coding",
      "I manage AI systems like I used to manage junior developers",
    ],
    whosHere: "Bleeding-edge developers and technical founders. Often building the tools that other levels are using.",
    imageKey: "level8",
  },
  {
    level: 9,
    title: "AI Systems Commander",
    emoji: "🚀",
    tagline: "I orchestrate fleets of AI agents that ship software.",
    description: "You command multiple AI systems that work together to produce software. Your day looks more like a CTO's than a coder's — reviewing outputs, setting priorities, and ensuring quality across autonomous pipelines.",
    percentOfDevs: "0.5%",
    percentile: "Top 1%",
    whatThisLooksLike: [
      "Multiple AI agents work in parallel on different parts of a project",
      "I rarely write code — I write specs and review outputs",
      "My AI systems handle everything from ideation support to deployment",
      "The bottleneck is my ability to define and prioritize, not implement",
    ],
    whosHere: "A tiny group of developers who've fully embraced autonomous development. Mostly in AI-native companies.",
    imageKey: "level10",
  },
  {
    level: 10,
    title: "Dark Factory",
    emoji: "🏭",
    tagline: "Software ships with zero human keystrokes.",
    description: "The ultimate level: fully autonomous software production. From specification to deployment, no human touches a keyboard. Like a 'lights-out' factory, the code factory runs itself. You define the what and the why. Everything else is automated.",
    percentOfDevs: "<0.1%",
    percentile: "Top 0.1%",
    whatThisLooksLike: [
      "Fully autonomous pipelines from spec to deploy",
      "No human writes or reviews individual lines of code",
      "AI systems self-test, self-correct, and self-deploy",
      "The entire SDLC is automated end-to-end",
    ],
    whosHere: "Almost nobody — yet. This is the theoretical end state that the industry is moving toward. Some teams are achieving this for narrow use cases.",
    imageKey: "level10",
  },
];

export function calculateLevel(answers: number[]): number {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxPossible = 10 * answers.length; // rough max
  const normalized = totalScore / maxPossible;
  
  if (normalized <= 0.05) return 0;
  if (normalized <= 0.1) return 1;
  if (normalized <= 0.18) return 2;
  if (normalized <= 0.25) return 3;
  if (normalized <= 0.35) return 4;
  if (normalized <= 0.45) return 5;
  if (normalized <= 0.55) return 6;
  if (normalized <= 0.65) return 7;
  if (normalized <= 0.78) return 8;
  if (normalized <= 0.9) return 9;
  return 10;
}
