import { useParams, Link } from "react-router-dom";
import { levels } from "@/data/quizData";
import { levelImages } from "@/data/levelImages";
import Header from "@/components/Header";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

const LevelDetail = () => {
  const { level: levelParam } = useParams();
  const levelNum = parseInt(levelParam || "0", 10);
  const levelInfo = levels[levelNum] || levels[0];
  const image = levelImages[levelInfo.imageKey];

  const prevLevel = levelNum > 0 ? levels[levelNum - 1] : null;
  const nextLevel = levelNum < 10 ? levels[levelNum + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showRetake />

      <main className="flex-1 px-4 py-6 max-w-3xl mx-auto w-full">
        {/* Back to results */}
        <Link to={`/results/${levelNum}`} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to results
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
          <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img src={image} alt={levelInfo.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="level-badge bg-primary/10 text-primary mb-1 text-xs">
              {levelInfo.emoji} Level {levelInfo.level}
            </div>
            <h1 className="text-2xl font-display font-bold">{levelInfo.title}</h1>
            <p className="text-sm text-muted-foreground italic">{levelInfo.tagline}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* What this looks like */}
          <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-4">
              What This Looks Like
            </h2>
            <ol className="space-y-3">
              {levelInfo.whatThisLooksLike.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-4">
            {/* Who's here */}
            <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-quiz-yellow" />
                <h2 className="font-display font-bold text-sm uppercase tracking-wider text-quiz-orange">
                  Who's Here
                </h2>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{levelInfo.whosHere}</p>
            </div>

            {/* Journey */}
            <div className="quiz-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-display font-bold text-sm uppercase tracking-wider text-foreground mb-3">
                Your Journey
              </h2>
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
                <span className="text-xs text-muted-foreground">10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
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
      </main>
    </div>
  );
};

export default LevelDetail;
