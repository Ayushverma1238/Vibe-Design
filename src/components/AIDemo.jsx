import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  "Initializing Agent...",
  "Connecting to Gmail...",
  "Analyzing unread emails...",
  "Drafting responses using AI...",
  "Scheduling meetings...",
  "Task Completed ✅",
];

export default function AIDemo() {
  const [lines, setLines] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentText, setCurrentText] = useState("");

  // Typing effect
  useEffect(() => {
    if (currentStep >= steps.length) return;

    let index = 0;
    const text = steps[currentStep];

    const typing = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typing);

        setTimeout(() => {
          setLines((prev) => [...prev, text]);
          setCurrentText("");
          setCurrentStep((prev) => prev + 1);
        }, 400);
      }
    }, 25);

    return () => clearInterval(typing);
  }, [currentStep]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="relative">

        {/* Glow Border */}
        <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-pink-500 blur-xl opacity-20 rounded-2xl"></div>

        {/* Glass Container */}
        <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <span className="text-xs text-gray-400">Agent Terminal</span>
          </div>

          {/* Terminal Body */}
          <div className="font-mono text-sm space-y-2 text-green-400">

            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >
                ➜ {line}
              </motion.p>
            ))}

            {/* Typing line */}
            {currentText && (
              <p>
                ➜ {currentText}
                <span className="animate-pulse">|</span>
              </p>
            )}
          </div>

          {/* Footer status */}
          <div className="mt-4 text-xs text-gray-500 flex justify-between">
            <span>AI Agent Running...</span>
            <span className="text-green-400">● Live</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}