import React from "react";
import Community from "@/components/community/communityPage";
import Navbar from "@/components/ui/Navbar";

export const page = () => {
  return (
    <div>
      <Navbar />
      <Community />
    </div>
  );
};

export default page;
