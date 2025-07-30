import React from "react";
import { Link } from "react-router-dom";
import Homebg from "../assets/Frame1.png";
import Navbar from "../components/Navbar";
import Logo from "../assets/WebLogo.png";
import Dashboard from "../assets/spacedashboard.png";

export default function HomePage() {
  return (
    <div className="bg-[#0B1120] text-white font-sans relative min-h-screen">
      {/* Navbar */}
      <div className="w-full">
        <Navbar
          logo={Logo}
          loginIcon={Dashboard}
          loginText="Login"
          navLinks={["Home", "Privacy Policy", "Terms & Condition", "Contact"]}
        />
      </div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-20 z-10 overflow-hidden">
        {/* Background Frame 1 ONLY in Hero Section */}
        <img
          src={Homebg}
          alt="Background Frame"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          loading="lazy"
        />
        <div className="relative z-10 mt-24 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#00AF9E]">AI Powered</span>
            <br /> Medical Analysis Assistant
          </h1>
          <p className="mt-4 text-lg max-w-xl text-gray-300">
            Advanced medical image analysis and personalized health insights powered by artificial intelligence.
          </p>
            <button
              onClick={() => window.location.href = "/personalinfo"}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#00AF9E] to-[#0945DF] rounded-lg font-semibold"
            >
              Start Analysis
            </button>
         
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#0B1120] to-[#0F172A] text-center">
        <h2 className="text-gray-300 text-sm mb-2">WHY CHOOSE</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00AF9E] to-[#0945DF]">
          Our AI Assistant
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {[
            "Advanced Analysis",
            "Expert Insights",
            "Secure & Private",
            "Interactive Chat",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-[#1E293B] rounded-xl p-6 text-left border border-[#334155] hover:shadow-lg transition"
            >
              <div className="text-cyan-400 mb-4 text-2xl">→</div>
              <h4 className="font-semibold text-lg mb-2">{title}</h4>
              <p className="text-sm text-gray-400">
                {title === "Advanced Analysis"
                  ? "Leverage state-of-the-art AI for in-depth medical image evaluation."
                  : title === "Expert Insights"
                  ? "Receive guidance and explanations from our AI trained on medical expertise."
                  : title === "Secure & Private"
                  ? "Your data is encrypted and handled with the utmost confidentiality."
                  : "Chat interactively to get answers and understand your results."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-r from-[#00AF9E] to-[#0945DF]">
        <h3 className="text-white text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-white text-sm mb-6">
          Experience the future of medical analysis with our assistant.
        </p>
        <Link to="/personalinfo">
          <button className="px-6 py-3 bg-white text-[#0B1120] rounded-lg font-semibold">
            Start Analysis
          </button>
        </Link>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-20 text-center bg-[#0F172A]">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00AF9E] to-[#0945DF] mb-10">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "Upload Image",
              desc: "Easily upload your medical images securely to our platform.",
            },
            {
              step: "AI Analysis",
              desc: "Our AI analyzes your images for key medical insights.",
            },
            {
              step: "Get Results",
              desc: "Receive clear, actionable results and recommendations.",
            },
            {
              step: "Interactive Chat",
              desc: "Ask questions and get explanations from our AI assistant.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 text-left border hover:border-cyan-400 transition ${
                i === 0 ? "border-cyan-400" : "border-[#334155]"
              }`}
            >
              <div className="text-cyan-400 mb-4 text-2xl">→</div>
              <h4 className="font-semibold text-lg mb-2">{item.step}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1120] px-6 md:px-20 py-10 border-t border-[#1E293B]">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            <span className="text-[#00AF9E] font-bold text-lg">Ai</span>Mentor
            <p className="mt-2 text-xs max-w-sm">
              Advanced medical image analysis and personalized health insights powered by artificial intelligence.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} AI Medical Assistant. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
