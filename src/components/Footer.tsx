import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="bg-primary text-white text-s">
    <div className="max-w-7xl mx-auto pt-8 pb-8 text-center">
      <p className="text-white font-exo2">
        Enhance recovery through mitochondria.
      </p>
    </div>
    <div className="border-t border-gray-500 pt-4 pb-6 text-xs text-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <div>
          © {new Date().getFullYear()} MitoPulse. All rights reserved.
        </div>
        <div className="flex items-center divide-x divide-gray-300">
          <Link to="/privacy-policy" className="pr-3 hover:text-accent">Privacy Policy</Link>
          <Link to="/terms-of-service" className="px-3 hover:text-accent">Terms of Service</Link>
          <Link to="/cookie-policy" className="pl-3 hover:text-accent">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
