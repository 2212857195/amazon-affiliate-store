import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="px-4 w-full flex justify-center">
      {/* العرض: كامل في الموبايل و 70% في الكمبيوتر والأيباد */}
      <div className="w-full lg:w-[70%] md:w-[70%] relative">
        <div className="relative flex items-center bg-white border border-black rounded-2xl overflow-hidden shadow-sm group transition-all focus-within:border-black">
          
          {/* أيقونة البحث الصغيرة داخل مكان البحث */}
          <div className="pl-4 text-gray-400">
            <Search size={18} />
          </div>

          {/* حقل الإدخال */}
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by product code..." 
            className="w-full px-3 py-4 outline-none text-black font-bold placeholder:text-gray-400 placeholder:font-normal text-sm"
          />

          {/* زر مسح النص */}
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="pr-2 text-gray-400 hover:text-red-500"
            >
              <X size={18} />
            </button>
          )}

          {/* زر الأيقونة نيون جرين مع ستروك أسود */}
          <div className="bg-[#ccff00] h-full px-5 py-4 border-l border-black flex items-center justify-center cursor-pointer hover:bg-black group-hover:text-[#ccff00] transition-colors">
            <Search size={20} className="text-black group-hover:text-[#ccff00] stroke-[3]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;