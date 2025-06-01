"use client";
import React, { useState, useEffect } from "react";
import { Star, Heart, BookOpen, Sparkles, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const FloatingIcon = ({ icon: Icon, delay = 0, className = "" }) => (
    <div
      className={`absolute animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "3s",
      }}
    >
      <Icon className="w-8 h-8 text-white/20" />
    </div>
  );

  const scrollSlightlyDown = () => {
    window.scrollBy({
      top: 500, // You can tweak this to 100, 200, etc.
      behavior: "smooth",
    });
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Animated Radial Background Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Floating Icons */}
      <FloatingIcon icon={Star} delay={0} className="top-1/4 left-1/4" />
      <FloatingIcon icon={Heart} delay={1} className="top-1/3 right-1/4" />
      <FloatingIcon icon={BookOpen} delay={2} className="bottom-1/3 left-1/3" />
      <FloatingIcon icon={Sparkles} delay={0.5} className="top-1/2 right-1/3" />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Column */}
          <div
            className={`space-y-10 transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-wide">
                <span className="block">THE</span>
                <span className="block">LEARNING</span>
                <span className="block">CENTRE</span>
              </h2>

              <div className="space-y-4 text-white/90 text-lg">
                <p>
                  <strong>VISION:</strong> Inclusive learning for all.
                </p>
                <p>
                  <strong>MISSION:</strong> If I don't learn the way you teach,
                  then teach the way I learn.
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollSlightlyDown}
                className="mt-6 cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <ArrowDown className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
