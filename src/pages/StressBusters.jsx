import React from 'react';
// استيراد البيانات من الملف الموحد
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const StressBusters = () => {
  // فلترة المنتجات لتظهر فقط التي تنتمي لكاتيجوري StressBusters
  const stressProducts = productsData.filter(p => p.category === "StressBusters");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* زر العودة */}
        <Link to="/" className="flex items-center gap-2 text-black font-black uppercase text-xs mb-8 group">
          <div className="p-1 bg-white border border-black rounded-full group-hover:bg-[#ccff00] transition-colors shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <ArrowLeft size={16} />
          </div>
          Back to home
        </Link>

        {/* رأس الصفحة (Header) */}
        <div className="mb-10 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-[#FFB38E] rounded-lg border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Zap size={20} className="text-black fill-current" />
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-black">
              Stress <span className="text-[#FFB38E] drop-shadow-[1px_1px_0px_#000]">Busters</span>
            </h1>
          </div>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
            Relieve anxiety with these viral fidgets and tools
          </p>
        </div>

        {/* شبكة المنتجات الموحدة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {stressProducts.map((product, index) => (
            <div key={product.id} className="h-full">
              <ProductCard 
                product={product} 
                index={index} 
                isViral={false} 
              />
            </div>
          ))}
        </div>

        {/* تذييل في حال عدم وجود منتجات */}
        {stressProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
            Zen mode active. No stress tools found yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default StressBusters;