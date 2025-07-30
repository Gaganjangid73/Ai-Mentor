import React, { useState } from "react";
import Uploaddrapimage from "../assets/Uploaddrapimg.png";

const UploadImageSection = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect(file); 
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file); 
    }
  };

  return (
    <div
      className={`border-2 border-dashed ${
        dragActive ? "border-blue-500 bg-gray-800" : "border-gray-600"
      } rounded-md p-8 w-full mx-auto text-center bg-[#1e1e1e] text-white transition-all`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src={Uploaddrapimage} alt="Upload drag and drop" />
        <p className="text-lg font-medium">Drag & Drop Images Here</p>
        <p className="text-md text-gray-400">OR</p>

        <label className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md cursor-pointer hover:bg-blue-700 transition">
          Browse File
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <p className="text-xs text-gray-400 mt-2">
          Supported formats: JPG, PNG, JPEG (Max 10MB per file)
        </p>

        {selectedFile && (
          <div className="text-sm text-green-400 mt-4">
            Selected file: {selectedFile.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImageSection;
