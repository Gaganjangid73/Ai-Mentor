import React from 'react';

const PatientInfo = ({ name, age, gender, images }) => {
  return (
    <div className="w-64 bg-[#1e1e1e] p-4 border-t border-b border-l  border-[rgba(53,41,58,1)]  rounded-l-lg">
      <h2 className="text-lg font-medium mb-2 text-white/50">Patient Info</h2>
      <p className='text-white/50 text-md'>Name: {name}</p>
      <p className='text-white/50 text-md '>Age:  {age}</p>
      <p className='text-white/50 text-md'>Gender: {gender}</p>

      <div className="flex gap-2 my-3">
      <p className='text-white/50 text-md'> Upload Images: </p>
        {images?.map((imgSrc, index) => (
          <img
            key={index}
            className="w-14 h-14 object-cover rounded"
            src={imgSrc}
            alt={`eye${index + 1}`}
          />
        ))}
      </div>

      <button className="bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-2 rounded-lg text-white w-full ">
        Download Report ↓
      </button>
    </div>
  );
};  

export default PatientInfo;
