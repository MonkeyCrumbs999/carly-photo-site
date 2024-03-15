import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-12 bg-gray-300 rounded skeleton-shimmer"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-48 bg-gray-300 rounded skeleton-shimmer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
