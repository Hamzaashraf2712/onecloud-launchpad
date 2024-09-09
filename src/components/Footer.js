import React from "react";

const Footer = () => {
  return (
    <footer className="font-inter bg-black text-gray-400 py-6 md:py-8">
      <div className="border-t border-gray-700 pt-6 md:pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
          <span className="text-sm md:text-base">© OneCloud. 2023</span>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0 text-sm md:text-base">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Contact Us</a>
            <a href="#" className="hover:text-white">Careers</a>
            <a href="#" className="hover:text-white">Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
