import React, { useState, useEffect } from 'react';
import DynamicForm from './DynamicForm';

const MainComponent = () => {
  const [formData, setFormData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate a backend call to get form data
  useEffect(() => {
    // Here, you would replace the mockData with an actual API call
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-purple-900 text-white">
      {isLoaded ? (
        <>
          {/* Form Section */}
          <div>
            <h2 className="text-xl mb-4">{formData.title}</h2>
            <DynamicForm formData={formData.fields} />
            {/* Render buttons */}
            {formData.buttons.map((button, index) => (
              <button
                key={index}
                className="bg-purple-700 p-2 rounded-md w-full mt-2"
                onClick={() => alert(`${button.action} clicked`)}
              >
                {button.label}
              </button>
            ))}
          </div>

          {/* Knowledge Base Section */}
          <div className="bg-purple-800 p-6 rounded-lg">
            <h2 className="text-xl mb-4">{formData.knowledgeBase.title}</h2>
            <p className="text-sm">
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
