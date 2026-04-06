import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-28 px-6 bg-black text-center overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-black to-pink-900/30 blur-3xl"></div>

      {/* ✨ Glow Orbs */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500 opacity-15 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-15 blur-[120px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Start building with{" "}
          <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            AgentForge
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 mt-4 text-lg">
          Deploy your first AI agent in minutes and automate your workflows effortlessly.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Deploy Your First Agent
          </button>

          <button className="border border-white/10 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition">
            View Documentation
          </button>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="mt-16 h-px bg-white/10 max-w-5xl mx-auto relative z-10"></div>
    </section>
  );
}