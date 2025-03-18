"use client";
import { useState } from "react"; // Corrected import for React
import CompleteAccount from "@/components/CompleteAccount";

const CompleteAccountPage = () => { // Changed function name to be PascalCase for consistency

  return (
    <div>
      <h1>Complete Account page</h1>
      <CompleteAccount />
    </div>
  );
};

export default CompleteAccountPage;