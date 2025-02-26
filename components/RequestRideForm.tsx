"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RequestRideForm = () => {
  const [search, setSearch] = useState({
    departureCity: "",
    destination: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Searching for rides:", search);
    alert("Searching for available rides...");
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Request a Ride</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Departure City</Label>
          <Input name="departureCity" value={search.departureCity} onChange={handleChange} required />
        </div>
        <div>
          <Label>Destination</Label>
          <Input name="destination" value={search.destination} onChange={handleChange} required />
        </div>
        <Button className="w-full" onClick={handleSearch}>
          Find Ride
        </Button>
      </CardContent>
    </Card>
  );
};

export default RequestRideForm;
