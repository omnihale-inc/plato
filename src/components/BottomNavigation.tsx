import React from "react";
import Navigation from "./Navigation";

const BottomNavigation = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white px-10 border-t pb-6 border-gray-300">
      <Navigation />
    </div>
  );
};

export default BottomNavigation;
