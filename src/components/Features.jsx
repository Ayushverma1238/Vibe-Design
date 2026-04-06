import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Bot, GitBranch, Plug } from "lucide-react";

const features = [
  {
    title: "Autonomous Workflows",
    desc: "Agents complete tasks end-to-end without manual intervention",
    icon: GitBranch,
  },
  {
    title: "Multi-tool Integration",
    desc: "Connect Gmail, Slack, Notion and more",
    icon: Plug,
    highlight: true,
  },
  {
    title: "Custom AI Agents",
    desc: "Build agents tailored exactly to your workflow",
    icon: Bot,
  },
];

export default function Features() {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

      {/* ✨ Floating Orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 opacity-20 blur-[120px]"
      />

      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-5xl font-bold leading-tight">
          Powerful{" "}
          <span className="bg-linear-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
            AI Capabilities
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Everything you need to build, deploy and scale autonomous AI agents.
        </p>
      </motion.div>

      {/* 💎 Cards */}
      <div className="mt-28 grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {features.map((f, i) => (
          <FeatureCard key={i} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -12, scale: 1.05 }}
      animate={{ y: [0, -5, 0] }}
      className={`relative rounded-2xl p-px group ${
        feature.highlight
          ? "bg-linear-to-r from-purple-500 to-pink-500"
          : "bg-white/10"
      }`}
    >
      {/* 🔥 Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition"
        style={{
          background: `radial-gradient(300px circle at ${springX}px ${springY}px, rgba(168,85,247,0.25), transparent 60%)`,
        }}
      />

      {/* Card */}
      <div className="relative h-full w-full rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-8 overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-purple-500/10 blur-xl transition"></div>

        {/* ⭐ Highlight badge */}
        {feature.highlight && (
          <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white">
            Popular
          </div>
        )}

        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20 mb-6">
          <Icon className="text-purple-300" size={26} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">
          {feature.title}
        </h3>

        {/* Desc */}
        <p className="text-gray-400 leading-relaxed">
          {feature.desc}
        </p>

        {/* Shine */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>
    </motion.div>
  );
}