import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loginbg from "../assets/Login.png";
import Navbar from '../components/Navbar';
import Dashboard from "../assets/spacedashboard.png";
import Logo from "../assets/WebLogo.png";
import PersonalInfoimg from "../assets/PersonalInfo.png";
import Medicalhistoryimg from "../assets/medicalhistory.png";
import Uploadimg from "../assets/Uploadimg.png";
import Signupperson from "../assets/Signupperson.png";
import Signupgender from "../assets/Signupgender.png";
import Continue from '../components/Continuebtn.jsx';
import Signupdob from "../assets/signupdob.png";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);

 
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleContinue = () => {
    if (!fullName || !age || !gender || gender === 'Select gender') {
      alert("Please fill out all required fields.");
      return;
    }
    navigate('/medicalhistory');
  };

  return (
    <div className="min-h-screen w-full font-Inter flex flex-col justify-start md:justify-center items-center relative overflow-x-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img className="w-full h-full object-cover" src={Loginbg} alt="Login Background" loading="lazy" />
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar
          logo={Logo}
          loginIcon={Dashboard}
          loginText="Dashboard"
          navLinks={["Home", "Privacy Policy", "Terms & Condition", "Contact"]}
        />
      </div>

      {/* Main Container */}
      <div className="relative flex flex-col justify-center items-center z-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[1000px] px-4 sm:px-6 py-10 mt-[80px] sm:mt-5 md:mt-10 rounded-xl bg-gradient-to-br from-[#1e1e1e]/90 to-[#121212]/90 backdrop-blur-[42px] shadow-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Start Your Analysis
        </h1>
        <p className="text-center text-gray-400 text-sm sm:text-base">
          Provide your information and medical images for AI-powered analysis
        </p>

        {/* Progress Steps */}
        <div className="mt-10 w-full max-w-[800px] flex flex-col sm:flex-row items-center sm:justify-around gap-6 sm:gap-0">
          <div className="flex flex-col items-center text-white gap-1 w-[100px]">
            <img className="w-12" src={PersonalInfoimg} alt="Personal Info" />
            <p className="text-center text-sm">Personal Info</p>
          </div>
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-600" />
          <div className="flex flex-col items-center text-gray-400 gap-1">
            <img className="w-12" src={Medicalhistoryimg} alt="Medical History" />
            <p className="text-center text-sm">Medical History</p>
          </div>
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-600" />
          <div className="flex flex-col items-center text-gray-400 gap-1">
            <img className="w-12" src={Uploadimg} alt="Upload Image" />
            <p className="text-center text-sm">Upload Image</p>
          </div>
        </div>

        {/* Form Header */}
        <h1 className="text-white text-2xl sm:text-3xl font-medium mt-12">Personal Information</h1>
        <p className="text-gray-500 p-4 text-sm sm:text-base">Please provide your basic details</p>

        {/* Form Inputs */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[800px] mt-7'>
          {/* Full Name */}
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-white">Full Name</label>
            <div className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
              focusedInput === 'fullname' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
            }`}>
              <img src={Signupperson} alt="Person Icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-transparent px-10 py-3 text-white text-sm sm:text-base focus:outline-none"
                onFocus={() => setFocusedInput('fullname')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>

          {/* Age */}
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-white">Age</label>
            <div className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
              focusedInput === 'age' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
            }`}>
              <img src={Signupdob} alt="Age Icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80" />
              <input
                type="number"
                value={age}
                onChange={(e) => {
                    const value = parseInt(e.target.value)
                    if( value >=1 && value <=150 ){
                    setAge(e.target.value)}}}
                placeholder="Enter your age"
                className="w-full bg-transparent px-10 py-3 text-white text-sm sm:text-base focus:outline-none"
                onFocus={() => setFocusedInput('age')}
                onBlur={() => setFocusedInput(null)}
              />
            </div>
          </div>

          {/* Gender */}
          <div className="flex-1">
            <label className="text-xs sm:text-sm text-white">Gender</label>
            <div className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
              focusedInput === 'gender' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
            }`}>
              <img src={Signupgender} alt="Gender Icon" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-80" />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full h-[48px] bg-transparent px-10 py-3 text-white text-sm sm:text-base focus:outline-none"
                onFocus={() => setFocusedInput('gender')}
                onBlur={() => setFocusedInput(null)}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-10">
          <Continue onClick={handleContinue} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
