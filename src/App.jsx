import React from 'react';
import Sidebar from './components/Sidebar';
import EmployeeCard from './components/EmployeeCardComponent';
import { 
  Search, Download, Filter, Plus, LayoutGrid, 
  StretchHorizontal, Network, Bell, Mail, Clock, SquarePen,
  Settings, Cpu, BarChart3, Handshake, Plane, Mic2, Megaphone, Lamp
} from 'lucide-react'; 

import EmilyBaker from './assets/img/Emily Baker.png';

const employeeData = [
  { id: 1, name: "Ethan Lee", role: "IT Specialist", img: EmilyBaker, badge: <Cpu size={14} /> },
  { id: 2, name: "Emily Baker", role: "Marketing Manager", img: EmilyBaker, badge: <Settings size={14} /> },
  { id: 3, name: "Micheal Shaun", role: "Sales Director", img: EmilyBaker, badge: <BarChart3 size={14} /> },
  { id: 4, name: "Liam Carter", role: "Product Designer", img: EmilyBaker, badge: <Handshake size={14} /> },
  { id: 5, name: "Grace Kim", role: "Customer Lead", img: EmilyBaker, badge: <Plane size={14} /> },
  { id: 6, name: "Noah Williams", role: "Finance Head", img: EmilyBaker, badge: <Mic2 size={14} /> },
  { id: 7, name: "Isabella Rossi", role: "Operations Manager", img: EmilyBaker, badge: <Megaphone size={14} /> },
  { id: 8, name: "Ava Thompson", role: "HR Executive", img: EmilyBaker, badge: <Lamp size={14} /> },
];

function App() {
  return (
    <div className="flex min-h-screen bg-[#F3F4F6]">
      <Sidebar />

      <main className="flex-1 p-6 flex flex-col overflow-hidden">
        
        
        <header className="flex justify-between items-center bg-white px-6 py-3 rounded-2xl shadow-sm mb-6">
          <h2 className="text-xl font-bold text-[#4B4442]">People</h2>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full">
              <span className="text-[12px] font-bold text-gray-500">MST</span>
              <div className="flex items-center gap-3 border-l pl-3 ml-1">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-[13px] font-mono font-bold text-gray-700">02:03:02</span>
                </div>
                <SquarePen size={18} className="text-gray-400 cursor-pointer hover:text-gray-600 border-l pl-2 ml-1" />
              </div>
            </div>

            <div className="flex items-center gap-3 border-r pr-4 border-gray-100">
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full relative ">
                <Mail size={22} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 "></span>
              </button>
            </div>

            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer">
              <img src={EmilyBaker} alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        
        <div className="flex-1 bg-white rounded-[45px] p-8 overflow-y-auto shadow-sm">
          
          
          <div className="flex justify-between items-center mb-8">
            <div className="relative w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by Employee Name or Number" 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-full border border-gray-100 text-sm focus:outline-none focus:bg-white transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-white rounded-xl border border-gray-100 text-black-500 shadow-sm"><Download size={20} /></button>
              <button className="p-2.5 bg-white rounded-xl border border-gray-100 text-black-500 shadow-sm"><Filter size={20} /></button>
              <button className="p-2.5 bg-[#4B4442] text-white rounded-xl shadow-lg ml-2"><Plus size={24} /></button>

              <div className="flex bg-gray-50 rounded-xl p-1 shadow-sm border border-gray-200 ml-2">
                <button className="p-2 bg-[#4B4442] text-white rounded-lg"><LayoutGrid size={20} /></button>
                <button className="p-2 text-black-500"><StretchHorizontal size={20} /></button>
                <button className="p-2 text-black-500"><Network size={20} /></button>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 ">
            {employeeData.map((emp) => (
              <EmployeeCard 
                key={emp.id} 
                name={emp.name} 
                role={emp.role} 
                imageSrc={emp.img} 
                badge={emp.badge} 
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;