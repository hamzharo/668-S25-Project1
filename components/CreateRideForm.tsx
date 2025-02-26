"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreateRideForm = () => {
  const [ride, setRide] = useState({
    departureCity: "",
    destination: "",
    departureTime: "",
    fare: "",
    luggage: "",
    smoking: false,
    extraStops: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setRide((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Ride Created:", ride);
    alert("Your ride has been created!");
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Create a Ride</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Departure City</Label>
          <Input name="departureCity" value={ride.departureCity} onChange={handleChange} required />
        </div>
        <div>
          <Label>Destination</Label>
          <Input name="destination" value={ride.destination} onChange={handleChange} required />
        </div>
        <div>
          <Label>Departure Time</Label>
          <Input type="datetime-local" name="departureTime" value={ride.departureTime} onChange={handleChange} required />
        </div>
        <div>
          <Label>Fare</Label>
          <Input type="number" name="fare" value={ride.fare} onChange={handleChange} />
        </div>
        <div>
          <Label>Luggage Allowance</Label>
          <Textarea name="luggage" value={ride.luggage} onChange={handleChange} />
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Create Ride
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateRideForm;
