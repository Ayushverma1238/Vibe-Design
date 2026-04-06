import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">

                {/* 🔥 Logo */}
                <motion.h1
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold tracking-wide cursor-pointer"
                >
                    <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        AgentForge
                    </span>
                </motion.h1>

                {/* 🔗 Nav Links */}
                <div className="hidden md:flex gap-8 text-gray-300">
                    {["Features", "Marketplace", "Pricing"].map((item, i) => (
                        <NavItem key={i} label={item} />
                    ))}
                </div>

                {/* 🚀 CTA */}
                <MagneticButton>
                    Deploy Agent
                </MagneticButton>
            </div>
        </motion.nav>
    );
}

function NavItem({ label }) {
    return (
        <motion.a
            href="#"
            className="relative text-sm font-medium cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
        >
            {label}

            {/* Animated underline */}
            <motion.span
                variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-purple-400 to-pink-500"
            />
        </motion.a>
    );
}

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

        x.set(dx * 0.2);
        y.set(dy * 0.2);
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
            whileHover={{ scale: 1.05 }}
            className="relative px-5 cursor-pointer py-2 rounded-lg font-medium text-sm bg-linear-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-purple-500/40 transition"
        >
            {children}

            {/* Glow */}
            <span className="absolute inset-0 rounded-lg bg-purple-500/20 blur-lg opacity-0 hover:opacity-100 transition"></span>
        </motion.button>
    );
}