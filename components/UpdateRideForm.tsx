"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UpdateRideForm = () => {
  const [rideId, setRideId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    departureTime: "",
    fare: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log(`Updating ride ${rideId}:`, updatedData);
    alert("Ride details updated successfully!");
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Update a Ride</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Ride ID</Label>
          <Input name="rideId" value={rideId} onChange={(e) => setRideId(e.target.value)} required />
        </div>
        <div>
          <Label>New Departure Time</Label>
          <Input type="datetime-local" name="departureTime" value={updatedData.departureTime} onChange={handleChange} />
        </div>
        <div>
          <Label>New Fare</Label>
          <Input type="number" name="fare" value={updatedData.fare} onChange={handleChange} />
        </div>
        <Button className="w-full" onClick={handleUpdate}>
          Update Ride
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpdateRideForm;
