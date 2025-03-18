"use client";
import React from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./ui/button";

const EditProfile2 = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });


    return (
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <Input
                type="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
            <Input
              type="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Input
              type="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Button type="submit" className="w-full md:w-auto">
              Save Changes
            </Button>
          </form>
        </div>
      );
}

export default EditProfile2;