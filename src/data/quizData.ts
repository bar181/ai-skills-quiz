export interface QuizQuestion {
  id: number;
  level: number;
  title: string;
  question: string;
  answers: {
    text: string;
    type: "red" | "yellow" | "green";
  }[];
}

export interface LevelInfo {
  level: number;
  title: string;
  emoji: string;
  percent: string;
  description: string;
  imageKey: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    level: 0,
    title: "The Skeptic",
    question: "Hand on heart: have you ever opened ChatGPT, Claude, or any AI tool with genuine intent to use it for actual work — not just a quick curiosity click?",
    answers: [
      { text: "No. I'm good at my job without it.", type: "red" },
      { text: "Once or twice — mostly to see what the fuss was about", type: "yellow" },
      { text: "LOL. Next question.", type: "green" },
    ],
  },
  {
    id: 2,
    level: 1,
    title: "The Tourist",
    question: "You've tried AI at least once. But did anything actually change about how you work the next day?",
    answers: [
      { text: "Honestly? No. I went right back to normal.", type: "red" },
      { text: "Not really — but I'm starting to pay more attention", type: "yellow" },
      { text: "My workflow looks nothing like it did before I started using AI.", type: "green" },
    ],
  },
  {
    id: 3,
    level: 2,
    title: "The Copy/Paste Professional",
    question: "When you need a first draft — email, summary, report intro — do you open AI and use what comes back?",
    answers: [
      { text: "No — I write it myself, always have", type: "red" },
      { text: "Yes — I ask, clean it up, and send it", type: "yellow" },
      { text: "First drafts are the least interesting thing AI does for me now.", type: "green" },
    ],
  },
  {
    id: 4,
    level: 3,
    title: "The Prompt Tinkerer",
    question: "Do you have a saved stash of prompts that actually work — in Notes, Notion, a doc somewhere — that you go back to?",
    answers: [
      { text: "No — I just type whatever and hope for the best", type: "red" },
      { text: "Yes — I've figured out that context and specificity actually matter", type: "yellow" },
      { text: "A prompts doc is entry-level. I have a full prompt asset library with placeholders.", type: "green" },
    ],
  },
  {
    id: 5,
    level: 4,
    title: "The Conversationalist",
    question: "Before you ask AI to build something for you, do you ask it to confirm what it thinks you're asking — before it starts?",
    answers: [
      { text: "No — I just give it the task and see what comes back", type: "red" },
      { text: 'Yes — "Before you start, tell me what you think I\'m asking for" is part of my workflow', type: "yellow" },
      { text: "Context confirmation is basic. I have AI running multi-step workflows from a single brief.", type: "green" },
    ],
  },
  {
    id: 6,
    level: 5,
    title: "The Multi-Tool Professional",
    question: "Do you use different AI tools for different jobs — and could you pick up a brand new one right now without reading a single tutorial?",
    answers: [
      { text: "Not yet — I mostly stick to one tool for everything", type: "red" },
      { text: "Yes — I know which tool to reach for and I learn new ones by asking AI to explain them", type: "yellow" },
      { text: "Tool fluency is table stakes. I'm building workflows that connect them.", type: "green" },
    ],
  },
  {
    id: 7,
    level: 6,
    title: "The Workflow Designer",
    question: "Have you actually mapped your weekly tasks and built AI into the repeatable ones — not occasionally, but as a designed system?",
    answers: [
      { text: "Not yet — I use AI when I think of it, not as a system", type: "red" },
      { text: "Yes — I've decomposed my job into tasks and most of them have an AI layer now", type: "yellow" },
      { text: "Personal workflows are done. I'm deploying them across entire teams.", type: "green" },
    ],
  },
  {
    id: 8,
    level: 7,
    title: "The Vendor Threat",
    question: "If a vendor pitched you a $50,000 AI solution today, could you open Claude and have a working prototype built before they finished the deck?",
    answers: [
      { text: "Not yet — I'm a power user, not a builder", type: "red" },
      { text: "Yes — I can prototype fast enough to kill most vendor pitches before they land", type: "yellow" },
      { text: "I don't just kill pitches. I've built the internal tools that replaced them.", type: "green" },
    ],
  },
  {
    id: 9,
    level: 8,
    title: "The Persona Architect",
    question: "Do your AI outputs actually sound like you — tailored to the specific audience, not generic AI copy that anyone could have generated?",
    answers: [
      { text: "Not really — outputs are useful but they have that AI feel", type: "red" },
      { text: "Yes — I define the audience persona deeply and the outputs are indistinguishable from expert human work", type: "yellow" },
      { text: "One source. Six formats. Every audience gets exactly what they need.", type: "green" },
    ],
  },
  {
    id: 10,
    level: 9,
    title: "The Technical Non-Coder",
    question: "Does your whole team use AI to write, run, and automate with code — dashboards, scripts, integrations — and not one of them has a CS degree?",
    answers: [
      { text: "Not yet — code still means filing a ticket and waiting for a developer", type: "red" },
      { text: "Yes — my team automates their own processes in code without a developer in the loop", type: "yellow" },
      { text: "Code is just another output format. My team ships tools your dev team would put in a sprint.", type: "green" },
    ],
  },
  {
    id: 11,
    level: 10,
    title: "The Org Redesigner",
    question: "Have you deployed AI workflows that entire teams now run on — not your personal productivity, but restructured how others work and what headcount means?",
    answers: [
      { text: "Not yet — my AI impact stops at my own output", type: "red" },
      { text: "Yes — I've redesigned team processes around AI-augmented outputs, not headcount", type: "yellow" },
      { text: "I don't design workflows. I design the operating system the workflows run on.", type: "green" },
    ],
  },
  {
    id: 12,
    level: 11,
    title: "The AI-Native Operator",
    question: "Does your organisation produce output that peers genuinely can't explain without seeing the workflows — and does your team stay small on purpose?",
    answers: [
      { text: "Not yet — humans are still meaningfully in every loop", type: "red" },
      { text: "Yes. Tiny team. Outsized output. AI handles tasks. Humans handle responsibility.", type: "yellow" },
      { text: "10 people. Unicorn output. AI isn't a tool — it's the org chart.", type: "green" },
    ],
  },
];

export const levels: LevelInfo[] = [
  {
    level: 0,
    title: "The Skeptic",
    emoji: "🤨",
    percent: "~4%",
    description: "You're not wrong that experience matters — but the professionals around you are compounding their output while you're holding the line. The good news: you only need one genuinely useful experience to move. One meeting summary. One email draft. That's the whole ask.",
    imageKey: "level0",
  },
  {
    level: 1,
    title: "The Tourist",
    emoji: "🧳",
    percent: "~14%",
    description: "You tried it, it underwhelmed, and you moved on. That's fair — a bad first prompt produces a bad first result. The professionals who stuck with it figured out that AI rewards context. One more attempt, with more specificity, looks very different.",
    imageKey: "level0",
  },
  {
    level: 2,
    title: "The Copy/Paste Professional",
    emoji: "📋",
    percent: "~30%",
    description: "You're saving real time and that's genuinely useful. But your role, your thinking, and your workflow haven't changed — AI is just faster typing. A lawyer here is drafting clauses faster. A marketer is producing more first drafts. The output volume is up; the leverage isn't yet.",
    imageKey: "level3",
  },
  {
    level: 3,
    title: "The Prompt Tinkerer",
    emoji: "🔧",
    percent: "~24%",
    description: "You've figured out that how you ask matters. A recruiter here has AI pre-screening candidates. A finance analyst is generating faster reports. But you're still treating most sessions as one-shot interactions — and leaving most of the value on the table. The shift from prompting to conversation is the next unlock.",
    imageKey: "level3",
  },
  {
    level: 4,
    title: "The Conversationalist",
    emoji: "💬",
    percent: "~14%",
    description: "This is the first level where AI genuinely feels different. You treat it like a smart intern: capable, but needing direction. A finance analyst here builds models iteratively. An HR manager drafts sensitive communications through careful context-setting, not one-shot generation. You've stopped fighting the tool and started managing it.",
    imageKey: "level3",
  },
  {
    level: 5,
    title: "The Multi-Tool Professional",
    emoji: "🛠️",
    percent: "~8%",
    description: "You know which tool to reach for and you're never surprised by a new one. A sales director here summarises all inbound before reading it. A consultant uses NotebookLM to turn client documents into briefings, podcasts, and decks before a meeting. The L4→L5 jump is where most people plateau — you cleared it.",
    imageKey: "level5",
  },
  {
    level: 6,
    title: "The Workflow Designer",
    emoji: "⚙️",
    percent: "~4%",
    description: "You've done what most people skip: you mapped your job, identified the repeatable tasks, and built AI into them systematically. An operations manager here has automated weekly reporting. A recruiter has AI screen, summarise, and rank candidates before a human sees a single CV. You're saving hours, not minutes — and it compounds.",
    imageKey: "level5",
  },
  {
    level: 7,
    title: "The Vendor Threat",
    emoji: "⚡",
    percent: "~1%",
    description: "When a vendor pitches their $50,000 AI solution, you can reverse-engineer the spec in real time and have a working prototype before they leave the room — no coding required. You've stopped buying AI wrappers and started building your own. Your colleagues still file requests. You ship prototypes in the meeting.",
    imageKey: "level8",
  },
  {
    level: 8,
    title: "The Persona Architect",
    emoji: "🎭",
    percent: "~0.5%",
    description: "Your AI outputs don't sound like AI. You define audiences with depth — demographics, pain points, decision-making role, triggers — not just job titles. A comms director here produces one piece of content in six formats: board deck, team update, client email, social post, podcast brief, and executive summary — all from the same source. Every audience gets exactly what they need.",
    imageKey: "level8",
  },
  {
    level: 9,
    title: "The Technical Non-Coder",
    emoji: "💻",
    percent: "~0.15%",
    description: "Nobody on your team has a CS degree and nobody needs one. A marketing manager here builds her own dashboards. An ops lead automates his own integrations. A finance analyst ships internal tools that would have taken a dev sprint six months ago. Code is just another output format — and your team figured that out before your competitors did.",
    imageKey: "level10",
  },
  {
    level: 10,
    title: "The Org Redesigner",
    emoji: "🏛️",
    percent: "~0.05%",
    description: "You're not just productive — you're redesigning what work looks like. A COO here has restructured reporting lines around AI-augmented outputs. A marketing director runs a two-person team producing what used to require eight. You think in workforce-level ROI, not personal efficiency. Headcount decisions start with: \"What can't AI do here?\"",
    imageKey: "level10",
  },
  {
    level: 11,
    title: "The AI-Native Operator",
    emoji: "🚀",
    percent: "<0.01%",
    description: "10 people. Unicorn output. Every core workflow — support, content, reporting, legal review, financial modelling, sales prep, onboarding — runs with minimal human initiation. Your competitive advantage isn't a product or a process. It's the operating system you built. Peers can't explain your output-to-headcount ratio without seeing the workflows. And once they see them, they can't unsee them.",
    imageKey: "level10",
  },
];

// Level = last 🟡 before first 🔴
// answers: "red" | "yellow" | "green"
// We go through in order. The user's level is the level of the last question where they did NOT pick red.
// If they pick red on Q0 → level 0 (skeptic result)
// If they pick yellow/green through Q5, then red on Q6 → level 5
export function calculateLevel(answerTypes: ("red" | "yellow" | "green")[]): number {
  // Find the first "red" answer - that's where they stop
  const firstRedIndex = answerTypes.findIndex((a) => a === "red");
  
  if (firstRedIndex === -1) {
    // Never picked red - they passed everything, level 11
    return 11;
  }
  
  if (firstRedIndex === 0) {
    // Red on the very first question
    return 0;
  }
  
  // Level = the level of the question where they first picked red
  return firstRedIndex;
}
