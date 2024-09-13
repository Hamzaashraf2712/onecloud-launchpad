import React, { useState, useEffect } from 'react';

const MainComponent = () => {
  const [formData, setFormData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a backend call to get form data
  useEffect(() => {
    const fetchFormData = async () => {
      const mockData = {
        title: "Azure Cloud Platform",
        fields: [
          { label: "Virtual Network Name", type: "text", placeholder: "Enter Virtual Network Name", name: "vnetName", required: true },
          { label: "Subscription Name", type: "text", placeholder: "Enter Subscription Name", name: "subscriptionName", required: true },
          { label: "Resource Group Name", type: "text", placeholder: "Enter Resource Group Name", name: "resourceGroupName", required: true },
          { label: "Location", type: "select", options: ["East US", "West US", "Central US"], name: "location", required: true },
          { label: "Username", type: "text", placeholder: "Enter Username", name: "username", required: true },
          { label: "Address Space", type: "text", placeholder: "Enter Address Space", name: "addressSpace", required: true },
        ],
        buttons: [
          { label: "Add Tags", action: "addTags" },
          { label: "Add Subnet", action: "addSubnet" },
        ],
        knowledgeBase: {
          title: "Knowledge Base",
          content: `SQL Server on Azure VMs (SQL IaaS): SQL Server on Azure Virtual
          Machines (VM) falls under the industry term of Infrastructure-as-a-Service
          (IaaS) and allows full control over the SQL server instance and underlying OS.
          Ideal for migrating SQL Server workloads to the cloud without needing to manage
          any underlying hardware.
          Naming Requirements:
          Must be between 1 and 64 characters in length.
          Can contain letters, numbers, and hyphens.
          Must start with a letter or number, and end with a letter or number.
          Cannot contain consecutive hyphens.`,
        },
      };

      setFormData(mockData);
      setIsLoaded(true);
    };

    fetchFormData();
  }, []);

  return (
    <div className="bg-[#21093D] text-[#B5DAFF] grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:h-screen">
      {isLoaded ? (
        <>
          {/* Form Section */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold mb-2 pt-10 text-center">{formData.title}</h2>

            {/* Dynamic Form */}
            <div className="bg-[#21093D] text-white p-4 rounded-lg max-h-screen overflow-y-auto">
              {formData.fields.map((field, index) => (
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
              ))}
            </div>

            {/* Render Buttons after form fields */}
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
          </div>

          {/* Knowledge Base Section */}
          <div className="bg-[#3C054D] text-[#AF9CDB] p-4 rounded-lg flex flex-col justify-between h-full">
            <h2 className="text-3xl mb-2 font-bold text-center pt-6">Knowledge Base</h2>
            <p className="text-lg h-[90%] overflow-y-auto">
              {formData.knowledgeBase.content}
            </p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MainComponent;
