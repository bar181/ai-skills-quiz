import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions, calculateLevel } from "@/data/quizData";
import { levelImages } from "@/data/levelImages";
import Header from "@/components/Header";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerTypes, setAnswerTypes] = useState<("red" | "yellow" | "green")[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const navigate = useNavigate();

  const question = quizQuestions[currentQuestion];
  const totalQuestions = 11; // Questions 0-10
  const progress = ((currentQuestion) / totalQuestions) * 100;

  const levelImageKey =
    question.level <= 1 ? "level0" :
    question.level <= 4 ? "level3" :
    question.level <= 6 ? "level5" :
    question.level <= 8 ? "level8" : "level10";

  const handleSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const answer = question.answers[answerIndex];
    const newAnswerTypes = [...answerTypes, answer.type];

    setTimeout(() => {
      // If they picked red, quiz ends — their level is this question's level
      if (answer.type === "red") {
        const level = calculateLevel(newAnswerTypes);
        navigate(`/results/${level}`);
        return;
      }

      // Level 10 (index 10) is the last question — any answer ends the quiz
      if (currentQuestion >= 10) {
        const level = calculateLevel(newAnswerTypes);
        navigate(`/results/${level}`);
        return;
      }

      setAnswerTypes(newAnswerTypes);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }, 400);
  };

  const typeStyles = {
    red: "border-l-4 border-l-quiz-red bg-quiz-red/5 hover:bg-quiz-red/10",
    yellow: "border-l-4 border-l-quiz-yellow bg-quiz-yellow/5 hover:bg-quiz-yellow/10",
    green: "border-l-4 border-l-quiz-green bg-quiz-green/5 hover:bg-quiz-green/10",
  };

  const typeDots = {
    red: "🔴",
    yellow: "🟡",
    green: "✅",
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
        <div className="w-36 h-36 rounded-2xl overflow-hidden mb-3 shadow-md animate-scale-in">
          <img
            src={levelImages[levelImageKey]}
            alt={`Level ${question.level}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Level badge */}
        <div className="level-badge bg-quiz-orange/10 text-quiz-orange mb-1">
          Level {question.level}
        </div>
        <p className="text-xs text-muted-foreground font-semibold mb-4">{question.title}</p>

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
              className={`quiz-card cursor-pointer transition-all duration-200 w-full text-left flex items-start gap-3 ${typeStyles[answer.type]} ${
                selectedAnswer === index ? "ring-2 ring-primary scale-[0.98]" : ""
              }`}
            >
              <span className="text-base flex-shrink-0 mt-0.5">{typeDots[answer.type]}</span>
              <span className="text-sm font-medium leading-relaxed">
                {answer.text}
              </span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">🔴 You stop here</span>
          <span className="flex items-center gap-1">🟡 Your level</span>
          <span className="flex items-center gap-1">✅ Next question</span>
        </div>

        {/* Question counter */}
        <p className="text-xs text-muted-foreground mt-3">
          {currentQuestion + 1} of {totalQuestions}
        </p>
      </main>
    </div>
  );
};

export default Quiz;
