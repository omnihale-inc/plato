import React from "react";
import Navigation from "./Navigation";

const BottomNavigation = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white px-8 border-t pb-4 border-gray-300 z-50">
      <Navigation />
    </div>
  );
};

export default BottomNavigation;
