import React from 'react';

const ProjectCreationRequest = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#21093D]">
      <h1 className="text-4xl font-bold text-[#B5DAFF] mb-8">Project Creation Request</h1>
      
      <div className="bg-black bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <form className="grid grid-cols-2 gap-4">
          {/* Left side fields */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Customer Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Project Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Project Owner</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Project Team</label>
            <input
              type="text"
              placeholder="Your Team name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Cost Center</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Environment</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Description field spanning both columns */}
          <div className="col-span-2">
            <label className="block text-white text-sm font-medium mb-2">Description</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-[#21093D] hover:bg-[#B5DAFF] text-white font-medium transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreationRequest;
