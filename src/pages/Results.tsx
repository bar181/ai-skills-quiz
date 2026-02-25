import { useParams, Link } from "react-router-dom";
import { levels } from "@/data/quizData";
import { levelImages } from "@/data/levelImages";
import Header from "@/components/Header";
import { Users, TrendingUp, Zap, ArrowRight } from "lucide-react";

const Results = () => {
  const { level: levelParam } = useParams();
  const levelNum = parseInt(levelParam || "0", 10);
  const levelInfo = levels[levelNum] || levels[0];
  const image = levelImages[levelInfo.imageKey];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header showRetake />

      <main className="flex-1 flex flex-col items-center px-4 py-6 max-w-2xl mx-auto w-full">
        {/* Result header */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full mb-6 animate-fade-in-up">
          <div className="w-36 h-36 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
            <img src={image} alt={levelInfo.title} className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <div className="level-badge bg-primary/10 text-primary mb-2">
              {levelInfo.emoji} Level {levelInfo.level}
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-1">{levelInfo.title}</h1>
            <p className="text-muted-foreground italic">{levelInfo.tagline}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="stat-badge">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-xl">{levelInfo.percentOfDevs}</span>
            <span className="text-xs text-muted-foreground">of devs</span>
          </div>
          <div className="stat-badge">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-xl">{levelInfo.percentile}</span>
            <span className="text-xs text-muted-foreground">percentile</span>
          </div>
        </div>

        {/* Description */}
        <div className="quiz-card w-full mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <Zap className="w-5 h-5 text-primary mb-2" />
          <p className="text-sm leading-relaxed text-foreground/90">{levelInfo.description}</p>
        </div>

        {/* View details link */}
        <Link
          to={`/level/${levelInfo.level}`}
          className="w-full max-w-sm flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          View Full Details <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Journey visualization */}
        <div className="quiz-card w-full animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <p className="font-display font-semibold text-xs text-muted-foreground mb-3 uppercase tracking-wider">Your Journey</p>
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

        {/* Browse all levels */}
        <div className="mt-6 w-full animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="font-display font-semibold text-sm mb-3">Explore All Levels</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {levels.map((l) => (
              <Link
                key={l.level}
                to={`/level/${l.level}`}
                className={`quiz-card text-center hover:border-primary/30 transition-colors ${
                  l.level === levelNum ? "border-primary bg-primary/5" : ""
                }`}
              >
                <span className="text-lg">{l.emoji}</span>
                <p className="font-display font-semibold text-xs mt-1">Lv {l.level}</p>
                <p className="text-xs text-muted-foreground truncate">{l.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
