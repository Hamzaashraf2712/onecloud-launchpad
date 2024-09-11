import { useState } from 'react';

const PopupModal = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cloudPlatform, setCloudPlatform] = useState('');

  // Handle cloud platform selection and trigger the popup
  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    setCloudPlatform(platform);
    if (platform === 'Azure') {
      setIsPopupVisible(true);
    } else {
      setIsPopupVisible(false);
    }
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
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
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-8 bg-gray-100">
        <h2>Welcome to the Cloud Project Dashboard</h2>

        {/* Popup Modal */}
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
              <h2 className="text-lg font-bold mb-4">Azure Project Details</h2>

              <div className="mb-4">
                <label>ADO Organization Name</label>
                <input
                  type="text"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter ADO Organization Name"
                />
              </div>

              <div className="mb-4">
                <label>Project Name</label>
                <input
                  type="text"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter Project Name"
                />
              </div>

              <div className="mb-4">
                <label>Repository Name</label>
                <input
                  type="text"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter Repository Name"
                />
              </div>

              <div className="mb-4">
                <label>Personal Access Token (PAT)</label>
                <input
                  type="password"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter PAT"
                />
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={closePopup}
                >
                  Connect
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
