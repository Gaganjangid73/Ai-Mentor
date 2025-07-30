import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loginbg from "../assets/Login.png";
import LockImage from "../assets/Lock.png";
import Phone from "../assets/phone.png";
import Plock from "../assets/Vector.png";
import SendOtpbtn from "../components/SendOtpbtn";
import Submitbtn from "../components/Submitbtn";
import Logo from "../assets/WebLogo.png";

const Login = () => {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);

  const handlesignup = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen w-full font-Inter flex justify-center items-center relative overflow-x-hidden bg-black">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img
          className="w-full h-full object-cover"
          src={Loginbg}
          alt="Login Background"
          loading="lazy"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full max-w-[1000px] min-h-[500px] sm:min-h-[600px] md:h-[650px] bg-gradient-to-br from-[#1e1e1e]/90 to-[#121212]/90 text-white rounded-none md:rounded-xl mx-4 my-4 backdrop-blur-[42px]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-6 px-4">
          <img
            src={LockImage}
            alt="Security"
            className="max-h-[400px] min-h-[120px] object-contain"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block h-[80%] w-px bg-gray-700 mx-2" />

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6">
          <img className="w-36 mx-auto mb-5" src={Logo} alt="Logo" />

          <h2 className="text-3xl font-normal text-center mb-6">
            Welcome back
          </h2>

          <p className="text-gray-400 mb-8 text-center">
            Enter your Phone or Email to login
          </p>

          <form  className="space-y-6">
            {/* Phone/Email Input */}
            <div>
              <label className="text-sm block mb-2">Phone or Email</label>
              <div
                className={`flex items-center border rounded-lg px-4 py-2.5 bg-black transition-all duration-200 ${
                  focusedInput === "phone"
                    ? "border-violet-500 border-2 bg-white/5 shadow-md"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <img src={Phone} alt="Phone Icon" className="w-5 h-5 mr-3" />
                <input
                  type="text"
                  required
                  placeholder="Enter your phone/email"
                  className="bg-transparent focus:outline-none w-full text-white placeholder-gray-500"
                  onFocus={() => setFocusedInput("phone")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            </div>

            {/* OTP Input */}
            <div>
              <label className="text-sm block mb-2">OTP</label>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div
                  className={`flex items-center border rounded px-4 py-2 bg-black transition-all duration-200 flex-grow ${
                    focusedInput === "otp"
                      ? "border-violet-500 border-2 bg-white/5 shadow-md"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <img src={Plock} alt="Lock Icon" className="w-4 h-4 mr-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter OTP"
                    className="bg-transparent focus:outline-none w-full text-white placeholder-gray-500"
                    onFocus={() => setFocusedInput("otp")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
                <SendOtpbtn />
              </div>
            </div>

            {/* Submit Button */}
            <Submitbtn />
          </form>

          {/* Signup */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <span
              onClick={handlesignup}
              className="text-blue-500 cursor-pointer hover:text-blue-400 transition-colors"
            >
              Signup
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
