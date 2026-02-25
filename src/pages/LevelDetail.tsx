import { useParams, Link } from "react-router-dom";
import { levels } from "@/data/quizData";
import { levelDetails } from "@/data/levelDetails";
import { levelImages } from "@/data/levelImages";
import Header from "@/components/Header";
import { ArrowLeft, ArrowRight, Linkedin, CheckCircle2, User, Building2, KeyRound, Users } from "lucide-react";

const LevelDetail = () => {
  const { level: levelParam } = useParams();
  const levelNum = parseInt(levelParam || "0", 10);
  const levelInfo = levels[levelNum] || levels[0];
  const detail = levelDetails[levelNum] || levelDetails[0];
  const image = levelImages[levelInfo.imageKey];

  const prevLevel = levelNum > 0 ? levels[levelNum - 1] : null;
  const nextLevel = levelNum < 11 ? levels[levelNum + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showRetake />

      <main className="flex-1 px-4 py-6 max-w-3xl mx-auto w-full">
        <Link to={`/results/${levelNum}`} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to results
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4 animate-fade-in-up">
          <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img src={image} alt={levelInfo.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="level-badge bg-primary/10 text-primary mb-1 text-xs">
              {levelInfo.emoji} Level {levelInfo.level}
            </div>
            <h1 className="text-2xl font-display font-bold">{levelInfo.title}</h1>
            <p className="text-sm text-muted-foreground">{levelInfo.percent} of professionals</p>
          </div>
        </div>

        {/* TL;DR */}
        <div className="quiz-card mb-4 animate-fade-in-up bg-primary/5 border-primary/20" style={{ animationDelay: "0.05s" }}>
          <p className="font-display font-semibold text-xs text-primary uppercase tracking-wider mb-1">TL;DR</p>
          <p className="text-base font-display font-semibold text-foreground">{detail.tldr}</p>
        </div>

        {/* Description */}
        <div className="quiz-card mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">Description</p>
          <p className="text-sm leading-relaxed text-foreground/90">{detail.description}</p>
        </div>

        {/* The Person */}
        <div className="quiz-card mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-primary" />
            <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">The Person</p>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">{detail.thePerson}</p>
        </div>

        {/* The Company */}
        <div className="quiz-card mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-primary" />
            <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">The Company</p>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">{detail.theCompany}</p>
        </div>

        {/* The Unlock */}
        <div className="quiz-card mb-4 animate-fade-in-up bg-accent/30" style={{ animationDelay: "0.25s" }}>
          <div className="flex items-center gap-2 mb-2">
            <KeyRound className="w-4 h-4 text-primary" />
            <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">The Unlock</p>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">{detail.theUnlock}</p>
        </div>

        {/* Checklist */}
        <div className="quiz-card mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-3">Checklist</p>
          <ul className="space-y-2.5">
            {detail.checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who's Here */}
        <div className="quiz-card mb-6 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-primary" />
            <p className="font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">Who's Here</p>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90 font-medium">{detail.whosHere}</p>
        </div>

        {/* Journey Map */}
        <div className="quiz-card mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="font-display font-semibold text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            Journey Map
          </p>
          <div className="flex gap-1">
            {levels.map((l) => (
              <div
                key={l.level}
                className={`h-3 flex-1 rounded-full transition-all ${
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

        {/* All levels grid */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <p className="font-display font-semibold text-sm mb-3">All Levels</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {levels.map((l) => (
              <Link
                key={l.level}
                to={`/level/${l.level}`}
                className={`quiz-card text-center hover:border-primary/30 transition-colors py-3 ${
                  l.level === levelNum ? "border-primary bg-primary/5" : ""
                }`}
              >
                <span className="text-lg">{l.emoji}</span>
                <p className="font-display font-semibold text-xs mt-1">Lv {l.level}</p>
                <p className="text-[10px] text-muted-foreground truncate">{l.title}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs text-muted-foreground">{levelNum + 1} of {levels.length}</p>
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

        {/* Attribution */}
        <div className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Framework and quiz by <span className="font-semibold text-foreground">Bradley Ross</span>
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
