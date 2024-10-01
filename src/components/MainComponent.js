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
          buttons: [{ label: "Add Tags", action: "addTags" }],
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

  // Handle Add Tags button click (mock functionality)
  const handleAddTags = () => {
    alert("Tags added!");
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
                  <div key={index} className="mb-3">
                    <label className="block mb-1">{field.label}</label>
                    {field.type === 'select' ? (
                      <select
                        className="w-full p-2 bg-purple-800 rounded-md text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        name={field.name}
                        required={field.required || false}
                        onChange={handleDropdownChange}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'toggle' ? (
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="form-checkbox h-6 w-6 text-purple-600"
                          name={field.name}
                          onChange={handleInputChange}
                        />
                        <span className="text-white">{field.label}</span>
                      </label>
                    ) : field.type === 'slider' ? (
                      <input
                        type="range"
                        min={field.min}
                        max={field.max}
                        className="w-full h-2 bg-purple-700 rounded-lg appearance-none cursor-pointer"
                        name={field.name}
                        onChange={handleSliderChange}
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-2 bg-purple-800 rounded-md text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        name={field.name}
                        required={field.required || false}
                        onChange={handleInputChange}
                      />
                    )}
                    
                    {/* Render sub-form directly below the select dropdown */}
                    {field.type === 'select' && selectedDropdown[field.name] && (
                      <div className="pl-4">
                        {field.subForms[selectedDropdown[field.name]]?.map((subField, idx) => (
                          <div key={idx} className="mb-3">
                            <label className="block mb-1">{subField.label}</label>
                            <input
                              type={subField.type}
                              placeholder={subField.placeholder}
                              className="w-full p-2 bg-purple-800 rounded-md text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                              name={subField.name}
                              onChange={handleSubFormChange}
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
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center mt-4">
              {formData.buttons && formData.buttons.length > 0 &&
                formData.buttons.map((button, index) => (
                  <button
                    key={index}
                    onClick={button.action === "addTags" ? handleAddTags : undefined}
                    className="bg-purple-600 text-white p-2 rounded-md mx-2"
                  >
                    {button.label}
                  </button>
                ))}
            </div>
          </div>

          {/* Knowledge Base Section */}
          <div className="pl-4 h-full">
            <h3 className="text-2xl font-semibold mb-2">Knowledge Base</h3>
            <div className="bg-purple-800 p-4 rounded-md">
              <h4 className="text-xl font-bold mb-2">{formData.knowledgeBase.title}</h4>
              <p className="mb-2">{formData.knowledgeBase.content}</p>
              <div className="grid grid-cols-2 gap-2">
                {formData.knowledgeBase.images.map((img, index) => (
                  <img key={index} src={img} alt="Knowledge Base" className="rounded-md" />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MainComponent;
