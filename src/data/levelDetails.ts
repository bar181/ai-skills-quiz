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
    tldr: "I tried it. It was fine. Then I forgot about it.",
    description:
      "You've used the free version of ChatGPT once or twice — mostly curiosity, or a colleague showed you — then went back to working normally when the answer missed or the credits ran out. You tell people \"I've tried it\" without being able to say what changed. The tool didn't fail you — your first prompt was just too vague to produce anything worth keeping.",
    thePerson:
      "Curious but not yet committed. Probably aware they're behind the curve and mildly uncomfortable about it. Not resistant — just waiting for a reason that feels relevant to their actual job. One good experience, with the right context, tips this person to Level 2 immediately. The gap between Level 1 and Level 2 is the smallest in the framework — and the most important.",
    theCompany:
      "Probably running Microsoft 365 Copilot or Google Workspace AI features that nobody is using. May have sent a company-wide email about AI that generated zero follow-up. There's no internal champion, no training, and no shared examples of what good looks like. AI exists in the budget. It doesn't exist in the workflow.",
    theUnlock:
      "A specific, relevant task — not a general exploration. \"Summarise this meeting I just had\" or \"draft a reply to this difficult email\" lands differently than \"try ChatGPT.\" Specificity is the bridge from Tourist to user.",
    checklist: [
      "Has opened ChatGPT or similar at least once with intent to use it for work",
      "Used the free tier until hitting the daily limit, then stopped entirely",
      "No workflow integration — purely ad hoc, mostly for personal curiosity",
      "Gets frustrated when AI \"makes things up\" and uses it as evidence it doesn't work",
      "Tells colleagues \"I've tried it\" without being able to say what actually changed",
    ],
    whosHere: "~14% of professionals. One bad first impression is keeping them here.",
  },
  {
    level: 2,
    tldr: "AI writes my first drafts. I still do the thinking.",
    description:
      "You use AI to write things faster — emails, summaries, first drafts, report intros. You copy the output, clean it up, and send it. AI is basically autocomplete for everything you used to type from scratch. You're saving 15–30 minutes a day, you have a paid account, and you feel like you're using AI. Your role, your thinking, and your workflow haven't changed. You're faster at the same job.",
    thePerson:
      "A practical, results-oriented professional who adopted AI because it saved time on something annoying. Editing AI output feels natural — they're good at it. But they haven't yet experienced AI as a thinking partner, only as a writing tool. The shift to Level 3 happens when they realise the quality of what comes back is directly tied to how well they set up the request.",
    theCompany:
      "Has a paid ChatGPT or Claude account — possibly because someone in leadership mandated it. No shared prompts, no workflows, no standards. Individual adoption is scattered and invisible. Some people use it daily; others have forgotten they have access. Nobody is measuring the impact. The tool is in the stack; the practice isn't in the culture.",
    theUnlock:
      "Noticing that one well-set-up prompt produced something dramatically better than usual — and asking why. That moment of \"what did I do differently?\" is the door to Level 3.",
    checklist: [
      "Uses AI for drafting, summarising, and basic formatting tasks daily",
      "Always edits output before using it — doesn't fully trust it yet",
      "Saving roughly 15–30 minutes a day but role and workflow are unchanged",
      "Pastes output directly from a browser chat window to wherever it's going",
      "Has a paid account but hasn't explored beyond basic drafting",
    ],
    whosHere: "~30% of professionals — the fat middle of the bell curve right now.",
  },
  {
    level: 3,
    tldr: "I have a prompts doc. Context is everything.",
    description:
      "You've figured out that how you ask matters. You give context, specify the audience, and iterate — not because someone taught you a framework, but because you kept trying until things got better. You have a notes document somewhere full of prompts that worked. A lawyer at this level drafts contract clauses faster. A marketer produces campaign briefs in minutes. Both still copy/paste and rewrite heavily — but the raw material is noticeably better when the setup is right.",
    thePerson:
      "Naturally curious and slightly competitive — noticed colleagues getting better results and started experimenting to close the gap. Has an intuitive feel for what makes a prompt work but applies it inconsistently. Still treats most sessions as one-shot interactions rather than conversations. The next unlock is realising AI performs best when you manage it like a new hire: confirm understanding before execution, not after.",
    theCompany:
      "Starting to see pockets of AI-fluent individuals who share prompts informally — Slack messages, email threads, corridor conversations. A few people have become the go-to \"AI person\" in their team. Leadership is watching but hasn't invested in structured training. The competitive pressure to formalise is building.",
    theUnlock:
      "Asking AI to confirm what it thinks you're asking before it starts — and watching the output quality jump. That single habit is the difference between prompting and managing.",
    checklist: [
      "Has a saved list of prompts in Notes, Notion, or a Word doc that they return to",
      "Knows that adding context improves results and applies it deliberately",
      "Uses role or audience framing in prompts to sharpen outputs",
      "Still treats most sessions as one-shot interactions rather than conversations",
      "Starting to understand that vague inputs produce garbage outputs",
    ],
    whosHere: "~24% of professionals. Aware that skill matters — not yet systematic about it.",
  },
  {
    level: 4,
    tldr: "I talk to AI like a smart intern, not a vending machine.",
    description:
      "You've stopped trying to write the perfect prompt and started having a real dialogue. You know that \"write my entire business plan\" in one shot produces garbage — unless you've confirmed context, defined the audience, and built iteratively. You always ask AI to confirm what it thinks you're asking before it starts. A finance analyst at this level builds financial models iteratively. An HR manager drafts sensitive communications through careful context-setting, not one-shot generation. This is the first level where AI genuinely feels different.",
    thePerson:
      "Has made the mental shift from \"tool user\" to \"AI manager.\" Treats AI like a smart intern on day one: capable, but needing direction, confirmation, and oversight. Understands that the quality of the output is a direct reflection of the quality of the brief. Has a paid account, uses it daily, has turned off training data sharing in settings, and knows never to paste client data or PII into consumer AI tools.",
    theCompany:
      "Has at least one internal AI champion running informal lunch-and-learns or sharing examples. Some teams are visibly more productive than others and people are starting to notice. Leadership is asking \"what are we actually doing with AI?\" but hasn't yet built a structured answer. The gap between the AI-fluent and AI-passive employees is becoming measurable — and awkward.",
    theUnlock:
      "Building a personal prompt asset library — moving from saving individual prompts to creating reusable templates with placeholders. The shift from \"prompts that worked\" to \"systems that always work\" is the bridge to Level 5.",
    checklist: [
      "Always confirms AI understands before asking it to execute: \"Before you start, tell me what you think I'm asking for\"",
      "Iterates through conversation rather than re-prompting from scratch when results miss",
      "Has a paid account, uses it daily, has turned off training data sharing in settings",
      "Never pastes client data, PII, or confidential information into consumer AI tools",
      "Treats AI like a smart intern: capable, but requiring direction and oversight",
    ],
    whosHere: "~14% of professionals. The first level where AI genuinely feels different.",
  },
  {
    level: 5,
    tldr: "Right AI, right job. I never read anything without summarising it first.",
    description:
      "You use 5+ AI tools and know which one to reach for. You understand the practical difference between Claude, ChatGPT, and Gemini. You use AI for image generation, research, summarisation, and communication — and you can pick up any new tool without a tutorial by screenshotting the interface and asking AI how it works. A sales director at this level summarises all inbound before reading it. A consultant uses NotebookLM to turn client documents into briefings, podcasts, and decks before a meeting. The L4→L5 jump is where most professionals plateau.",
    thePerson:
      "Where L4 professionals use AI as an assistant, L5 professionals use it as infrastructure — something woven into how work moves, not something they consciously invoke. The defining shift isn't the number of tools; it's the way they think about information. Nothing arrives unfiltered. Every document, briefing, or brief is processed before it's read. Every output is considered in terms of format — who gets what version, in what medium, at what length. They don't ask \"can AI help with this?\" anymore. They ask \"what's the fastest path from raw material to finished output?\" — and AI is always in the answer.",
    theCompany:
      "Walk into this team's workspace and something looks slightly off — in a good way. There's a slide deck that was produced in 20 minutes that shouldn't exist yet. A competitive briefing that arrived before the meeting started. A client summary that came from a 90-page report nobody read in full. The tools aren't visible but the outputs are. Individual AI fluency is creating team-level output advantages that colleagues are starting to notice and ask about. Leadership can see the productivity delta but can't yet systematise it — that comes at Level 6.",
    theUnlock:
      "Mapping your own job explicitly — writing down every recurring task and asking which ones AI could own, assist, or inform. That act of decomposition is the foundation of Level 6 and can't be skipped.",
    checklist: [
      "Uses 5+ AI tools regularly and knows which one to reach for by task",
      "Never reads a full document without asking AI to summarise and flag what needs attention",
      "Learns any new AI tool by screenshotting the interface and asking AI to explain it",
      "Uses AI as a personal tutor for any new skill, tool, or domain they need fast",
      "Thinks in formats — same content delivered differently to different audiences",
    ],
    whosHere: "~8% of professionals. The L4→L5 jump is where most people plateau.",
  },
  {
    level: 6,
    tldr: "I've decomposed my job into tasks. Most of them have an AI layer now.",
    description:
      "You've mapped your week into tasks and identified that almost nothing you do on a computer is beyond AI's reach. You've built personal prompt templates, embedded AI into repeatable processes, and you're saving hours — not minutes. Every task is a micro-ROI opportunity and you've built systems that compound. An operations manager at this level has automated weekly reporting. A recruiter has AI screen, summarise, and rank candidates before a human sees a single CV.",
    thePerson:
      "Systems thinker with a strong sense of where their time goes. Has done the unglamorous work of mapping their own job before automating it. Built a prompt asset library with placeholders: [AUDIENCE], [TONE], [CONTEXT], [TASK]. Uses rubric-based evaluation to stress-test outputs — not just \"does this look good?\" but scored criteria with demanded improvements. The gap to Level 7 is shifting from personal workflows to mastering how outputs land with different audiences.",
    theCompany:
      "Has a designated AI workflow owner in at least one department — not a coder, but someone who specs, prototypes, and iterates processes. AI is showing up in team retrospectives, not just individual productivity. ROI conversations are starting. Some workflows have been formally documented and shared. Leadership is beginning to ask whether certain roles need to be redesigned rather than just augmented.",
    theUnlock:
      "Realising that efficiency without communication mastery has a ceiling — you can produce more, but if it doesn't land with the right audience in the right format, the output is wasted. Persona-first thinking is the bridge to Level 7.",
    checklist: [
      "Has done explicit task decomposition — knows which tasks are AI-led, hybrid, or human-only",
      "Built a personal prompt asset library with placeholders for reuse",
      "Connects drives, email, and calendar to AI tools to reduce context-switching",
      "Uses rubric-based evaluation to score and improve AI outputs systematically",
      "Saving hours per week — not minutes — through compounding micro-task automation",
    ],
    whosHere: "~4% of professionals. Requires deliberate workflow mapping — not just tool fluency.",
  },
  {
    level: 7,
    tldr: "My AI outputs don't sound like AI. Every audience gets exactly what they need.",
    description:
      "Your AI outputs don't sound like AI. You have saved personas with distinct personalities and tones — a blunt devil's advocate, a polished executive voice, a plain-English explainer. You define audiences with depth: demographics, pain points, decision-making role, triggers — not just job titles. A comms director at this level produces one piece of content in six formats — board deck, team update, client email, social post, podcast brief, executive summary — all from the same source. Every output is indistinguishable from expert human work.",
    thePerson:
      "Deep communicator with a natural instinct for audience. Has invested time in understanding how AI responds to persona framing and uses it to eliminate the generic AI voice entirely. Uses AI as a focus group — simulating stakeholder reactions to stress-test ideas before they go public. Applies diverse feedback loops: asks AI to respond as a skeptical CFO, a time-poor operations lead, a first-time buyer. Output quality is the competitive advantage.",
    theCompany:
      "Likely in a communication-heavy industry — marketing, PR, consulting, financial services, legal. Content quality is a brand differentiator and the organisation is starting to notice that this person's AI outputs land differently. May be developing internal AI content standards or tone-of-voice guidelines. The question of \"what does good AI output look like for us?\" is being asked — this person is the answer.",
    theUnlock:
      "Moving from communication craft to technical prototyping — the ability to build something functional, not just write something polished. The Vendor Threat mindset starts with asking \"could I build this myself?\" instead of \"could I write this better?\"",
    checklist: [
      "Has multiple saved AI personas for different communication contexts",
      "Defines audience with depth: demographics, pain points, triggers, decision-making role",
      "Uses AI as a focus group — simulates multiple stakeholder perspectives to stress-test ideas",
      "Produces one piece of content across 5+ formats from a single source",
      "Every output goes through rubric evaluation before it leaves the room",
    ],
    whosHere: "~1% of professionals. Deep persona discipline and multi-format fluency required.",
  },
  {
    level: 8,
    tldr: "I can build what you're selling before the meeting ends.",
    description:
      "When a vendor pitches their $50,000 AI solution, you can reverse-engineer the spec in real time, open Claude, and have a working prototype before they leave the room — no coding required. You've stopped buying AI wrappers and started building your own. You can spot an AI wrapper from across a Zoom call and explain what's actually happening under the hood. You review legal documents with AI first — understand clause structure and risk flags — then ask a lawyer only the questions that require human judgment.",
    thePerson:
      "High prototyping instinct combined with deep prompting skill. Builds first, evaluates second. Has developed a sharp eye for distinguishing genuine AI capability from expensive UI wrappers. The internal \"have you tried doing this yourself first?\" voice is always on. Comfortable moving between business problem and functional prototype without a technical intermediary. Has the ability to prototype a vendor solution in a meeting — and has done it, or is fully confident they could.",
    theCompany:
      "Fast-moving, often founder-led or with a lean senior team. Has a culture of building before buying. Vendor relationships are evaluated on what they provide beyond the AI itself: data, integrations, support, compliance. The bar for \"we need to buy this\" is high because the bar for \"we can build this\" is low.",
    theUnlock:
      "Recognising that prototyping is a personal skill but code is a team capability. Moving from \"I can build this\" to \"my whole team can build their own tools\" — without anyone needing a CS degree — is the bridge to Level 9.",
    checklist: [
      "Can prototype a working solution in Claude or Lovable before a vendor meeting ends",
      "Can identify an AI wrapper on sight and explain what's actually happening underneath",
      "Has the ability to prototype a vendor solution in a meeting — and has done it or is confident they could",
      "Reviews legal, financial, or strategic documents with AI before involving specialists",
      "Never adopts a tool without prototyping first to validate the need",
    ],
    whosHere: "~0.5% of professionals. High prototyping instinct and deep prompting skill required.",
  },
  {
    level: 9,
    tldr: "My team ships code. None of them have CS degrees.",
    description:
      "Every member of your team uses AI to write, run, and automate with code — dashboards, scripts, integrations, internal tools — without filing a single ticket to a developer. A marketing manager builds her own analytics dashboards. An ops lead automates his own integrations. A finance analyst ships internal tools that would have taken a dev sprint. Code is just another output format, and your team figured that out before your competitors did. They didn't need CS degrees. They needed Claude.",
    thePerson:
      "Has personally crossed the threshold from \"AI user\" to \"AI builder\" and brought their team with them. Understands AI's technical capabilities and limits well enough to know when a vendor claim is technically impossible — and says so in the meeting. Has invested in making Claude Code (or equivalent) part of every team member's toolkit, not as a developer tool but as a professional capability. Thinks of code the same way they think of a slide deck: a format, not a specialism.",
    theCompany:
      "Small to mid-size, high ambition, low bureaucracy. The development backlog has shrunk because the teams generating the requests have started solving them. The gap between \"I need this built\" and \"it's built\" has collapsed from weeks to hours. IT doesn't gate-keep AI tool access — or has been bypassed by a team that moved faster. Technical debt is understood as a team-level concept, not just an engineering one.",
    theUnlock:
      "Shifting from team-level capability to organisation-level redesign — asking not \"what can my team build?\" but \"what does this mean for headcount, structure, and how we measure output?\" That question is the door to Level 10.",
    checklist: [
      "Every team member uses AI to write and run code — dashboards, automations, integrations",
      "No IT ticket required — team members solve their own technical needs directly",
      "Has reviewed vendor source code or technical documentation with AI before a meeting",
      "Can identify when a vendor capability claim is technically impossible",
      "Team ships internal tools that would previously have required a development sprint",
    ],
    whosHere: "~0.15% of professionals. Requires team-wide adoption and a culture that treats code as a format.",
  },
  {
    level: 10,
    tldr: "I'm not using AI to work faster. I'm using it to need fewer people for the same output.",
    description:
      "You're not just productive — you're redesigning how teams work. You believe every department has an AI workflow owner hiding in plain sight — not a coder, but someone who can spec, prototype, and deploy AI-assisted processes. A COO at this level has restructured reporting lines around AI-augmented outputs. A marketing director runs a two-person team producing what used to require eight. You think in workforce-level ROI, not personal efficiency. Headcount decisions start with: \"What can't AI do here?\"",
    thePerson:
      "Has both the organisational authority and the AI fluency to act on what they see. Deeply held philosophy: AI handles tasks, humans handle responsibility — no autonomous AI for client-facing decisions, no delegating accountability to a machine. Has had the internal vendor conversation: \"before we buy this, let me show you what we can build.\" Understands that the organisations winning right now are the ones compounding AI capability faster than competitors can hire.",
    theCompany:
      "Lean by design, not by constraint. Has restructured at least one department around AI-augmented outputs. Output-to-headcount ratio is measurably better than industry peers and leadership knows why. Headcount planning starts with capability mapping, not role-counting. The question isn't \"should we use AI?\" — it's \"what are we still doing manually that we shouldn't be?\"",
    theUnlock:
      "Systemising everything — building the interlocking workflows, automations, and agent pipelines that turn the org redesign into a self-sustaining operating system, not a series of individual decisions. That's the full AI-Native build.",
    checklist: [
      "Has built and deployed AI workflows used by entire teams — not just personal productivity tools",
      "Has restructured at least one department or reporting line around AI-augmented outputs",
      "Headcount decisions start with \"what can't AI do here?\" not \"do we need another person?\"",
      "Every department has a designated AI workflow owner — not a coder, a process designer",
      "The team's collective AI capability compounds faster than any competitor can hire",
    ],
    whosHere: "~0.05% of professionals. Requires both organisational authority and deep AI fluency.",
  },
  {
    level: 11,
    tldr: "10 people. Unicorn output. AI isn't a tool — it's the org chart.",
    description:
      "Your company has 10 people and the output of 100. Or you're a solo operator building toward $10M — same principles, different scale. Nearly every job function has partial team-level automation — support, content, reporting, legal review, financial modelling, sales prep, and onboarding all run with minimal human initiation. You haven't used AI to do your old job faster — you've redesigned what the job is. Your competitive advantage isn't a product or a process. It's the operating system you built. Peers can't explain your output-to-headcount ratio without seeing the workflows — and once they see them, they can't unsee them.",
    thePerson:
      "Founder-minded, systems-obsessed, radically pragmatic. Has let go of doing things the traditional way — not recklessly, but deliberately. Deeply held principle: AI handles tasks, humans handle responsibility. No autonomous AI for client-facing decisions. No delegating accountability to a machine. Whether running a 10-person team or operating solo, the philosophy is identical: every hire — or every hour — is evaluated against what AI cannot do, and the bar is genuinely high.",
    theCompany:
      "Doesn't look like a company from the outside. Headcount is suspiciously low for the output. Response times are fast. Content quality is high. Pricing is aggressive. Competitors assume there's a bigger team or a technical advantage they can't see. The advantage is the operating system — the interlocking workflows, prompts, automations, and agent pipelines that turn a small team (or a single person) into a force multiplier. It's not a product moat. It's a capability moat.",
    theUnlock:
      "There is no Level 12. The work at this level is depth, not progression — compounding the operating system, closing the gaps, and staying ahead of what AI can now do that it couldn't last quarter.",
    checklist: [
      "Every core workflow has a defined AI layer — support, content, reporting, legal review, financial modelling, sales prep, onboarding",
      "Team is under 10 people (or solo) and produces output that would require 50–100 in a traditional org",
      "Headcount decisions are made by asking \"what can't AI do here?\" first",
      "AI handles tasks; humans handle responsibility — no autonomous AI for client-facing decisions",
      "Peers cannot explain the output-to-headcount ratio without seeing the workflows",
    ],
    whosHere: "<0.01% of professionals. You don't reach this level. You build your way here from every level below it.",
  },
];
