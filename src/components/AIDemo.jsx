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

    useEffect(() => {
        if (currentStep >= steps.length) {
            // 🔄 Restart loop after completion
            setTimeout(() => {
                setLines([]);
                setCurrentStep(0);
            }, 2500);
            return;
        }

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
                }, 500);
            }
        }, 20 + Math.random() * 20); // 👈 human-like typing speed

        return () => clearInterval(typing);
    }, [currentStep]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto"
        >
            <div className="relative">

                {/* ✨ Outer Glow */}
                <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-pink-500 blur-2xl opacity-20 rounded-2xl"></div>

                {/* 💎 Terminal */}
                <div className="relative bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">

                    {/* 🔝 Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>

                        <span className="text-xs text-gray-400">Agent Terminal</span>
                    </div>

                    {/* ⚡ Animated progress bar */}
                    <motion.div
                        className="h-0.5 bg-linear-to-r from-purple-500 to-pink-500 mb-4"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* 🖥 Terminal Body */}
                    <div className="font-mono text-sm space-y-2 text-green-400 min-h-35">

                        {lines.map((line, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                ➜ {line}
                            </motion.p>
                        ))}

                        {/* ✍️ Typing */}
                        {currentText && (
                            <p>
                                ➜ {currentText}
                                <span className="animate-pulse ml-1">|</span>
                            </p>
                        )}
                    </div>

                    {/* 🔻 Footer */}
                    <div className="mt-4 text-xs text-gray-500 flex justify-between items-center">

                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            AI Agent Running...
                        </span>

                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-green-400"
                        >
                            ● Live
                        </motion.span>
                    </div>

                    {/* ✨ Subtle scanline effect */}
                    <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-white/5 to-transparent opacity-10 animate-pulse"></div>
                </div>
            </div>
        </motion.div>
    );
}