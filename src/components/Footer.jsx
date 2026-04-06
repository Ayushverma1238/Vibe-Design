import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 bg-black text-gray-400 overflow-hidden">

      {/* 🔝 Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

      {/* ✨ Floating Orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 w-60 h-60 bg-purple-500 opacity-10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-10 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* 🔝 Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-4 gap-12 py-20 border-b border-white/10"
        >

          {/* 🧠 Brand */}
          <div>
            <h2 className="text-white text-xl font-semibold">
              <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                AgentForge
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed">
              Build and deploy autonomous AI agents that work across your tools.
            </p>

            {/* 🔗 Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaGithub, FaTwitter, FaLinkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.3,
                    rotate: 8,
                    boxShadow: "0px 0px 15px rgba(168,85,247,0.6)",
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* 📂 Links */}
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
              <h3 className="text-white text-sm font-medium mb-4">
                {section.title}
              </h3>

              <ul className="space-y-3 text-sm">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative w-fit cursor-pointer group flex items-center gap-2"
                  >
                    {/* Dot */}
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-purple-400 transition"></span>

                    {/* Text */}
                    <span className="transition group-hover:text-white">
                      {item}
                    </span>

                    {/* Animated underline */}
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
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
          className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm"
        >
          <p>
            © {new Date().getFullYear()} AgentForge. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <span className="cursor-pointer transition hover:text-white flex items-center gap-2">
              <FaEnvelope size={14} /> Contact
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