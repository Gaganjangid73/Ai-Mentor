import React, { useState } from "react";
import Loginbg from "../assets/Login.png";
import Navbar from "../components/Navbar";
import Dashboard from "../assets/spacedashboard.png";
import Logo from "../assets/WebLogo.png";
import PersonalInfoimg from "../assets/PersonalInfo.png";
import Medicalhistoryimginfo from "../assets/medicalhistoryinfo.png";
import Uploadimg from "../assets/Uploadimg.png";
import Continue from "../components/Continuebtn.jsx";
import Backbutton from "../components/Backbutton.jsx";
import { useNavigate } from "react-router-dom";

const Medicalhistory = () => {

  const navigate = useNavigate();

  const handleuploadimg =()=>{
    if( !currentsymptom || !medicalhistoryinfo){
      alert("Please fill out current info")
      return;
    }
    navigate('/uploadimage')
  }

  const handlepersonalinfo =()=>{
     navigate('/personalinfo')
  }

  const [currentsymptom, setcurrentsymptom] = useState("");
  const [medicalhistoryinfo, setmedicalhistoryinfo] = useState("");

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
      <div className="relative flex flex-col justify-center items-center z-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[1000px] px-4 sm:px-6 pt-14 sm:pt-20 pb-10 mt-4 sm:mt-8 rounded-xl bg-gradient-to-br from-[#1e1e1e]/90 to-[#121212]/90 backdrop-blur-[42px] shadow-xl overflow-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 font-Inter bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Start Your Analysis
        </h1>
        <p className="text-center text-gray-400 text-sm sm:text-base">
          Provide your information and medical images for AI-powered analysis
        </p>

        {/* Step Progress */}
        <div className="mt-10 w-full max-w-[800px] flex flex-col sm:flex-row items-center sm:justify-around gap-6 sm:gap-0">
          <div className="flex flex-col items-center text-white gap-1 w-[100px]">
            <img className="w-12" src={PersonalInfoimg} alt="Personal Info" />
            <p className="text-center text-sm">Personal Info</p>
          </div>
          <div className="hidden sm:flex flex-1 h-[1px] bg-gray-600"></div>
          <div className="flex flex-col items-center text-white gap-1 w-[100px]">
            <img className="w-12" src={Medicalhistoryimginfo} alt="Medical History" />
            <p className="text-center text-sm">Medical History</p>
          </div>
          <div className="hidden sm:flex flex-1 h-[1px] bg-gray-600"></div>
          <div className="flex flex-col items-center text-gray-400 gap-1 w-[100px]">
            <img className="w-12" src={Uploadimg} alt="Upload Image" />
            <p className="text-center text-sm">Upload Image</p>
          </div>
        </div>

        {/* Section Title */}
        <h1 className="text-white text-2xl sm:text-3xl font-medium mt-12">Medical History</h1>
        <p className="text-gray-500 px-4 sm:px-6 pt-4 text-center text-sm sm:text-base">
          Help us understand your medical background
        </p>

        {/* Text Areas */}
        <div className="w-full flex flex-col items-center mt-6 space-y-6">
          <div className="w-full px-4 sm:px-10">
            <label className="block text-white mb-2 text-sm sm:text-base">
              Current Symptoms
            </label>
            <textarea
              value={currentsymptom}
              required
              onChange={(e) => setcurrentsymptom(e.target.value)}
              placeholder="Describe your current symptoms"
              className="w-full h-32 p-4 rounded-lg text-white bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none text-sm sm:text-base"
            />
          </div>

          <div className="w-full px-4 sm:px-10">
            <label className="block text-white mb-2 text-sm sm:text-base">
              Medical History
            </label>
            <textarea
              value={medicalhistoryinfo}
              required
              onChange={(e) => setmedicalhistoryinfo(e.target.value)}
              placeholder="List any relevant medical history"
              className="w-full h-32 p-4 rounded-lg text-white bg-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 px-4 sm:px-10">
          <Backbutton onClick={handlepersonalinfo} />
          <Continue onClick={handleuploadimg}/>
        </div>
      </div>
    </div>
  );
};

export default Medicalhistory;
