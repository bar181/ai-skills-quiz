import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { levels } from "@/data/quizData";
import { levelDetails } from "@/data/levelDetails";
import { levelImages } from "@/data/levelImages";
import Header from "@/components/Header";
import {
  ArrowLeft,
  ArrowRight,
  Linkedin,
  CheckCircle2,
  User,
  Building2,
  KeyRound,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Distribution data for bell curve visualization
const distributionData = [
  { level: 0, percent: 4, label: "~4%" },
  { level: 1, percent: 14, label: "~14%" },
  { level: 2, percent: 30, label: "~30%" },
  { level: 3, percent: 24, label: "~24%" },
  { level: 4, percent: 14, label: "~14%" },
  { level: 5, percent: 8, label: "~8%" },
  { level: 6, percent: 4, label: "~4%" },
  { level: 7, percent: 1, label: "~1%" },
  { level: 8, percent: 0.5, label: "~0.5%" },
  { level: 9, percent: 0.15, label: "~0.15%" },
  { level: 10, percent: 0.05, label: "~0.05%" },
  { level: 11, percent: 0.01, label: "<0.01%" },
];

const DistributionChart = ({ activeLevel }: { activeLevel: number }) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const maxPercent = 30;

  return (
    <div className="w-full">
      <div className="flex items-end gap-[3px] sm:gap-1.5 h-32 sm:h-40">
        {distributionData.map((d) => {
          const height = Math.max((d.percent / maxPercent) * 100, 3);
          const isActive = d.level === activeLevel;
          const isHovered = hoveredBar === d.level;

          return (
            <div
              key={d.level}
              className="flex-1 flex flex-col items-center justify-end h-full relative group cursor-pointer"
              onMouseEnter={() => setHoveredBar(d.level)}
              onMouseLeave={() => setHoveredBar(null)}
              onTouchStart={() => setHoveredBar(d.level)}
              onTouchEnd={() => setTimeout(() => setHoveredBar(null), 2000)}
            >
              {/* Tooltip */}
              {(isHovered || isActive) && (
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap z-10 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground text-background"
                }`}>
                  {d.label}
                </div>
              )}
              {/* Bar */}
              <div
                className={`w-full rounded-t-sm transition-all duration-300 ${
                  isActive
                    ? "bg-primary shadow-lg shadow-primary/30"
                    : isHovered
                    ? "bg-primary/60"
                    : d.level < activeLevel
                    ? "bg-primary/20"
                    : "bg-muted-foreground/15"
                }`}
                style={{ height: `${height}%` }}
              />
              {/* Label */}
              <span className={`text-[9px] sm:text-[10px] mt-1 font-medium ${
                isActive ? "text-primary font-bold" : "text-muted-foreground"
              }`}>
                {d.level}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LevelDetail = () => {
  const { level: levelParam } = useParams();
  const levelNum = parseInt(levelParam || "0", 10);
  const levelInfo = levels[levelNum] || levels[0];
  const detail = levelDetails[levelNum] || levelDetails[0];
  const image = levelImages[levelInfo.imageKey];
  const [showAllLevels, setShowAllLevels] = useState(false);

  const prevLevel = levelNum > 0 ? levels[levelNum - 1] : null;
  const nextLevel = levelNum < 11 ? levels[levelNum + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showRetake />

      <main className="flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
        <Link
          to={`/results/${levelNum}`}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to results
        </Link>

        {/* ===== HERO SECTION ===== */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-8 animate-fade-in-up">
          {/* Image + badge — stacked on mobile, side on desktop */}
          <div className="flex flex-col items-center lg:items-start flex-shrink-0">
            <div className="w-28 h-28 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg">
              <img src={image} alt={levelInfo.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Title block */}
          <div className="text-center lg:text-left flex-1">
            <div className="level-badge bg-primary/10 text-primary mb-2 text-xs">
              {levelInfo.emoji} Level {levelInfo.level}
            </div>
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-2">{levelInfo.title}</h1>
            <p className="text-sm text-muted-foreground mb-3">{levelInfo.percent} of professionals</p>

            {/* TL;DR — inline on desktop */}
            <div className="quiz-card bg-primary/5 border-primary/20 lg:max-w-lg">
              <p className="font-display font-semibold text-xs text-primary uppercase tracking-wider mb-1">TL;DR</p>
              <p className="text-base lg:text-lg font-display font-semibold text-foreground">{detail.tldr}</p>
            </div>
          </div>
        </div>

        {/* ===== MAIN CONTENT — 2 col on desktop ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left column — main content (2/3 on desktop) */}
          <div className="lg:col-span-2 space-y-5">
            {/* Description */}
            <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
              <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Description
              </p>
              <p className="text-sm lg:text-base leading-relaxed text-foreground/90">{detail.description}</p>
            </div>

            {/* Person & Company — side by side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                    The Person
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{detail.thePerson}</p>
              </div>

              <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                    The Company
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{detail.theCompany}</p>
              </div>
            </div>

            {/* The Unlock */}
            <div className="quiz-card animate-fade-in-up border-l-4 border-l-[hsl(var(--quiz-green))] bg-[hsl(var(--quiz-green)/0.04)]" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[hsl(var(--quiz-green)/0.15)] flex items-center justify-center">
                  <KeyRound className="w-3.5 h-3.5 text-[hsl(var(--quiz-green))]" />
                </div>
                <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                  The Unlock
                </p>
              </div>
              <p className="text-sm lg:text-base leading-relaxed text-foreground/90 font-medium">{detail.theUnlock}</p>
            </div>
          </div>

          {/* Right column — sidebar content (1/3 on desktop) */}
          <div className="space-y-5">
            {/* Checklist */}
            <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Checklist
              </p>
              <ul className="space-y-3">
                {detail.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who's Here */}
            <div className="quiz-card animate-fade-in-up bg-accent/10" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-accent" />
                </div>
                <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                  Who's Here
                </p>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 font-semibold">{detail.whosHere}</p>
            </div>
          </div>
        </div>

        {/* ===== INTERACTIVE DISTRIBUTION CHART ===== */}
        <div className="quiz-card mb-8 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <p className="font-display font-semibold text-xs text-muted-foreground mb-1 uppercase tracking-wider">
            AI Adoption Distribution
          </p>
          <p className="text-[11px] text-muted-foreground mb-4">
            Tap or hover on each bar to see the percentage of professionals at each level
          </p>
          <DistributionChart activeLevel={levelNum} />
        </div>

        {/* ===== JOURNEY MAP ===== */}
        <div className="quiz-card mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="font-display font-semibold text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            Journey Map
          </p>
          <div className="flex gap-1">
            {levels.map((l) => (
              <Link
                key={l.level}
                to={`/level/${l.level}`}
                className={`h-3 lg:h-4 flex-1 rounded-full transition-all hover:scale-y-150 ${
                  l.level === levelNum
                    ? "bg-primary scale-y-125"
                    : l.level < levelNum
                    ? "bg-primary/30"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">0</span>
            <span className="text-xs text-muted-foreground">11</span>
          </div>
        </div>

        {/* ===== ALL LEVELS — collapsible on mobile, always visible on desktop ===== */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          {/* Mobile: collapsible */}
          <button
            onClick={() => setShowAllLevels(!showAllLevels)}
            className="lg:hidden flex items-center justify-between w-full font-display font-semibold text-sm mb-3"
          >
            <span>All Levels</span>
            {showAllLevels ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          {/* Desktop: always visible label */}
          <p className="hidden lg:block font-display font-semibold text-sm mb-3">All Levels</p>

          {/* Mobile: compact 4-col, small cards */}
          <div className={`lg:hidden ${showAllLevels ? "block" : "hidden"}`}>
            <div className="grid grid-cols-4 gap-1.5">
              {levels.map((l) => (
                <Link
                  key={l.level}
                  to={`/level/${l.level}`}
                  className={`text-center rounded-lg border border-border bg-card p-2 transition-colors hover:border-primary/30 ${
                    l.level === levelNum ? "border-primary bg-primary/5" : ""
                  }`}
                >
                  <span className="text-sm">{l.emoji}</span>
                  <p className="font-display font-semibold text-[10px] mt-0.5">Lv {l.level}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop: larger grid with titles */}
          <div className="hidden lg:grid grid-cols-6 gap-2">
            {levels.map((l) => (
              <Link
                key={l.level}
                to={`/level/${l.level}`}
                className={`quiz-card text-center hover:border-primary/30 hover:shadow-md transition-all py-3 ${
                  l.level === levelNum ? "border-primary bg-primary/5 shadow-md" : ""
                }`}
              >
                <span className="text-xl">{l.emoji}</span>
                <p className="font-display font-semibold text-xs mt-1">Level {l.level}</p>
                <p className="text-[10px] text-muted-foreground truncate px-1">{l.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div
          className="flex justify-between items-center pt-4 border-t border-border animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-xs text-muted-foreground">
            {levelNum + 1} of {levels.length}
          </p>
          <div className="flex gap-2">
            {prevLevel && (
              <Link
                to={`/level/${prevLevel.level}`}
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Prev
              </Link>
            )}
            {nextLevel && (
              <Link
                to={`/level/${nextLevel.level}`}
                className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Next <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* ===== ATTRIBUTION ===== */}
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Framework and quiz by{" "}
            <span className="font-semibold text-foreground">Bradley Ross</span>
          </p>
          <a
            href="https://www.linkedin.com/in/bradaross/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(210,80%,42%)] text-[hsl(0,0%,100%)] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Linkedin className="w-4 h-4" /> Connect on LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
};

export default LevelDetail;
