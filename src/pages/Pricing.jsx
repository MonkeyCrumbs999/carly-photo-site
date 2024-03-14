import React from "react";
import Button from "../components/common/Button";
import { motion } from "framer-motion";

const Pricing = () => {
  const packages = [
    {
      name: "Singular Portraits",
      price: "$250",
      features: [
        "Choice of outdoor or studio setting",
        "Professional photo editing",
        "Online gallery access",
      ],
    },
    {
      name: "Group Portraits",
      price: "$300",
      features: [
        "Outdoor or studio settings",
        "Up to 5 subjects",
        "Professional photo editing",
        "Online gallery access",
      ],
    },
    {
      name: "Equine/Other Animal Photos (natural background)",
      price: "$250",
      features: [
        "Natural outdoor settings",
        "Professional photo editing",
        "Online gallery access",
      ],
    },
    {
      name: "Equine/Other Animal Photos (black background)",
      price: "$350",
      features: [
        "Studio-quality black background",
        "Professional photo editing",
        "Online gallery access",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-24 py-8 md:py-2"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col"
            >
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {pkg.name}
                </h2>
                <p className="text-4xl font-bold text-[#987671] mb-4">
                  {pkg.price}
                </p>
                <ul className="text-gray-600 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto text-center">
                <Button to="/contact" className="w-full justify-center">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
