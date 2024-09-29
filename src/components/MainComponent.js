import React, { useState, useEffect } from 'react';

const MainComponent = ({ cloudPlatform }) => {
  const [formData, setFormData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [sliderValues, setSliderValues] = useState({}); // To track slider values

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
            { label: "Location", type: "select", options: ["East US", "West US", "Central US"], name: "location", required: true },
            { label: "Enable Monitoring", type: "toggle", name: "enableMonitoring", required: false },
            { label: "CPU Limit", type: "slider", min: 1, max: 16, name: "cpuLimit", required: true },
          ],
          buttons: [
            { label: "Add Tags", action: "addTags" },
            { label: "Add Subnet", action: "addSubnet" },
          ],
          knowledgeBase: {
            title: "Knowledge Base",
            content: `SQL Server on Azure VMs (SQL IaaS): SQL Server on Azure Virtual
            Machines (VM) falls under the industry term of Infrastructure-as-a-Service
            (IaaS) and allows full control over the SQL server instance and underlying OS.`,
            images: [
              "https://example.com/image1.jpg", // Replace with actual image URLs
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
            content: `AWS VPC: Amazon Virtual Private Cloud (VPC) is a logically isolated section
            of the AWS cloud where you can launch AWS resources in a virtual network that you define.`,
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
            content: `Google Cloud VPC: A Virtual Private Cloud (VPC) provides networking functionality to
            Compute Engine virtual machine (VM) instances, Kubernetes Engine (GKE) clusters, and other resources.`,
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

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setSliderValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#21093D] text-[#B5DAFF] grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:h-screen">
      {isLoaded ? (
        <>
          {/* Form Section */}
          <div className="flex flex-col h-full pl-4"> {/* Added left padding here */}
            <h2 className="text-3xl font-bold mb-2 pt-12 text-center">{formData.title}</h2>

            {/* Dynamic Form */}
            <div className="pl-5 overflow-y-auto h-[70vh]">
              {formData.fields.length > 0 ? (
                formData.fields.map((field, index) => (
                  <div key={index} className="mb-3">
                    <label className="block mb-1">{field.label}</label>
                    {field.type === 'select' ? (
                      <select
                        className="w-full p-2 bg-purple-800 rounded-md text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        name={field.name}
                        required={field.required || false}
                      >
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
                        />
                        <span className="text-sm">{field.label}</span>
                      </label>
                    ) : field.type === 'slider' ? (
                      <div className="flex items-center space-x-3">
                        <input
                          type="range"
                          className="slider w-full h-2 bg-purple-600 rounded-full appearance-none focus:outline-none"
                          min={field.min}
                          max={field.max}
                          name={field.name}
                          value={sliderValues[field.name] || field.min}
                          onChange={handleSliderChange}
                          required={field.required || false}
                        />
                        <span className="slider-value text-white">
                          {sliderValues[field.name] || field.min} {/* Displaying the selected value */}
                        </span>
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        className="w-full p-2 bg-purple-800 rounded-md text-white border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder={field.placeholder || field.label}
                        name={field.name}
                        required={field.required || false}
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-red-500 text-center">No form fields available. Please select a cloud platform to continue.</p>
              )}
            </div>

            {/* Render Buttons after form fields */}
            {formData.buttons.length > 0 && (
              <div className="mt-4 flex flex-col space-y-2">
                {formData.buttons.map((button, index) => (
                  <button
                    key={index}
                    className="bg-purple-700 p-2 rounded-md w-full hover:bg-purple-800"
                    onClick={() => alert(`${button.action} clicked`)}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Knowledge Base Section */}
          <div className="bg-[#3C054D] text-[#AF9CDB] mt-10 md:mt-0 md:ml-10 px-6 py-10 overflow-auto rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">{formData.knowledgeBase.title}</h2>
            <p>{formData.knowledgeBase.content}</p>

            {/* Render images in knowledge base */}
            {formData.knowledgeBase.images && formData.knowledgeBase.images.length > 0 && (
              <div className="mt-4 space-y-4">
                {formData.knowledgeBase.images.map((image, index) => (
                  <img key={index} src={image} alt={`Knowledge Base ${index}`} className="w-full mb-2 rounded-md" />
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MainComponent;
