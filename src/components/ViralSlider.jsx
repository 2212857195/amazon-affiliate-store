import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';
import { Flame } from 'lucide-react';
// استيراد البيانات من الملف الموحد الجديد
import { productsData } from '../data/products';

const ViralSlider = () => {
  // فلترة المنتجات التي تحتوي على isViral: true فقط من الملف الموحد
  const viralItems = productsData.filter(p => p.isViral === true);

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-8 ml-2">
        <div className="p-2 bg-yellow-400 rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.6)]">
          <Flame size={20} className="text-black fill-current" />
        </div>
        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)]">
          Viral Products
        </h2>
      </div>

      <Swiper
        spaceBetween={15}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
        className="!pb-12"
      >
        {viralItems.map((item, index) => (
          <SwiperSlide key={item.id} className="h-auto">
            {/* نرسل البيانات للكارد مع تفعيل وضع isViral */}
            <ProductCard product={item} index={index} isViral={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ViralSlider;