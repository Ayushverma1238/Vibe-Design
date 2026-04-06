import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import AIDemo from "./components/AIDemo";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden antialiased">

      {/* 🔝 NAVBAR */}
      <Navbar />

      {/* 🚀 HERO */}
      <Hero />

      {/* 😫 PROBLEM */}
      <SectionWrapper>
        <Problem />
      </SectionWrapper>

      {/* 😎 SOLUTION */}
      <SectionWrapper>
        <Solution />
      </SectionWrapper>

      {/* 💎 FEATURES */}
      <SectionWrapper>
        <Features />
      </SectionWrapper>

      {/* ⚙️ WORKFLOW */}
      <SectionWrapper>
        <Workflow />
      </SectionWrapper>

      {/* 🤖 AI DEMO */}
      <SectionWrapper>
        <AIDemo />
      </SectionWrapper>

      {/* 💰 PRICING */}
      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

      {/* 🚀 CTA */}
      <FinalCTA />

      {/* 🔻 FOOTER */}
      <Footer />
    </div>
  );
}

/* 🧩 SECTION WRAPPER */
function SectionWrapper({ children }) {
  return (
    <section className="relative border-t border-white/5 py-24">
      
      {/* ✨ divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>

      {/* 📦 container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}