import React, { useState, useEffect } from 'react';

const MainComponent = ({ cloudPlatform }) => {
  const [formData, setFormData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sliderValues, setSliderValues] = useState({});
  const [selectedDropdown, setSelectedDropdown] = useState({});
  const [subFormData, setSubFormData] = useState({});

  // Simulate a backend call to get form data
  useEffect(() => {
    const fetchFormData = async () => {
      let mockData = {};

      if (cloudPlatform === "Azure") {
        mockData = {
          title: "Azure Cloud Platform",
          fields: [
            { label: "Virtual Network Name", type: "text", placeholder: "Enter Virtual Network Name", name: "vnetName", required: true },
            { label: "Subscription Name", type: "text", placeholder: "Enter Subscription Name", name: "subscriptionName", required: true },
            { label: "Resource Group Name", type: "text", placeholder: "Enter Resource Group Name", name: "resourceGroupName", required: true },
            {
              label: "Location", type: "select", name: "location", options: ["East US", "West US", "Central US"], required: true,
              subForms: {
                "East US": [
                  { label: "East US Specific Field", type: "text", placeholder: "Enter value for East US", name: "eastUsField" }
                ],
                "West US": [
                  { label: "West US Specific Field", type: "text", placeholder: "Enter value for West US", name: "westUsField" }
                ],
                "Central US": [
                  { label: "Central US Specific Field", type: "text", placeholder: "Enter value for Central US", name: "centralUsField" }
                ],
              },
            },
            { label: "Enable Monitoring", type: "toggle", name: "enableMonitoring", required: false },
            { label: "CPU Limit", type: "slider", min: 1, max: 16, name: "cpuLimit", required: true },
          ],
          buttons: [
            { label: "Add Tags", action: "addTags" },
            { label: "Submit Data", action: "submitData" },
            { label: "Test API Call", action: "testApiCall" },
          ],
          knowledgeBase: {
            title: "Knowledge Base",
            content: `SQL Server on Azure VMs (SQL IaaS): SQL Server on Azure Virtual Machines (VM) falls under the industry term of Infrastructure-as-a-Service (IaaS) and allows full control over the SQL server instance and underlying OS. For more details, refer to the official Azure documentation.`,
            images: [
              "https://example.com/image1.jpg",
              "https://example.com/image2.jpg",
            ],
          },
        };
      } else if (cloudPlatform === "AWS") {
        mockData = {
          title: "AWS Cloud Platform",
          fields: [
            { label: "VPC Name", type: "text", placeholder: "Enter VPC Name", name: "vpcName", required: true },
            { label: "Account ID", type: "text", placeholder: "Enter Account ID", name: "accountId", required: true },
            { label: "Region", type: "select", options: ["us-east-1", "us-west-1", "eu-west-1"], name: "region", required: true },
            { label: "Enable Multi-Factor Authentication", type: "toggle", name: "mfa", required: false },
            { label: "Instance Limit", type: "slider", min: 1, max: 20, name: "instanceLimit", required: true },
          ],
          buttons: [
            { label: "Add Security Group", action: "addSecurityGroup" },
            { label: "Add Subnet", action: "addSubnet" },
            { label: "Submit Data", action: "submitData" },
            { label: "Test API Call", action: "testApiCall" },
          ],
          knowledgeBase: {
            title: "Knowledge Base",
            content: `AWS VPC: Amazon Virtual Private Cloud (VPC) is a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define. Learn more in the AWS documentation.`,
            images: [
              "https://example.com/aws1.jpg",
              "https://example.com/aws2.jpg",
            ],
          },
        };
      } else if (cloudPlatform === "GCP") {
        mockData = {
          title: "Google Cloud Platform",
          fields: [
            { label: "Project ID", type: "text", placeholder: "Enter Project ID", name: "projectId", required: true },
            { label: "Billing Account", type: "text", placeholder: "Enter Billing Account", name: "billingAccount", required: true },
            { label: "Region", type: "select", options: ["us-central1", "us-west1", "europe-west1"], name: "region", required: true },
            { label: "Enable Cloud Logging", type: "toggle", name: "cloudLogging", required: false },
            { label: "Memory Limit (GB)", type: "slider", min: 1, max: 64, name: "memoryLimit", required: true },
          ],
          buttons: [
            { label: "Add Firewall Rule", action: "addFirewallRule" },
            { label: "Add Subnet", action: "addSubnet" },
            { label: "Submit Data", action: "submitData" },
            { label: "Test API Call", action: "testApiCall" },
          ],
          knowledgeBase: {
            title: "Knowledge Base",
            content: `Google Cloud VPC: A Virtual Private Cloud (VPC) provides networking functionality to Compute Engine virtual machine (VM) instances, Kubernetes Engine (GKE) clusters, and other resources. For detailed guidance, refer to the Google Cloud documentation.`,
            images: [
              "https://example.com/gcp1.jpg",
              "https://example.com/gcp2.jpg",
            ],
          },
        };
      } else {
        mockData = {
          title: "Select Cloud Platform",
          fields: [],
          buttons: [],
          knowledgeBase: {
            title: "Knowledge Base",
            content: "No cloud platform selected. Please select a cloud platform to continue.",
            images: [],
          },
        };
      }

      setFormData(mockData);
      setIsLoaded(true);
    };

    fetchFormData();
  }, [cloudPlatform]);

  // Handle slider value change
  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setSliderValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input change for main form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle dropdown selection
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setSelectedDropdown((prev) => ({ ...prev, [name]: value }));
    // Reset subform data when location changes
    setSubFormData({});
  };

  // Handle sub-form input change
  const handleSubFormChange = (e) => {
    const { name, value } = e.target;
    setSubFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle button clicks
  const handleButtonClick = (action) => {
    switch(action) {
      case "addTags":
        alert("Tags added!");
        break;
      case "submitData":
        console.log("Submitting data...", { ...formData, subFormData });
        alert("Data submitted! Check console for details.");
        break;
      case "testApiCall":
        alert("API call simulated! Check console for request details.");
        console.log("Simulated API call with data:", { ...formData, subFormData });
        break;
      // Add cases for other buttons as needed
      default:
        break;
    }
  };

  return (
    <div className="bg-[#21093D] text-[#B5DAFF] grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:h-screen">
      {isLoaded && formData ? (
        <>
          {/* Form Section */}
          <div className="flex flex-col h-full pl-4">
            <h2 className="text-3xl font-bold mb-2 pt-12 text-center">{formData.title}</h2>

            {/* Dynamic Form */}
            <div className="pl-5 overflow-y-auto h-[70vh]">
              {formData.fields && formData.fields.length > 0 ? (
                formData.fields.map((field, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-lg font-semibold mb-1">{field.label}</label>
                    {field.type === "text" || field.type === "number" ? (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    ) : field.type === "select" ? (
                      <select
                        name={field.name}
                        onChange={(e) => { handleDropdownChange(e); }}
                        className="w-full p-2 border border-gray-300 rounded"
                      >
                        <option value="">Select...</option>
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === "toggle" ? (
                      <input
                        type="checkbox"
                        name={field.name}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                    ) : field.type === "slider" ? (
                      <>
                        <input
                          type="range"
                          min={field.min}
                          max={field.max}
                          name={field.name}
                          onChange={handleSliderChange}
                          className="w-full"
                        />
                        <span>{sliderValues[field.name] || field.min}</span>
                      </>
                    ) : null}

                    {/* Subform Rendering */}
                    {field.subForms && selectedDropdown[field.name] && (
                      <div className="mt-4 pl-4 border-l-2 border-gray-300">
                        {field.subForms[selectedDropdown[field.name]].map((subField, subIndex) => (
                          <div key={subIndex} className="mb-4">
                            <label className="block text-lg font-semibold mb-1">{subField.label}</label>
                            <input
                              type={subField.type}
                              name={subField.name}
                              placeholder={subField.placeholder}
                              onChange={handleSubFormChange}
                              className="w-full p-2 border border-gray-300 rounded"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No fields available.</p>
              )}

              {/* Buttons */}
              <div className="flex justify-center mt-6 space-x-4">
                {formData.buttons.map((button, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleButtonClick(button.action)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Knowledge Base Section */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{formData.knowledgeBase.title}</h2>
            <p className="mb-4">{formData.knowledgeBase.content}</p>
            {formData.knowledgeBase.images && formData.knowledgeBase.images.map((image, index) => (
              <img key={index} src={image} alt={`Knowledge Base Image ${index + 1}`} className="mb-2" />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MainComponent;
