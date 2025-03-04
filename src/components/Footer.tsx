
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-lessgo-600">Lessgo</span>
            </div>
            <p className="text-gray-600 text-sm">
              The simplest way to connect and plan events with friends and family.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-lessgo-600 text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Download</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Updates</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-lessgo-600 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Lessgo App. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for better planning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
