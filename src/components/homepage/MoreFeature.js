import React from "react";

// Main MoreFeature component
const MoreFeature = () => {
  return (
    <div className="bg-gradient-to-b from-purple-700 to-indigo-900 text-white py-10 px-4">
      <h2 className="text-center text-4xl font-bold mb-8">
        Why Choose OneCloud Launchpad?
      </h2>

      {/* Feature blocks */}
      <div className="space-y-8">
        <FeatureBlock
          imgSrc="cloud-image.jpg"
          title="Cross-Platform Compatibility"
          description="Integrate with Azure, AWS, and GCP, supporting diverse services and features."
          reverse={false}
        />
        <FeatureBlock
          imgSrc="user-interface.jpg"
          title="User-Friendly Interface"
          description="Experience a user-friendly interface simplifying cloud management for all skill levels."
          reverse={true} // Reverse layout
        />
        <FeatureBlock
          imgSrc="customization.jpg"
          title="Customization and Flexibility"
          description="Customize workflows with tailored templates and automation scripts for seamless integration."
          reverse={false}
        />
        <FeatureBlock
          imgSrc="updates.jpg"
          title="Continuous Updates and Support"
          description="Enjoy continuous updates with new features, enhancements, and latest cloud service support."
          reverse={true} // Reverse layout
        />
      </div>
    </div>
  );
};

// FeatureBlock component to handle each block
const FeatureBlock = ({ imgSrc, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center bg-purple-600 rounded-lg p-6 min-h-[150px] md:min-h-[200px]`}
    >
      <img src={imgSrc} alt={title} className="w-full md:w-1/2 h-32 md:h-full object-cover mb-4 md:mb-0 rounded" />
      <div className={`text-left md:w-1/2 ${reverse ? "md:ml-4" : "md:mr-4"}`}>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default MoreFeature;
