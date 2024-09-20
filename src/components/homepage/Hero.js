import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <section 
      className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" 
      style={{ backgroundImage: 'url("/images/Hero.jpg")' }} // Background image
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to OneCloud Launchpad
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          The OneCloud Launchpad is a strategic tool that simplifies cloud management, allowing businesses to focus on innovation and value creation. It streamlines the deployment and management of cloud infrastructure across Azure, AWS, and GCP, offering a seamless, efficient, and secure experience for IT professionals, developers, and cloud architects.
        </p>
        {/* "Get Started" Button routes to project creation */}
        <button 
          onClick={() => navigate('/create-new-project')}
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
