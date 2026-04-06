import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "For individuals getting started",
    features: ["Basic AI agents", "Limited automation", "Community support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹999",
    duration: "/month",
    description: "For startups and professionals",
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
    description: "For large organizations",
    features: [
      "Custom AI solutions",
      "Dedicated support",
      "Enterprise security",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-black to-pink-900/20 blur-3xl"></div>

      {/* ✨ Glow Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-10 blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 opacity-10 blur-[120px]"></div>

      <div className="relative z-10">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">
            Simple{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Pricing
            </span>
          </h2>
          <p className="text-gray-400 mt-3">
            Choose a plan that grows with your AI workflows
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-xl border p-8 transition-all duration-300
                ${
                  plan.highlight
                    ? "border-purple-500/40 bg-purple-500/5"
                    : "border-white/10 bg-white/2"
                }`}
            >
              {plan.highlight && (
                <span className="text-xs font-medium text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="mt-4 text-lg font-medium">{plan.name}</h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{plan.price}</span>
                {plan.duration && (
                  <span className="text-gray-400 text-sm">
                    {plan.duration}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm mt-2">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-2.5 rounded-lg text-sm font-medium transition
                  ${
                    plan.highlight
                      ? "bg-linear-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}