import React from "react";

const ContinueButton = ({ text = "← Back", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white flex items-center justify-center font-medium transition-transform hover:scale-105 
                 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg h-10 sm:h-[42px]
                 bg-[#3E3E3F] w-full sm:w-auto"
    >
      {text}
    </button>
  );
};

export default ContinueButton;
