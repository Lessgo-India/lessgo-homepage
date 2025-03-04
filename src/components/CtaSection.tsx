
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-lessgo-50 via-white to-lessgo-100/50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-lessgo-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-lessgo-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-display">
            Ready to simplify your <span className="text-gradient">planning</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying a more organized social life with Lessgo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-lessgo-500 hover:bg-lessgo-600 text-white w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            
            <Button size="lg" variant="outline" className="border-lessgo-200 text-lessgo-700 hover:bg-lessgo-50 w-full sm:w-auto">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-lessgo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-lessgo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free basic version</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-lessgo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
