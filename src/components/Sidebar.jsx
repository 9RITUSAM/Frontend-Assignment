import React from 'react';
import { 
  Home, User, Users, UsersRound, FileText, 
  UserPlus, PieChart, Settings, ChevronRight, ChevronsLeft 
} from 'lucide-react';

import Logo from '../assets/img/logo.png';

const NavItem = ({ icon, label, active = false, hasArrow = false }) => (
  <div className={`flex items-center justify-between p-3 px-4 rounded-xl cursor-pointer transition-all mb-1 ${
    active ? 'bg-white text-[#916747] shadow-sm' : 'text-gray-400 hover:text-gray-200'
  }`}>
    <div className="flex items-center gap-4">
      <span className={active ? "text-[#916747]" : "text-gray-400"}>{icon}</span>
      <span className={`text-[15px] ${active ? "font-semibold" : "font-normal"}`}>{label}</span>
    </div>
    {hasArrow && <ChevronRight size={18} className="text-gray-500" />}
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-[280px] bg-[#3a3532] m-3 rounded-[30px] p-6 flex flex-col h-[calc(100vh-24px)] shadow-2xl">
      
      
      <div className="flex justify-between items-center mb-10 px-2">
        <img src={Logo} alt="CORE" className="h-8 w-auto object-contain" />
        <button className="text-gray-400 hover:text-white">
          <ChevronsLeft size={20} />
        </button>
      </div>

 
      <nav className="flex-1 px-1">
        <NavItem icon={<Home size={20}/>} label="Home" />
        <NavItem icon={<User size={20}/>} label="My Info" hasArrow />
        <NavItem icon={<Users size={20}/>} label="People" active />
        <NavItem icon={<UsersRound size={20}/>} label="Team Management" hasArrow />
        <NavItem icon={<FileText size={20}/>} label="Project Setup" hasArrow />
        <NavItem icon={<UserPlus size={20}/>} label="Hiring" />
        <NavItem icon={<PieChart size={20}/>} label="Report" />
      </nav>

    
      <div className="mt-auto px-2">
        <div className="flex items-center gap-4 p-4 border border-gray-600 rounded-[20px] text-gray-200 cursor-pointer hover:bg-gray-700/30 transition-all">
          <Settings size={20} />
          <span className="text-[15px] font-medium">Settings</span>
        </div>
      </div>
      
    </aside>
  );
};

export default Sidebar;