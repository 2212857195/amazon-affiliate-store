import React from 'react';
// استيراد البيانات من الملف الموحد الجديد
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles } from 'lucide-react';

const BeautyFinds = () => {
  // فلترة المنتجات لتظهر فقط التي تنتمي لكاتيجوري beauty
  const beautyProducts = productsData.filter(p => p.category === "beauty");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس الصفحة (Header) */}
        <div className="mb-10 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-[#EEB0FF] rounded-lg border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Sparkles size={20} className="text-black" />
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-black">
              Beauty <span className="text-[#EEB0FF] drop-shadow-[1px_1px_0px_#000]">Finds</span>
            </h1>
          </div>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
            The most viral beauty picks updated daily
          </p>
        </div>

        {/* شبكة المنتجات - موحدة الحجم */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {beautyProducts.map((product, index) => (
            <div key={product.id} className="h-full">
              {/* نستخدم نفس الكارد لتوحيد الـ UI في كل الموقع */}
              <ProductCard 
                product={product} 
                index={index} 
                isViral={false} 
              />
            </div>
          ))}
        </div>

        {/* تذييل بسيط خاص بالصفحة */}
        {beautyProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-bold uppercase tracking-widest">No beauty finds added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeautyFinds;