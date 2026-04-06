import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="relative px-6 pb-10 bg-black text-gray-400 overflow-hidden">

            {/* 🔝 Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/80"></div>

            {/* 🌌 Background */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

            {/* ✨ Glow Orbs */}
            <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500 opacity-10 blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-10 blur-[120px]"></div>

            <div className="relative max-w-6xl mx-auto z-10">

                {/* 🔝 Top */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-4 gap-10 py-16 border-b border-white/10"
                >

                    {/* Brand */}
                    <div>
                        <h2 className="text-white text-lg font-semibold">
                            <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                                AgentForge
                            </span>
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed">
                            Build and deploy autonomous AI agents that work across your tools.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            {[FaGithub, FaTwitter, FaLinkedin].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition"
                                >
                                    <Icon size={18} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {[
                        {
                            title: "Product",
                            items: ["Features", "Marketplace", "Pricing"],
                        },
                        {
                            title: "Company",
                            items: ["About", "Careers", "Contact"],
                        },
                        {
                            title: "Resources",
                            items: ["Docs", "API", "Support"],
                        },
                    ].map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="text-white text-sm font-medium mb-3">
                                {section.title}
                            </h3>

                            <ul className="space-y-2 text-sm">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="relative w-fit cursor-pointer text-gray-400 group flex items-center gap-2">

                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-white transition"></span>

                                        <span className="transition group-hover:text-white">
                                            {item}
                                        </span>

                                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></span>

                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* 🔽 Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm"
                >
                    <p>
                        © {new Date().getFullYear()} AgentForge. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 items-center">
                        <span className="cursor-pointer transition hover:text-white flex items-center gap-1">
                            <MdEmail size={16} /> Contact
                        </span>
                        {["Privacy", "Terms"].map((item, i) => (
                            <span
                                key={i}
                                className="cursor-pointer transition hover:text-white"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}