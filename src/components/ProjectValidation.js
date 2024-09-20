import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectValidation = ({ setIsAuth }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleValidation = (e) => {
    e.preventDefault();
    // Simulate project validation logic
    setIsAuth(true); // Set isAuth to true after validation
    navigate('/dashboard'); // Redirect to dashboard
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#3D094D] ">
      <h1 className="text-4xl font-bold text-[#AF9CDB] mb-8">Project Validation</h1>
      
      <div className="bg-black bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-4xl">
      <form className="grid grid-cols-2 gap-4">
          {/* Left side fields */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Customer Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Project Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Project Owner</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Project Team</label>
            <input
              type="text"
              placeholder="Your Team name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Project ID</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Cost Center</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-red-500"
            />
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button 
            onClick={handleValidation} 
            className="px-8 py-3 rounded-lg bg-[#3D094D] hover:bg-[#AF9CDB] text-white font-medium"
          >
            Submit Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectValidation;
