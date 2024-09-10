// import React from "react";

// const Features = () => {
//   const features = [
//     {
//       title: "Multi-Cloud Management",
//       description:
//         "Centralize management of Azure, AWS, and GCP resources with a unified interface for efficient monitoring.",
//       image: "/images/OIF.jfif", // Add the path to your image
//     },
//     {
//       title: "Automated Deployments",
//       description:
//         "Leverage OneCloud Launchpad to automate the deployment of cloud resources, ensuring optimal performance, security, and cost-effectiveness with best practices.",
//       image: "/images/AutomatedDeployments.jpeg", // Add the path to your image
//     },
//     {
//       title: "Resource Configuration and Management",
//       description:
//         "Customize and configure cloud resources to fit project needs, including network architectures and compute/storage adjustments.",
//             image: "/images/ResourceConfigurationandManagement.jpg", // Add the path to your image
//     },
//     {
//       title: "Insights and Analytics",
//       description:
//         "Get insights with integrated analytics to track usage, monitor performance, and analyze costs across cloud platforms.",
//       image: "/images/InsightsandAnalytics.jfif", // Add the path to your image
//     },
//     {
//       title: "Security and Compliance",
//       description:
//         "Ensure compliance with industry standards using OneCloud Launchpad's robust security, including identity management, encryption, and network protection.",
//       image: "/images/SecurityandCompliance.jfif", // Add the path to your image
//     },
//     {
//       title: "Flexible and Scalable",
//       description:
//         "OneCloud Launchpad scales with your business, from startups to large enterprises, handling any number of resources while maintaining performance and usability.",
//       image: "/images/FlexibleandScalable.jfif", // Add the path to your image
//     },
//   ];

//   return (
//     <div className="bg-[#21093d] text-blue-200 py-16 px-8">
//       <h2 className="text-4xl text-blue-200 font-bold text-center mb-12">Features</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {features.map((feature, index) => (
//           <div key={index} className="text-center">
//             <img
//               src={feature.image}
//               alt={feature.title}
//               className="w-full h-40 object-cover mb-6"
//             />
//             <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
//             <p className="text-sm">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Multi-Cloud Management",
      description:
        "Centralize management of Azure, AWS, and GCP resources with a unified interface for efficient monitoring.",
      image: "/images/OIF.jfif", // Add the path to your image
    },
    {
      title: "Automated Deployments",
      description:
        "Leverage OneCloud Launchpad to automate the deployment of cloud resources, ensuring optimal performance, security, and cost-effectiveness with best practices.",
      image: "/images/AutomatedDeployments.jpeg", // Add the path to your image
    },
    {
      title: "Resource Configuration and Management",
      description:
        "Customize and configure cloud resources to fit project needs, including network architectures and compute/storage adjustments.",
      image: "/images/ResourceConfigurationandManagement.jpg", // Add the path to your image
    },
    {
      title: "Insights and Analytics",
      description:
        "Get insights with integrated analytics to track usage, monitor performance, and analyze costs across cloud platforms.",
      image: "/images/InsightsandAnalytics.jfif", // Add the path to your image
    },
    {
      title: "Security and Compliance",
      description:
        "Ensure compliance with industry standards using OneCloud Launchpad's robust security, including identity management, encryption, and network protection.",
      image: "/images/SecurityandCompliance.jfif", // Add the path to your image
    },
    {
      title: "Flexible and Scalable",
      description:
        "OneCloud Launchpad scales with your business, from startups to large enterprises, handling any number of resources while maintaining performance and usability.",
      image: "/images/FlexibleandScalable.jfif", // Add the path to your image
    },
  ];

  return (
    <div className="bg-[#21093d] text-blue-200 py-16 px-8">
      <h2 className="text-4xl text-blue-200 font-bold text-center mb-12">Features</h2>

      <div className="w-[70%] mx-auto grid grid-cols-1 gap-8">
      {/* First and second features - right one is wider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 text-center">
            <img
              src={features[0].image}
              alt={features[0].title}
              className="w-full h-60 mx-auto rounded-lg object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{features[0].title}</h3>
            <p className="text-sm">{features[0].description}</p>
          </div>
          <div className="md:col-span-2 text-center">
            <img
              src={features[1].image}
              alt={features[1].title}
              className="w-full h-60 rounded-lg object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{features[1].title}</h3>
            <p className="text-sm">{features[1].description}</p>
          </div>
        </div>

        {/* Third and fourth features - left one is wider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-center">
            <img
              src={features[2].image}
              alt={features[2].title}
              className="w-full h-60 rounded-lg object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{features[2].title}</h3>
            <p className="text-sm">{features[2].description}</p>
          </div>
          <div className="md:col-span-1 text-center">
            <img
              src={features[3].image}
              alt={features[3].title}
              className="w-full h-60 rounded-lg object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{features[3].title}</h3>
            <p className="text-sm">{features[3].description}</p>
          </div>
        </div>

        {/* Fifth and sixth features - right one is wider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 text-center">
            <img
              src={features[4].image}
              alt={features[4].title}
              className="w-full h-60 rounded-lg object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{features[4].title}</h3>
            <p className="text-sm">{features[4].description}</p>
          </div>
          <div className="md:col-span-2 text-center">
            <img
              src={features[5].image}
              alt={features[5].title}
              className="w-full h-60 rounded-lg object-cover mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">{features[5].title}</h3>
            <p className="text-sm">{features[5].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
