import React from 'react';

const DynamicForm = ({ formData }) => {
  return (
    <div className="bg-[#21093D] text-white p-6 rounded-lg max-h-screen overflow-y-auto">
      {formData.map((field, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{field.label}</label>
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
  );
};

export default DynamicForm;
