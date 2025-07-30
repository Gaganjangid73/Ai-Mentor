import React from 'react'

const SendOtpbtn = () => {
  return (
    <button className="
              w-full sm:w-auto
              mt-2 sm:mt-7 md:mt-[1px]
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
  )
}

export default SendOtpbtn
