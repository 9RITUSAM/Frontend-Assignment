import React from 'react';

const EmployeeCard = ({ name, role, imageSrc }) => {
  return (
    <div className="bg-white p-10 rounded-[50px] shadow-sm flex flex-col items-center text-center border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 border-gray-400">
      <div className="w-28 h-28 mb-4 relative ">
        <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-inner">
         
          <img 
            src={imageSrc || "https://via.placeholder.com/150"} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="absolute bottom-1 right-1 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-500">
          <span className="text-xs">⚙️</span>
        </div>
      </div>
      
      <h3 className="font-bold text-gray-800 text-xl mb-1">{name}</h3>
      <p className="text-[#D97706] text-sm font-bold mb-4">{role}</p>
      
     
      <div className="flex gap-1.5 ">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
      </div>
    </div>
    
  );
};

export default EmployeeCard;