import { motion } from "framer-motion";
import { Mail, MessageSquare, FileText } from "lucide-react";

export default function Problem() {
  const problems = [
    { icon: Mail, text: "Unread emails piling up" },
    { icon: MessageSquare, text: "Slack messages everywhere" },
    { icon: FileText, text: "Docs and notes scattered" },
  ];

  return (
    <section className="relative py-36 px-6 bg-black overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

      {/* ✨ Floating Glow Orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-10 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* 🔥 Headline */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Your workflow is{" "}
            <span className="text-red-400">broken & scattered</span>
          </h2>

          {/* 💭 Subtext */}
          <p className="text-gray-400 text-lg max-w-lg">
            You're constantly switching tabs, losing focus, and wasting hours.
            Your tools don’t talk to each other — and it’s slowing you down.
          </p>

          {/* ❌ Problem Cards */}
          <div className="space-y-4 mt-10">
            {problems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-5 rounded-xl 
                  bg-white/5 border border-white/10 backdrop-blur-lg 
                  hover:border-red-400/30 transition"
                >
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <Icon className="text-red-400" size={20} />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE (CHAOS VISUAL) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-purple-500 blur-[120px] opacity-20"></div>

          {/* Center AI */}
          <div className="relative w-64 h-64 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">
            <span className="text-purple-300 font-medium">You</span>

            {problems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12 + i * 2,
                    ease: "linear",
                  }}
                  className="absolute w-full h-full"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.3,
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 
                    bg-white/10 p-3 rounded-xl backdrop-blur-md"
                    style={{
                      transform: `rotate(${i * 120}deg) translateY(-120px)`,
                    }}
                  >
                    <Icon className="text-purple-300" size={18} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* 🔽 STORY TRANSITION */}
      <div className="relative mt-24 h-40">

        {/* Gradient fade */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-900/20 to-black"></div>

        {/* Line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full 
          bg-linear-to-b from-red-400 via-purple-400 to-transparent"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Moving dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full shadow-lg"
          animate={{
            y: [0, 140],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />
      </div>
    </section>
  );
}