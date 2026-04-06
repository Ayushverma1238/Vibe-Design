import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect to explore AI agents",
    features: ["Basic AI agents", "Limited automation", "Community support"],
  },
  {
    name: "Pro",
    price: "₹999",
    duration: "/month",
    description: "Best for builders & startups",
    features: [
      "Advanced AI agents",
      "Unlimited automation",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scale with full control",
    features: [
      "Custom AI solutions",
      "Dedicated support",
      "Enterprise security",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative py-36 px-6 bg-black overflow-hidden">

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

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Simple{" "}
          <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Pricing
          </span>
        </motion.h2>

        <p className="text-gray-400 mt-4 text-lg">
          Start free. Upgrade when you scale.
        </p>

        {/* 💎 Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className={`relative p-px rounded-2xl group ${
                plan.highlight
                  ? "bg-linear-to-r from-purple-500 via-pink-500 to-purple-500"
                  : "bg-white/10"
              }`}
            >
              {/* ✨ Animated border shine */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-8 h-full">

                {/* ⭐ Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Plan */}
                <h3 className="text-xl font-semibold">{plan.name}</h3>

                {/* Price */}
                <div className="mt-4 flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.duration && (
                    <span className="text-gray-400 text-sm">
                      {plan.duration}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 mt-2 text-sm">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-3 text-sm text-left">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: plan.highlight
                      ? "0px 0px 25px rgba(168,85,247,0.6)"
                      : "none",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-10 w-full py-3 rounded-xl font-medium transition ${
                    plan.highlight
                      ? "bg-linear-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {plan.highlight ? "Start Free Trial" : "Get Started"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}