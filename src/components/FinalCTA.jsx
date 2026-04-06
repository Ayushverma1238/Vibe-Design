import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
    return (
        <section className="relative py-36 px-6 bg-black text-center overflow-hidden">

            {/* 🌌 Background */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-black to-pink-900/30 blur-3xl"></div>

            {/* ✨ Floating Orbs */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-10 left-10 w-60 h-60 bg-purple-500 opacity-20 blur-[120px]"
            />
            <motion.div
                animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-20 blur-[120px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-3xl mx-auto"
            >

                {/* 🔥 Headline (EMOTIONAL) */}
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Stop working manually. <br />
                    <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        Let AI do it for you.
                    </span>
                </h2>

                {/* 💡 Subtext */}
                <p className="text-gray-400 mt-6 text-lg">
                    Build, deploy and scale your AI agents in minutes — not hours.
                </p>

                {/* 🚀 CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <MagneticButton>
                        🚀 Deploy Your First Agent
                    </MagneticButton>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="border border-white/10 cursor-pointer hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition"
                    >
                        View Documentation
                    </motion.button>
                </div>

                {/* 🧠 Trust line */}
                <p className="mt-4 text-sm text-gray-500">
                    No credit card required • Free forever plan
                </p>
            </motion.div>

            {/* ✨ Glow Ring Effect */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className="w-125 h-125 rounded-full border border-purple-500/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            {/* Divider */}
            <div className="mt-20 h-px bg-linear-to-r from-transparent via-white/20 to-transparent max-w-5xl mx-auto relative z-10"></div>
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
            whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-7 py-3 rounded-xl text-lg font-medium 
      bg-linear-to-r from-purple-500 to-pink-500  cursor-pointer
      shadow-lg transition"
        >
            {children}

            {/* Glow */}
            <span className="absolute inset-0 rounded-xl bg-purple-500/20 blur-lg opacity-0 hover:opacity-100 transition"></span>
        </motion.button>
    );
}