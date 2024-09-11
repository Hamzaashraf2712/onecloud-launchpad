import { useState } from 'react';

const SidebarWithPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  // Handle cloud platform selection and trigger the popup
  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    setSelectedPlatform(platform);
    if (platform === 'Azure') {
      setIsPopupVisible(true);
    } else {
      setIsPopupVisible(false);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 h-screen p-5 text-white">
        <h1 className="text-xl font-bold">Project Details</h1>

        {/* Dropdown for Cloud Platform */}
        <div className="mt-4">
          <label>Select Cloud Platform</label>
          <select
            className="mt-2 block w-full p-2 bg-gray-700 border border-gray-600 rounded"
            onChange={handlePlatformChange}
          >
            <option value="">Please Select Cloud Platform</option>
            <option value="Azure">Azure</option>
            <option value="AWS">AWS</option>
            <option value="GCP">GCP</option>
          </select>
        </div>

        {/* Additional Fields Based on Selection */}
        {isPopupVisible && (
          <div className="mt-6 bg-gray-800 p-4 rounded">
            <h2 className="text-lg">Azure Details</h2>

            <div className="mt-4">
              <label>ADO Organization Name</label>
              <input
                type="text"
                className="block w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                placeholder="Enter ADO Organization Name"
              />
            </div>

            <div className="mt-4">
              <label>Project Name</label>
              <input
                type="text"
                className="block w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                placeholder="Enter Project Name"
              />
            </div>

            <div className="mt-4">
              <label>Repository Name</label>
              <input
                type="text"
                className="block w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                placeholder="Enter Repository Name"
              />
            </div>

            <div className="mt-4">
              <label>Personal Access Token (PAT)</label>
              <input
                type="password"
                className="block w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                placeholder="Enter PAT"
              />
            </div>

            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Connect
            </button>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-grow p-8 bg-gray-100">
        {/* The rest of your content goes here */}
        <h2>Welcome to the Cloud Project Dashboard</h2>
      </div>
    </div>
  );
};

export default SidebarWithPopup;
