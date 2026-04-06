import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 md:pt-32 px-6 bg-black overflow-hidden"
    >
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-black to-pink-900/30 blur-3xl"></div>

      {/* ✨ Animated Glow Orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 opacity-20 blur-[120px]"
      />

      {/* 🔥 MAIN GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT */}
        <div className="text-left">
          
          {/* 🚀 Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20"
          >
            🚀 AI Agents are the future
          </motion.div>

          {/* 🧠 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Deploy Autonomous AI Agents <br />
            <span className="bg-linear-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text animate-gradient">
              That Work Across Your Tools
            </span>
          </motion.h1>

          {/* 📄 Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 text-lg max-w-xl"
          >
            Automate research, coding, scheduling and workflows with intelligent
            agents connected to Gmail, Slack and Notion.
          </motion.p>

          {/* 🎯 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <MagneticButton>
              Deploy Your First Agent Free
            </MagneticButton>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border cursor-pointer border-white/20 px-6 py-3 rounded-xl text-lg hover:bg-white/10 transition"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* 👇 Trust line */}
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • Free forever plan
          </p>
        </div>

        {/* RIGHT (3D IMAGE) */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative flex justify-center perspective-1000"
        >
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-purple-500 blur-[120px] opacity-30"></div>

          {/* Image */}
          <motion.img
            src="../ai-agent.png"
            alt="AI Agent"
            className="relative w-80 md:w-105 animate-float"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* 🧲 Magnetic Button */
function MagneticButton({ children }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * 0.3);
    y.set(dy * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 rounded-xl text-lg font-medium 
      bg-linear-to-r from-purple-500 to-pink-500 cursor-pointer 
      shadow-lg hover:shadow-purple-500/30 transition"
    >
      {children}

      {/* Glow */}
      <span className="absolute inset-0 rounded-xl bg-purple-500/20 blur-lg opacity-0 hover:opacity-100 transition"></span>
    </motion.button>
  );
}