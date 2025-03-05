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
    availableSeats: "",
    fare: "",
    luggage: "",
    smoking: false,
    extraStops: "",
    requiresConfirmation: true,
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
          <Label>Departure City*</Label>
          <Input name="departureCity" value={ride.departureCity} onChange={handleChange} required />
        </div>
        <div>
          <Label>Destination*</Label>
          <Input name="destination" value={ride.destination} onChange={handleChange} required />
        </div>
        <div>
          <Label>Departure Time*</Label>
          <Input type="datetime-local" name="departureTime" value={ride.departureTime} onChange={handleChange} required />
        </div>
        <div>
          <Label>Available Seats*</Label>
          <Input type="number" name="availableSeats" value={ride.availableSeats} onChange={handleChange} required min="1" />
        </div>
        <div>
          <Label>Fare (per seat)</Label>
          <Input type="number" name="fare" value={ride.fare} onChange={handleChange} />
        </div>
        <div>
          <Label>Luggage Allowance</Label>
          <Textarea name="luggage" value={ride.luggage} onChange={handleChange} placeholder="Describe luggage space and restrictions" />
        </div>
        <div>
          <Label>Extra Stops</Label>
          <Textarea name="extraStops" value={ride.extraStops} onChange={handleChange} placeholder="List any planned extra stops" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              name="smoking" 
              checked={ride.smoking} 
              onChange={handleChange} 
              id="smoking" 
              className="h-4 w-4"
            />
            <Label htmlFor="smoking">Allow Smoking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              name="requiresConfirmation" 
              checked={ride.requiresConfirmation} 
              onChange={handleChange} 
              id="confirmation" 
              className="h-4 w-4"
            />
            <Label htmlFor="confirmation">Require Booking Confirmation</Label>
          </div>
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Create Ride
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateRideForm;