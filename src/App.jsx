import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FinalCTA } from "./components/FinalCTA";
import Problem from "./components/Problem";
import AIDemo from "./components/AIDemo";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Workflow />
      <AIDemo />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}