
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-lessgo-600 dark:text-lessgo-400">Lessgo</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-lessgo-600 transition-colors dark:text-gray-300 dark:hover:text-lessgo-400">
              Features
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-lessgo-600 transition-colors dark:text-gray-300 dark:hover:text-lessgo-400">
              FAQ
            </a>
            <ThemeToggle />
            <Button size="sm" className="bg-lessgo-500 hover:bg-lessgo-600 text-white dark:bg-lessgo-600 dark:hover:bg-lessgo-500">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[62px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md transition-all duration-300 ease-in-out z-40 shadow-lg",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="block py-2 text-base font-medium text-gray-700 hover:text-lessgo-600 dark:text-gray-300 dark:hover:text-lessgo-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#faq" 
            className="block py-2 text-base font-medium text-gray-700 hover:text-lessgo-600 dark:text-gray-300 dark:hover:text-lessgo-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <Button className="w-full bg-lessgo-500 hover:bg-lessgo-600 text-white dark:bg-lessgo-600 dark:hover:bg-lessgo-500">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
