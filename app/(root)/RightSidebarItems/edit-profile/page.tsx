"use client";
import { useState } from "react";
import EditProfile from "@/components/EditProfile";

const EditProfilePage = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });


  return (
    <div>
      <h1>Edit Profile Page</h1>
      <EditProfile/>
    </div>
    
  )
}

export default EditProfilePage;



