import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceTypeSelect = () => {
    const [resourceTypes, setResourceTypes] = useState([]);
    const [selectedResourceType, setSelectedResourceType] = useState('');

    // Fetch resource types from API when component mounts
    useEffect(() => {
        const fetchResourceTypes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/resource-types');
                setResourceTypes(response.data); // Assuming the data is an array of resource types
            } catch (error) {
                console.error('Error fetching resource types:', error);
            }
        };

        fetchResourceTypes();
    }, []);

    const handleChange = async (e) => {
        const selectedType = e.target.value;
        setSelectedResourceType(selectedType);

        // Send POST request with the selected resource type
        try {
            const postResponse = await axios.post('http://127.0.0.1:5000/api/submit-resource', {
                resourceType: selectedType, // Send selected option in the POST body
            });
            
            console.log('POST response:', postResponse.data); // You can handle the response as needed
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    return (
        <div className="container mx-auto mt-10 py-4">
<label>Select Resource Type</label>
            <div className="inp my-4">
                <select
                    className="mt-2 block w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    id="resourceType"
                    name="resourceType"
                    value={selectedResourceType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Please Select Resource Type</option>
                    {resourceTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {selectedResourceType && (
                <p className="mt-4 text-gray-700">
                    You selected: <span className="font-semibold">{selectedResourceType}</span>
                </p>
            )}
        </div>
    );
};

export default ResourceTypeSelect;
