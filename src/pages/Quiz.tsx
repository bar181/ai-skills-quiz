import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions, calculateLevel } from "@/data/quizData";
import { levelImages } from "@/data/levelImages";
import Header from "@/components/Header";
import { CheckCircle2, Circle, Square } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const navigate = useNavigate();

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  const levelContext = question.levelContext;
  const levelImageKey = levelContext <= 1 ? "level0" : levelContext <= 3 ? "level3" : levelContext <= 6 ? "level5" : levelContext <= 8 ? "level8" : "level10";

  const handleSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const score = question.answers[answerIndex].score;

    setTimeout(() => {
      const newAnswers = [...answers, score];
      if (currentQuestion < quizQuestions.length - 1) {
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        const level = calculateLevel(newAnswers);
        navigate(`/results/${level}`, { state: { fromQuiz: true } });
      }
    }, 400);
  };

  const answerTypeStyles = {
    yes: "answer-yes",
    maybe: "answer-maybe",
    skip: "answer-skip",
  };

  const answerIcons = {
    yes: <Square className="w-5 h-5 text-quiz-green flex-shrink-0" />,
    maybe: <Circle className="w-5 h-5 text-quiz-yellow flex-shrink-0" />,
    skip: <CheckCircle2 className="w-5 h-5 text-quiz-green flex-shrink-0" />,
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-r-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center px-4 py-6 max-w-lg mx-auto w-full">
        {/* Level image */}
        <div className="w-40 h-40 rounded-2xl overflow-hidden mb-3 shadow-md animate-scale-in">
          <img
            src={levelImages[levelImageKey]}
            alt={`Level ${levelContext}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Level badge */}
        <div className="level-badge bg-quiz-orange/10 text-quiz-orange mb-4">
          🔥 Level {levelContext}
        </div>

        {/* Question card */}
        <div className="quiz-card w-full mb-6 animate-fade-in-up">
          <p className="text-center font-display font-semibold text-base leading-relaxed">
            {question.question}
          </p>
        </div>

        {/* Answers */}
        <div className="w-full space-y-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`answer-option w-full text-left flex items-start gap-3 ${answerTypeStyles[answer.type]} ${
                selectedAnswer === index ? "answer-option-selected scale-[0.98]" : ""
              }`}
            >
              {answerIcons[answer.type]}
              <span className="text-sm font-medium leading-relaxed" style={{
                color: answer.type === "yes" ? "hsl(var(--quiz-green))" :
                       answer.type === "maybe" ? "hsl(var(--quiz-orange))" :
                       "hsl(var(--quiz-green))"
              }}>
                {answer.text}
              </span>
            </button>
          ))}
        </div>

        {/* Navigation legend */}
        <div className="flex items-center gap-4 mt-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-quiz-red" /> Go back one
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-quiz-yellow" /> You're here
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-quiz-green" /> Next question
          </span>
        </div>

        {/* Question counter */}
        <p className="text-xs text-muted-foreground mt-4">
          {currentQuestion + 1} of {quizQuestions.length}
        </p>
      </main>
    </div>
  );
};

export default Quiz;
