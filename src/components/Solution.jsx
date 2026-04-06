import { motion } from "framer-motion";
import { Sparkles, Zap, GitBranch } from "lucide-react";

export default function Solution() {
    const points = [
        {
            icon: Sparkles,
            title: "AI-Powered Automation",
            desc: "Agents think, decide, and execute tasks without manual effort.",
        },
        {
            icon: GitBranch,
            title: "Connected Tools",
            desc: "Seamlessly integrate Gmail, Slack, Notion, and more.",
        },
        {
            icon: Zap,
            title: "Instant Execution",
            desc: "From idea to action in seconds — no delays, no friction.",
        },
    ];

    return (
        <section className="relative py-20 px-6 bg-black overflow-hidden">

            {/* 🌌 Background */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-black to-blue-900/20 blur-3xl"></div>

            {/* ✨ Floating Glow */}
            <motion.div
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-10 blur-[120px]"
            />

            <div className="relative max-w-6xl mx-auto z-10 text-center perspective-1000">

                {/* 🔥 STORY TRANSITION */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm text-purple-400 mb-4"
                >
                    There’s a better way ↓
                </motion.p>

                {/* 🧠 Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Meet{" "}
                    <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        AgentForge
                    </span>
                </motion.h2>

                {/* 💡 Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    Your AI workforce that connects all your tools and automates your work —
                    so you can focus on what actually matters.
                </motion.p>

                {/* 💎 Feature Cards */}
                <div className="mt-20 grid md:grid-cols-3 gap-10">

                    {points.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="relative p-8 rounded-2xl 
                bg-white/5 border border-white/10 backdrop-blur-xl
                hover:border-purple-400/40 transition"
                            >
                                {/* Glow hover */}
                                <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 hover:opacity-100 blur-xl transition"></div>

                                <div className="relative z-10">
                                    <div className="mb-4 flex justify-center">
                                        <div className="p-3 rounded-xl bg-purple-500/10">
                                            <Icon className="text-purple-400" size={24} />
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 🔥 Transformation Line */}
                <div className="mt-24 relative">
                    <motion.div
                        className="w-full h-0.5 bg-linear-to-r from-red-400 via-purple-400 to-green-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />

                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Before: Chaos</span>
                        <span>After: Automation</span>
                    </div>
                </div>

                {/* 🚀 CTA */}
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 30px rgba(168,85,247,0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-8 py-4 rounded-xl text-lg font-medium
          bg-linear-to-r from-purple-500 to-pink-500 
          shadow-lg transition"
                >
                    Build Your First AI Agent
                </motion.button>
            </div>

        </section>
    );
}