import React from 'react';
// استيراد البيانات من الملف الموحد
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Home } from 'lucide-react';

const HomeGardenFinds = () => {
  // فلترة المنتجات لتظهر فقط التي تنتمي لكاتيجوري home-garden
  const homeGardenProducts = productsData.filter(p => p.category === "home-garden");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس الصفحة (Header) */}
        <div className="mb-10 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            {/* لون أصفر نيون متناسق مع AltoFinds */}
            <div className="p-2 bg-[#F3FCA2] rounded-lg border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Home size={20} className="text-black" />
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-black">
              Home <span className="text-[#F3FCA2] drop-shadow-[1px_1px_0px_#000]">Garden</span>
            </h1>
          </div>
          <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">
            Aesthetic home essentials and cozy garden vibes
          </p>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {homeGardenProducts.map((product, index) => (
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
        {homeGardenProducts.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">
            Fetching cozy finds for you...
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeGardenFinds;