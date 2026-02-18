import React from 'react';
// استيراد البيانات من الملف الموحد الجديد
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Cpu } from 'lucide-react';

const ElectronicsFinds = () => {
  // فلترة المنتجات لتظهر فقط التي تنتمي لكاتيجوري electronics
  const electronicsProducts = productsData.filter(p => p.category === "electronics");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس الصفحة (Header) */}
        <div className="mb-10 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            {/* لون أزرق نيون للقسم التقني */}
            <div className="p-2 bg-[#5014FF] rounded-lg border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Cpu size={20} className="text-white" />
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-black">
              Electronics  <span className="text-[#5014FF] drop-shadow-[1px_1px_0px_#000]">Finds</span>
            </h1>
          </div>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
            Future gadgets and aesthetic tech essentials
          </p>
        </div>

        {/* شبكة المنتجات - موحدة الحجم بالكامل */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {electronicsProducts.map((product, index) => (
            <div key={product.id} className="h-full">
              <ProductCard 
                product={product} 
                index={index} 
                isViral={false} 
              />
            </div>
          ))}
        </div>

        {/* تذييل بسيط في حال عدم وجود منتجات */}
        {electronicsProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
            Searching for new gadgets...
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectronicsFinds;