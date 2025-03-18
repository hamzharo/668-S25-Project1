"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadDocuments() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async () => {
    // Add document upload API call
    console.log("Uploading files:", files);
    // Reset after upload
    setFiles([]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Documents</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          label="Select Documents (ID, Proof of Address, etc)"
        />
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium">Selected Files:</h3>
            <ul className="list-disc pl-6">
              {Array.from(files).map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        <Button onClick={handleSubmit} disabled={files.length === 0}>
          Upload Documents
        </Button>
      </div>
    </div>
  );
}