import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-primary border-solid h-20 w-20h-20"></div>
    </div>
  );
};

export default Loader;
