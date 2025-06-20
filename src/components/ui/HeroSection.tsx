// components/HeroSection.tsx
export default function HeroSection() {
    return (
      <section className="relative w-full min-h-screen bg-[#0B121F] overflow-hidden flex items-center justify-center text-center px-4">
        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] bg-cyan-400/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
  
        {/* Glow Underline */}
        <div className="absolute bottom-[30%] left-1/2 h-[2px] w-[60%] bg-cyan-300/40 blur-sm -translate-x-1/2 z-10" />
  
        {/* Main Content */}
        <div className="relative z-20 text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Clarity. Confidence. <br />
            <span className="text-cyan-400">Control.</span>
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Take control of your finances with smart budgeting, AI-powered insights, and real-time tracking.
          </p>
        </div>
      </section>
    );
  }
  