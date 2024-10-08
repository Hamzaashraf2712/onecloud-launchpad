import { useState } from 'react';
import sidebarToggleIconUrl from '../svg/sidebar-toggle.svg'; // Path to the open sidebar SVG
import closeSidebarIconUrl from '../svg/close-sidebar.svg'; // Path to the close sidebar SVG
import ResourceTypeSelect from './ResourceTypeSelect'; // Adjust the path as necessary

const PopupModal = ({ cloudPlatform, setCloudPlatform }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar is closed by default
  const [showConnectButton, setShowConnectButton] = useState(false); // Manage visibility of connect button

  // Handle cloud platform selection and trigger the connect button
  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    setCloudPlatform(platform); // Use prop function to update global state

    // Update visibility of Connect button based on platform selection
    if (platform === 'Azure') {
      setShowConnectButton(true);
    } else {
      setShowConnectButton(false);
    }
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Open the popup
  const openPopup = () => {
    setIsPopupVisible(true);
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  // Copy function for Project ID
  const copyProjectId = () => {
    navigator.clipboard.writeText('RITM-2408070252-12'); // Replace with dynamic project ID if needed
    alert('Project ID copied to clipboard!');
  };

  return (
    <>
      {/* Thin Black Bar with Toggle Button */}
      {!isSidebarVisible && (
        <div className="fixed inset-y-0 left-0 w-10 bg-black flex items-center justify-center z-30">
          <button onClick={toggleSidebar}>
            <img src={sidebarToggleIconUrl} alt="Open Sidebar" className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 w-64 bg-gray-900 h-screen p-5 text-white shadow-lg z-40`}
      >
        <h1 className="text-xl font-bold">Project Details</h1>

        {/* Dropdown for Cloud Platform */}
        <div className="mt-4">
          {/* Customer Name */}
        <div className="mt-4">
          <label className="block text-sm">Customer Name</label>
          <p className="text-lg font-semibold">QIA</p>
        </div>

        {/* Project Name */}
        <div className="mt-4">
          <label className="block text-sm">Project Name</label>
          <p className="text-lg font-semibold">Cloud Hybrid Infrastructure</p>
        </div>

        {/* Project ID with Copy Button */}
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <label className="block text-sm">Project ID</label>
            <p className="text-lg font-semibold">RITM-2408070252-12</p>
          </div>
          <button
            className="ml-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
            onClick={copyProjectId}
          >
            Copy
          </button>
        </div>
          <label>Select Cloud Platform</label>
          <select
            className="mt-2 block w-full p-2 bg-gray-700 border border-gray-600 rounded"
            onChange={handlePlatformChange}
            value={cloudPlatform} // Set selected value based on prop
          >
            <option value="">Please Select Cloud Platform</option>
            <option value="Azure">Azure</option>
            <option value="AWS">AWS</option>
            <option value="GCP">GCP</option>
          </select>
        </div>

        

        {/* Button for connecting to Azure environment */}
        {cloudPlatform === 'Azure' && showConnectButton && (
          <><button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={openPopup}
          >
            Connect to Azure Environment
          </button><ResourceTypeSelect /></>

        )}

       

        {/* Button for closing sidebar */}
        <button
          className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
          onClick={toggleSidebar}
        >
          <img
            src={isSidebarVisible ? closeSidebarIconUrl : sidebarToggleIconUrl}
            alt={isSidebarVisible ? 'Close Sidebar' : 'Open Sidebar'}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Azure Project Details</h2>

            {/* Other popup inputs */}
            <div className="mb-4">
              <label>ADO Organization Name</label>
              <input
                type="text"
                className="block w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Enter ADO Organization Name"
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
    </>
  );
};

export default PopupModal;
