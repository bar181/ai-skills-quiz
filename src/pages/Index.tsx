import { Link } from "react-router-dom";
import { ArrowRight, Zap, Clock, Sparkles, Linkedin } from "lucide-react";
import bradPixar from "@/assets/brad_pixar.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <span className="flex items-center gap-2 text-primary font-display font-semibold text-sm">
          🧠 AI Pro Quiz
        </span>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-8 max-w-lg mx-auto w-full">
        {/* Hero Image */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-6 shadow-lg animate-scale-in">
          <img src={bradPixar} alt="AI Professional character" className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-display font-bold text-center mb-3 animate-fade-in-up">
          What Kind of <span className="text-primary">AI Professional</span> Are You?
        </h1>
        <p className="text-muted-foreground text-center mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          From skeptic to AI-native operator. One question per level — your level is where you hit your first 🔴.
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
            <span className="font-display font-bold text-sm">12 Levels</span>
            <span className="text-xs text-muted-foreground">0 — AI-Native</span>
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
            <span className="text-2xl">🚀</span>
            <div>
              <p className="font-display font-semibold text-sm">10 people. Unicorn output.</p>
              <p className="text-xs text-muted-foreground mt-1">AI-native operators produce what used to require teams of 50+.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-border w-full text-center">
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

export default Index;
