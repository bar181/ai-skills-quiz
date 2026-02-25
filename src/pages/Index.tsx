import { Link } from "react-router-dom";
import { ArrowRight, Zap, Clock, Sparkles } from "lucide-react";
import bradPixar from "@/assets/brad_pixar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <span className="flex items-center gap-2 text-primary font-display font-semibold text-sm">
          🤖 AI Dev Quiz
        </span>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-8 max-w-lg mx-auto w-full">
        {/* Hero Image */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-6 shadow-lg animate-scale-in">
          <img src={bradPixar} alt="AI Dev character" className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-3 animate-fade-in-up">
          What's Your <span className="text-primary">AI Dev Level</span>?
        </h1>
        <p className="text-muted-foreground text-center mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          From copy-pasting ChatGPT to shipping software with no one near a keyboard.
        </p>
        <p className="text-quiz-pink font-semibold text-center mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Which one are you? 👀
        </p>

        {/* CTA */}
        <Link
          to="/quiz"
          className="w-full max-w-xs flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-primary-foreground text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3 animate-fade-in-up"
          style={{
            background: "var(--quiz-gradient)",
            animationDelay: "0.2s",
          }}
        >
          Find Out Your Level <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-xs text-muted-foreground text-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          No signup · No data collected · 100% browser-based
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="stat-badge">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-sm">11 Levels</span>
            <span className="text-xs text-muted-foreground">0 — Dark Factory</span>
          </div>
          <div className="stat-badge">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-sm">2 Minutes</span>
            <span className="text-xs text-muted-foreground">super quick</span>
          </div>
          <div className="stat-badge">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-sm">Free</span>
            <span className="text-xs text-muted-foreground">no signup</span>
          </div>
        </div>

        {/* Fun fact card */}
        <div className="quiz-card w-full animate-fade-in-up bg-accent/20" style={{ animationDelay: "0.35s" }}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏭</span>
            <div>
              <p className="font-display font-semibold text-sm">Some teams ship with zero keystrokes</p>
              <p className="text-xs text-muted-foreground mt-1">Automated pipelines handle the entire lifecycle.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border w-full text-center">
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/bradaross/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              Bradley Ross
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
