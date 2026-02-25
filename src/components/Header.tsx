import { Link } from "react-router-dom";
import { Home, RotateCcw } from "lucide-react";

interface HeaderProps {
  showRetake?: boolean;
}

const Header = ({ showRetake }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
      <Link to="/" className="flex items-center gap-2 text-primary font-display font-semibold text-sm">
        <Home className="w-4 h-4" />
        AI Dev Quiz
      </Link>
      {showRetake && (
        <Link to="/quiz" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <RotateCcw className="w-3.5 h-3.5" />
          Retake
        </Link>
      )}
    </header>
  );
};

export default Header;
