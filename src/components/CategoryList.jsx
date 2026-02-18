import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categoriesData } from '../data/categoriesData';

const CategoryList = () => {
  return (
    <section className="py-4 px-4 max-w-7xl mx-auto">
     <div className="flex items-center justify-between mb-10">
  <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter sm:text-3xl 
                 drop-shadow-[3px_3px_0px_#5014FF] 
                 [text-shadow:_0_0_20px_rgba(162,252,165,0.6)]">
    Shop By Category
  </h2>
</div>
      
      <Swiper
        spaceBetween={20} // زيادة المسافة بين البطاقات لتناسب الحجم الجديد
        /* تعديل slidesPerView:
           - الموبايل: من 2.1 إلى 1.4 (لتصبح البطاقة أكبر وتملأ الشاشة أكثر)
           - التابلت: من 3.2 إلى 2.4
           - الشاشات الكبيرة: من 5.2 إلى 4.2
        */
        slidesPerView={1.4} 
        breakpoints={{
          640: { 
            slidesPerView: 2.4,
            spaceBetween: 25 
          },
          1024: { 
            slidesPerView: 4.2,
            spaceBetween: 30 
          },
        }}
        className="pb-4" // إضافة مساحة في الأسفل للظل (Shadow)
      >
        {categoriesData.map((cat) => (
          <SwiperSlide key={cat.id}>
           <Link 
              to={`/category/${cat.slug}`} 
              className="flex flex-col bg-white border-2 border-black/10 rounded-[2rem] overflow-hidden group transition-all duration-300 hover:border-black shadow-md hover:shadow-xl"
            >
              {/* الجزء العلوي: الصورة تحافظ على أبعادها المربعة aspect-square */}
              <div className="relative w-full aspect-square bg-[#f9f9f9] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* الفاصل والمحتوى السفلي - زيادة الحشوة (Padding) */}
              <div className="p-5 sm:p-6 border-t-2 border-black/5 flex items-center justify-between">
                <span className="text-black font-black text-xs sm:text-sm uppercase tracking-tighter truncate mr-2">
                  {cat.name}
                </span>

                {/* دائرة السهم - تكبير حجم الدائرة قليلاً لتناسب الحجم الجديد */}
                <div className="min-w-[36px] h-[36px] sm:min-w-[42px] sm:h-[42px] bg-[#ccff00] rounded-full flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-all">
                  <ArrowUpRight size={20} className="text-black stroke-[3]" />
                </div>
              </div>
           </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoryList;