import React, { useState } from 'react';

const CloudPlatformPopup = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handlePlatformChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPlatform(selectedValue);
    if (selectedValue === 'azure') {
      setShowPopup(true); // Show popup when Azure is selected
    } else {
      setShowPopup(false); // Hide popup for other options
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Main Dropdown */}
      <div className="w-full max-w-xs mb-4">
        <label className="block text-sm font-medium text-white">Select Cloud Platform</label>
        <select
          value={selectedPlatform}
          onChange={handlePlatformChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Please Select Cloud Platform</option>
          <option value="azure">Azure</option>
          <option value="aws">AWS</option>
          <option value="gcp">Google Cloud</option>
        </select>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <button
              className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Azure Cloud Configuration</h2>
            <div className="space-y-4">
              {/* ADO Organization Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">ADO Organization Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter ADO Organization Name"
                />
              </div>

              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Project Name"
                />
              </div>

              {/* Repository Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Repository Name</label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Repository Name"
                />
              </div>

              {/* Personal Access Token */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Personal Access Token (PAT)</label>
                <input
                  type="password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter PAT"
                />
              </div>

              {/* Connect Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudPlatformPopup;
