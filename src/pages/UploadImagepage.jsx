import React, { useState } from "react";
import Loginbg from "../assets/Login.png";
import Navbar from "../components/Navbar";
import Dashboard from "../assets/spacedashboard.png";
import Logo from "../assets/WebLogo.png";
import PersonalInfoimg from "../assets/PersonalInfo.png";
import Medicalhistoryimginfo from "../assets/medicalhistoryinfo.png";
import Uploadimgpage from "../assets/UploadImgPage.png";
import Continue from "../components/Continuebtn.jsx";
import Backbutton from "../components/Backbutton.jsx";
import UploadImageSection from "../components/UploadImageSection.jsx";
import { useNavigate } from "react-router-dom";

const UploadImage = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const nextpage = () => {
    if (!selectedFile) {
      alert("Please upload an image before continuing.");
      return;
    }
    navigate("/Chatbot");
  };

  const handlemedicalpage = () => {
    navigate("/medicalhistory");
  };

  return (
    <div className="min-h-screen w-full font-Inter flex flex-col items-center relative bg-black overflow-x-hidden gap-14">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <img
          className="w-full h-full object-cover"
          src={Loginbg}
          alt="Login Background"
          loading="lazy"
        />
      </div>

      {/* Navbar */}
      <div className="w-full">
        <Navbar
          logo={Logo}
          loginIcon={Dashboard}
          loginText="Dashboard"
          navLinks={["Home", "Privacy Policy", "Terms & Condition", "Contact"]}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center z-10 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[1000px] px-4 sm:px-6 pt-10 sm:pt-20 pb-10 mt-4 sm:mt-8 rounded-xl bg-gradient-to-br from-[#1e1e1e]/90 to-[#121212]/90 backdrop-blur-[42px] shadow-xl overflow-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4 sm:mb-6 font-Inter bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Start Your Analysis
        </h1>
        <p className="text-center text-gray-400 text-sm sm:text-base px-2">
          Provide your information and medical images for AI-powered analysis
        </p>

        {/* Step Progress */}
        <div className="mt-8 sm:mt-10 w-full max-w-[800px] flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0">
          <div className="flex flex-col items-center text-white gap-1 w-[100px]">
            <img className="w-10 sm:w-12" src={PersonalInfoimg} alt="Personal Info" />
            <p className="text-center text-xs sm:text-sm">Personal Info</p>
          </div>
          <div className="hidden sm:flex flex-1 h-[1px] bg-gray-600"></div>
          <div className="flex flex-col items-center text-white gap-1 w-[100px]">
            <img className="w-10 sm:w-12" src={Medicalhistoryimginfo} alt="Medical History" />
            <p className="text-center text-xs sm:text-sm">Medical History</p>
          </div>
          <div className="hidden sm:flex flex-1 h-[1px] bg-gray-600"></div>
          <div className="flex flex-col items-center text-gray-400 gap-1 w-[100px]">
            <img className="w-10 sm:w-12" src={Uploadimgpage} alt="Upload Image" />
            <p className="text-center text-xs sm:text-sm">Upload Image</p>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-white text-2xl sm:text-3xl font-medium mt-10 sm:mt-12 text-center">
          Upload Medical Images
        </h2>
        <p className="text-gray-500 px-4 text-sm sm:text-base text-center mt-2">
          Upload relevant medical images for analysis
        </p>

        {/* Upload Image Section */}
        <div className="w-full max-w-[800px] mt-6 px-2">
          <UploadImageSection onFileSelect={setSelectedFile} />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 px-4 sm:px-10">
          <Backbutton onClick={handlemedicalpage} />
          <Continue onClick={nextpage} />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
