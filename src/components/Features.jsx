// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useRef } from "react";
// import { Bot, Workflow, Plug } from "lucide-react";

// const features = [
//     {
//         title: "Autonomous Workflows",
//         desc: "Agents complete tasks end-to-end without manual intervention",
//         icon: Workflow,
//     },
//     {
//         title: "Multi-tool Integration",
//         desc: "Connect Gmail, Slack, Notion and Notion",
//         icon: Plug,
//     },
//     {
//         title: "Custom AI Agents",
//         desc: "Build agents tailored to your needs",
//         icon: Bot,
//     },
// ];

// export default function Features() {
//     return (
//         <section className="relative py-32 px-6 bg-black overflow-hidden">

//             {/* 🌌 Animated Gradient Background */}
//             <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

//             {/* ✨ Floating Glow Orbs */}
//             <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] animate-pulse"></div>
//             <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 opacity-20 blur-[120px] animate-pulse"></div>

//             {/* Heading */}
//             <motion.div
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-center max-w-3xl mx-auto relative z-10"
//             >
//                 <h2 className="text-5xl font-bold leading-tight">
//                     Next-Gen{" "}
//                     <span className="bg-linear-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text animate-pulse">
//                         AI Capabilities
//                     </span>
//                 </h2>

//                 <p className="text-gray-400 mt-6 text-lg">
//                     Build intelligent agents that think, act and execute across your entire digital workflow.
//                 </p>
//             </motion.div>

//             {/* Cards */}
//             <div className="mt-24 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
//                 {features.map((f, i) => (
//                     <FeatureCard key={i} feature={f} index={i} />
//                 ))}
//             </div>
//         </section>
//     );
// }

// function FeatureCard({ feature, index }) {
//     const ref = useRef(null);

//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
//     const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

//     function handleMouseMove(e) {
//         const rect = ref.current.getBoundingClientRect();
//         mouseX.set(e.clientX - rect.left);
//         mouseY.set(e.clientY - rect.top);
//     }

//     const Icon = feature.icon;

//     return (
//         <motion.div
//             ref={ref}
//             onMouseMove={handleMouseMove}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.8 }}
//             whileHover={{ scale: 1.07 }}
//             className="relative rounded-2xl p-px bg-linear-to-br from-white/20 to-transparent group"
//         >
//             {/* 🔥 Spotlight Effect */}
//             <motion.div
//                 className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
//                 style={{
//                     background: `radial-gradient(300px circle at ${springX}px ${springY}px, rgba(168,85,247,0.25), transparent 60%)`,
//                 }}
//             />

//             {/* Card */}
//             <div className="relative h-full w-full rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 overflow-hidden">

//                 {/* Animated Border Glow */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-transparent blur-xl"></div>

//                 {/* Icon */}
//                 <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20 mb-6">
//                     <Icon className="text-purple-300" size={26} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold mb-3">
//                     {feature.title}
//                 </h3>

//                 {/* Desc */}
//                 <p className="text-gray-400 leading-relaxed">
//                     {feature.desc}
//                 </p>

//                 {/* Bottom Shine Effect */}
//                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
//             </div>
//         </motion.div>
//     );
// }












import { motion } from "framer-motion";
import { Bot, Plug, Workflow } from "lucide-react";

const features = [
  {
    title: "Autonomous Workflows",
    desc: "Agents complete tasks end-to-end without manual work",
    icon: Workflow,
  },
  {
    title: "Multi-tool Integration",
    desc: "Connect Gmail, Slack, Notion seamlessly",
    icon: Plug,
  },
  {
    title: "Custom AI Agents",
    desc: "Build agents tailored to your needs",
    icon: Bot,
  },
];

export default function Features() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      {/* 🔝 TOP BLEND */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/20 to-transparent"></div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

      <div className="relative z-10">

        {/* 🔥 STORY MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-purple-400 text-sm mb-2">
            From chaos to clarity
          </p>

          <h2 className="text-4xl font-semibold">
            AgentForge brings everything together
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg mb-4">
                  <Icon className="text-purple-400" size={22} />
                </div>

                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-400 mt-2">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}