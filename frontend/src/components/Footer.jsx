import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side */}
        <h2 className="text-lg font-semibold tracking-wide">
          © {new Date().getFullYear()} MyWebsite — All Rights Reserved
        </h2>

        {/* Right Side */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a 
            href="#"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>

          <a 
            href="#"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </a>

          <a 
            href="#"
            className="hover:text-white transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
