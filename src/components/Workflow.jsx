import { motion } from "framer-motion";
import { Bot, Plug, Zap } from "lucide-react";

const steps = [
  {
    title: "Create Agent",
    desc: "Define your AI agent with goals",
    icon: Bot,
  },
  {
    title: "Connect Tools",
    desc: "Integrate Gmail, Slack, Notion",
    icon: Plug,
  },
  {
    title: "Automate Tasks",
    desc: "Run workflows autonomously",
    icon: Zap,
  },
];

export default function Workflow() {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

      {/* ✨ Floating Orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 opacity-10 blur-[120px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-5xl font-bold">
            Intelligent{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Workflow Engine
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Your AI processes tasks like a real system — automatically.
          </p>
        </motion.div>

        {/* 🔗 PIPELINE */}
        <div className="relative mt-28">

          {/* Base line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10"></div>

          {/* Animated flowing line */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-purple-500 via-pink-500 to-purple-500"
            style={{ backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* ⚡ Data particles */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg"
              initial={{ x: "-10%", opacity: 0 }}
              animate={{
                x: "110%",
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 1.2,
                repeat: Infinity,
              }}
            />
          ))}

          {/* 🧠 STEPS */}
          <div className="grid md:grid-cols-3 gap-16 relative">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative text-center group"
                >
                  {/* Step label */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                    Step {i + 1}
                  </div>

                  {/* Glowing node */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full blur-md opacity-50"
                  />

                  {/* Arrow */}
                  {i !== 2 && (
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity }}
                      className="hidden md:block absolute top-1/2 -right-8 text-purple-400 text-xl"
                    >
                      →
                    </motion.div>
                  )}

                  {/* Card */}
                  <div className="relative p-8 rounded-2xl 
                  bg-white/5 border border-white/10 backdrop-blur-xl
                  hover:border-purple-400/40 transition shadow-xl">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20 mb-6">
                      <Icon className="text-purple-300" size={26} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2">
                      {step.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-gray-400 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}