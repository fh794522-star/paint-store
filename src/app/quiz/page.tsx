"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const questions = [
  {
    question: "Best paint for walls?",
    options: ["Matte", "Glossy", "Satin"],
    answer: "Matte",
  },
  {
    question: "Waterproof paint?",
    options: ["Yes", "No", "Depends"],
    answer: "Yes",
  },
  {
    question: "Luxury color?",
    options: ["Gold", "Silver", "Black"],
    answer: "Gold",
  },
  {
    question: "Interior paint?",
    options: ["Acrylic", "Oil", "Both"],
    answer: "Both",
  },
  {
    question: "Exterior paint?",
    options: ["Weather Coat", "Normal", "None"],
    answer: "Weather Coat",
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  // TIMER
  useEffect(() => {
    if (time === 0) {
      handleNext();
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  // NEXT QUESTION
  const handleNext = () => {
    if (selected === questions[index].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setTime(10);
    } else {
      setFinished(true);
    }
  };

  // RESTART
  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setTime(10);
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-black to-pink-900 text-white">
      <Navbar />

      <div className="pt-32 flex justify-center items-center px-4">
        <div className="w-full max-w-xl p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-center">

          {/* FINISHED SCREEN */}
          {finished ? (
            <>
              <h1 className="text-3xl font-bold bg-linear-to-rrom-pink-400 to-yellow-300 bg-clip-text text-transparent">
                Quiz Completed 🎉
              </h1>

              <p className="mt-4 text-xl">
                Your Score: {score} / {questions.length}
              </p>

              <button
                onClick={restartQuiz}
                className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-pink-500 to-yellow-500 hover:scale-110 transition"
              >
                Restart 🔁
              </button>
            </>
          ) : (
            <>
              {/* TIMER */}
              <div className="flex justify-between mb-4 text-sm opacity-80">
                <span>Question {index + 1}/{questions.length}</span>
                <span className="text-pink-400 font-bold">⏱ {time}s</span>
              </div>

              {/* QUESTION */}
              <h2 className="text-2xl font-semibold mb-6">
                {questions[index].question}
              </h2>

              {/* OPTIONS */}
              <div className="flex flex-col gap-3">
                {questions[index].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(opt)}
                    className={`p-3 rounded-xl border transition 
                      ${selected === opt 
                        ? "bg-linear-to-r from-pink-500 to-yellow-500"
                        : "bg-white/10 hover:bg-white/20"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* NEXT BUTTON */}
              <button
                onClick={handleNext}
                className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-pink-500 hover:scale-110 transition"
              >
                Next ➡️
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}