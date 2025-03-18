"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CompleteAccount() {
  const [verificationCode, setVerificationCode] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleVerify = () => {
    // Add email verification logic
    console.log("Verification code:", verificationCode);
  };

  const handlePayment = () => {
    // Add payment method setup
    console.log("Payment details:", paymentDetails);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Complete Account</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium mb-4">Email Verification</h3>
        <Input
          label="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Button onClick={handleVerify} className="mt-4">
          Verify Email
        </Button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-medium mb-4">Add Payment Method</h3>
        <Input
          label="Card/Payment Details"
          value={paymentDetails}
          onChange={(e) => setPaymentDetails(e.target.value)}
        />
        <Button onClick={handlePayment} className="mt-4">
          Save Payment Method
        </Button>
      </div>
    </div>
  );
}