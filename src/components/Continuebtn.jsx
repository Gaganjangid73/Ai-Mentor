import React from "react";

const ContinueButton = ({ text = "Continue →", onClick }) => {
  
  return (
    <button
      onClick={onClick}
      className="text-white flex items-center justify-center font-medium transition-transform hover:scale-105 
                 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg h-10 sm:h-[42px]
                 bg-gradient-to-r from-[#0945DF] to-[#00AF9E] w-full sm:w-auto"
    >
      {text}
    </button>
  );
};

export default ContinueButton;

// 