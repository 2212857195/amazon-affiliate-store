import React from 'react';
// استيراد البيانات من الملف الموحد
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Target } from 'lucide-react';

const SatisfyingFinds = () => {
  // فلترة المنتجات لتظهر فقط التي تنتمي لكاتيجوري games (المخصص لـ Satisfying Finds)
  const satisfyingProducts = productsData.filter(p => p.category === "games");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس الصفحة (Header) */}
        <div className="mb-10 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            {/* لون بنفسجي هادئ للقسم المرضي بصرياً */}
            <div className="p-2 bg-[#C3ACFF] rounded-lg border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Target size={20} className="text-black" />
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-black">
              Satisfying <span className="text-[#C3ACFF] drop-shadow-[1px_1px_0px_#000]">Finds</span>
            </h1>
          </div>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
            Oddly satisfying gadgets and therapeutic finds
          </p>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {satisfyingProducts.map((product, index) => (
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
        {satisfyingProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
            Finding peace and satisfaction...
          </div>
        )}
      </div>
    </div>
  );
};

export default SatisfyingFinds;