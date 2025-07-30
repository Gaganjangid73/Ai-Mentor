import React, { useState } from "react";
import Loginbg from "../assets/Login.png";
import Phone from "../assets/phone.png";
import Plock from "../assets/Vector.png";
import Signupdob from "../assets/signupdob.png";
import Signupgender from "../assets/signupgender.png";
import Signupperson from "../assets/signupperson.png";
import Signuptask from "../assets/signupTask.png";
import Login from "../assets/login.png";
import Signupmail from "../assets/signupmail.png";
import Submitbtn from "../components/Submitbtn";
import SendOtpbtn from "../components/SendOtpbtn";
import  Logo from "../assets/WebLogo.png"
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const navigate = useNavigate();

  const handlesignin = () => {
    navigate('/login');
  }
  
  
  const [dob, setDob] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div
      className="min-h-screen w-full font-sans flex justify-center items-center relative text-white p-4 sm:p-6 overflow-x-hidden"
      style={{
        backgroundImage: `url(${Loginbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center min-h-[600px] sm:min-h-[500px] w-full max-w-full lg:max-w-[1150px] bg-gradient-to-br from-[#1e1e1e]/90 to-[#121212]/90 text-white rounded-xl p-4 sm:p-6 lg:p-8">
        {/* Left Section*/}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 order-1 lg:order-1">
          <img src={Signuptask} alt="Task Png" className="w-[70%] sm:w-[80%] lg:w-[90%] max-w-[400px]" />
        </div>
        <hr className="hidden lg:block h-[500px] lg:h-[650px] w-[1.5px] bg-gray-700 order-2"/>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-8 order-3 lg:order-3">
         {/* logo  */}
         <div className="flex justify-center mb-7">
           <img src={Logo} alt="Logo" className="mx-auto" />
         </div>
          <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-normal mb-1 sm:mb-2 break-words">Sign up</div>
          {/* title of the form page */}
          <p className="text-center text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base break-words">Signup to continue</p> 

          <form className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 gap-y-2">
              <div>
                <label className="text-xs sm:text-sm">Full Name</label>
                <div
                  className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
                    focusedInput === 'fullname' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
                  }`}
                  onClick={() => setFocusedInput('fullname')}
                >
                  <img
                    src={Signupperson}
                    alt="Person Icon"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] opacity-80"
                  />
                  {/* here take input full name */}
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-8 sm:px-10 py-2 sm:py-3 rounded text-white pl-8 sm:pl-10 text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                    onFocus={() => setFocusedInput('fullname')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm">Email</label>
                <div
                  className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
                    focusedInput === 'email' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
                  }`}
                  onClick={() => setFocusedInput('email')}
                >
                  <img
                    src={Signupmail}
                    alt="Mail Icon"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 opacity-80"
                  />
                  {/* here take input email */}
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-8 sm:px-10 py-2 sm:py-3 rounded text-white pl-8 sm:pl-10 text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm">DOB</label>
                <div
                  className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
                    focusedInput === 'dob' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
                  }`}
                  onClick={() => setFocusedInput('dob')}
                >
                  <img
                    src={Signupdob}
                    alt="DOB Icon"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 opacity-80"
                  />
                  {/* here take input dob */}
                  <input
                    type="date"
                    required
                    name="dob"
                    id="dob"
                    placeholder="YYYY-MM-DD"
                    className="w-full bg-transparent px-8 sm:px-10 py-2 sm:py-3 rounded text-white pl-8 sm:pl-10 text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                    onFocus={() => setFocusedInput('dob')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
              </div>
              <div>
                {/* here take input gender */}
                <label className="text-xs sm:text-sm">Gender</label>
                <div
                  className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
                    focusedInput === 'gender' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
                  }`}
                  onClick={() => setFocusedInput('gender')}
                >
                  <img
                    src={Signupgender}
                    alt="Gender Icon"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4  sm:h-4 opacity-80"
                  />
                  <select
                    className="w-full h-[51px] bg-transparent px-3 sm:px-4 py-2 sm:py-3 rounded text-white pl-8 sm:pl-10 text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-gray-600 "
                    onFocus={() => setFocusedInput('gender')}
                    onBlur={() => setFocusedInput(null)}
                  >
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm">Phone</label>
              <div
                className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
                  focusedInput === 'phone' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
                }`}
                onClick={() => setFocusedInput('phone')}
              >
                <img
                  src={Phone}
                  alt="Phone Icon"
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 opacity-80"
                />
                {/* here take input phone number*/}
                <input
                  type="text"
                  required
                  placeholder="Enter your phone"
                  className="w-full bg-transparent px-8 sm:px-10 py-2 sm:py-3 rounded text-white pl-8 sm:pl-10 text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                  onFocus={() => setFocusedInput('phone')}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
              <div className="w-full">
                <label className="text-xs sm:text-sm">OTP</label>
                <div
                  className={`relative flex items-center border rounded transition-all duration-200 bg-black border-gray-600 ${
                    focusedInput === 'otp' ? 'border-4 border-violet-500 backdrop-blur-md bg-white/10 shadow-lg' : ''
                  }`}
                  onClick={() => setFocusedInput('otp')}
                >
                  <img
                    src={Plock}
                    alt="OTP Icon"
                    className="absolute left- sm: pl-[0.5px] left-3  top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 opacity-80"
                  />
                  {/* here take input otp */}
                  <input
                    type="text"
                    required
                    placeholder="Enter OTP"
                    className="w-full bg-transparent px-8 sm:px-10 py-2 sm:py-3 rounded text-white pl-8 sm:pl-10 text-sm sm:text-base focus:outline-none focus:ring-0 focus:border-gray-600"
                    onFocus={() => setFocusedInput('otp')}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>
              </div>
              {/* otp button */}
           <button className="
              w-full sm:w-auto
              mt-2 sm:mt-7 md:mt-[22px]
              bg-gradient-to-r from-blue-500 to-cyan-500
              text-white font-semibold
              px-3 sm:px-4 md:px-5
              py-2 sm:py-2.5 md:py-[14px]
              rounded
              flex flex-row justify-center items-center
              text-xs sm:text-sm md:text-base
              h-auto md:h-[52px]
              whitespace-nowrap
              transition-all duration-200
            ">
              <span className="mr-1 sm:mr-2">Send</span>
              <span>OTP</span>
            </button>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <input type="checkbox" className="accent-blue-500 mt-1" />
              <label className="text-xs sm:text-sm leading-relaxed">
                I agree to the terms and conditions as set out by the user agreement
              </label>
            </div>
{/* submit button */}
<Submitbtn/>
          
{/* signin button */}
            <p className="text-center text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
              Already have an account? <span onClick={handlesignin} className="text-blue-400 cursor-pointer">Signin</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
