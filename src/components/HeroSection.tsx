
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation on load
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-lessgo-50/50 to-transparent -z-10" />
      
      {/* Abstract shape */}
      <div className="absolute top-40 right-0 w-[600px] h-[600px] rounded-full bg-lessgo-100/30 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Left Content */}
          <div className="lg:w-[55%] max-w-2xl text-center lg:text-left animate-on-scroll">
            <Badge variant="secondary" className="mb-4 px-3 py-1 bg-lessgo-100 text-lessgo-700 hover:bg-lessgo-100">
              The simplest way to connect
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 font-display">
              Experience a new way to <span className="text-gradient">plan</span> your life
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Lessgo helps you organize meetups, events, and outings with friends and family—all in one beautiful, intuitive app.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-lessgo-500 hover:bg-lessgo-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-lessgo-200 text-lessgo-700 hover:bg-lessgo-50">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-lessgo-100 flex items-center justify-center text-xs font-semibold text-lessgo-700">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">4,000+</span> satisfied users
              </p>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div 
            ref={phoneRef} 
            className="lg:w-[45%] flex justify-center lg:justify-end animate-on-scroll"
          >
            <div className="relative w-72 md:w-80">
              {/* Phone frame */}
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-gray-800 bg-gray-800 animate-float">
                {/* Phone screen content */}
                <div className="aspect-[9/19.5] bg-white overflow-hidden">
                  {/* Add phone screenshot image here */}
                  <div className="w-full h-full bg-gradient-to-b from-lessgo-100 to-white flex items-center justify-center">
                    <div className="text-center px-4">
                      <h3 className="text-xl font-semibold mb-2 text-lessgo-700">Lessgo</h3>
                      <p className="text-sm text-gray-500">Your app screenshot will appear here</p>
                    </div>
                  </div>
                </div>
                {/* Phone home button */}
                <div className="absolute bottom-1 inset-x-0 mx-auto w-16 h-1 bg-gray-600 rounded-full"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-16 w-16 h-16 bg-lessgo-300 rounded-full blur-xl opacity-70 animate-pulse-subtle"></div>
              <div className="absolute bottom-1/3 -right-8 w-20 h-20 bg-lessgo-200 rounded-full blur-xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
