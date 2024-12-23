import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const NextProjectSection = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div>
      {/* Main Section */}
      <section className="bg-black text-white py-16 min-h-screen flex flex-col justify-center">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 max-w-2xl px-4">
            Create your next project today!
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Create New Project Button */}
            <button 
              onClick={() => navigate('/create-new-project')}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded shadow"
            >
              Create new project
            </button>

            {/* Go to My Project Button */}
            <button 
              onClick={() => navigate('/validate-project')}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded shadow"
            >
              Go to my project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextProjectSection;
