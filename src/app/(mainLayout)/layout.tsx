import Navbar from "@/components/general/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
