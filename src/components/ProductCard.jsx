import React from 'react';
import { ExternalLink } from 'lucide-react'; // أيقونة تعبر عن الانتقال لرابط خارجي

const ProductCard = ({ product, index }) => {
  if (!product) return null;

  const neonColors = [
    "bg-[#F4FF42]/20", 
    "bg-[#EEB0FF]/30", 
    "bg-[#7A4FFF]/20", 
  ];

  const currentBackground = neonColors[index % 3];

  return (
    <div className="relative group w-full p-1 h-full flex flex-col">
      {/* الحاوية السوداء الخارجية */}
      <div className="bg-[#0a0f1e] p-[1px] rounded-[1.5rem] sm:rounded-[2.5rem] shadow-xl w-full flex-1 flex flex-col overflow-hidden">
        
        {/* البطاقة البيضاء */}
        <div className={`relative flex-1 rounded-[1.4rem] sm:rounded-[2.4rem] overflow-hidden p-3 sm:p-6 flex flex-col items-center min-h-[200px] sm:min-h-[300px] bg-white`}>
          
          {/* طبقة اللون الخلفية */}
          <div className={`absolute inset-0 ${currentBackground} z-0`}></div>

          {/* الصورة */}
          <div className="relative w-full aspect-[4/3] bg-transparent overflow-hidden flex items-center justify-center z-10">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain drop-shadow-md transition-transform group-hover:scale-105"
            />
          </div>

          {/* منطقة النصوص والأزرار */}
          <div className="relative z-10 p-3 sm:p-4 flex flex-col justify-between flex-grow w-full">
            
            {/* اسم المنتج: الآن يأخذ مساحة أكبر بعد حذف السعر */}
            <h3 className="text-[11px] sm:text-xl font-black text-gray-900 mb-4 uppercase line-clamp-3 h-auto min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-center leading-tight">
              {product.name}
            </h3>

            {/* زر واحد عريض يأخذ العرض الكامل */}
           <div className="w-full mt-auto">
  <a 
    href={product.link} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-[#ccff00] text-black border-2 border-black py-2.5 sm:py-4 rounded-lg sm:rounded-2xl font-black text-[10px] sm:text-sm uppercase shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
  >
    {/* النص سيتمركز تلقائياً سواء كان سطراً أو سطرين */}
    <span className="text-center px-1 leading-none sm:leading-normal">
      Check Price On Amazon
    </span>
    
    {/* الأيقونة ستكون تحت النص في الشاشات الضيقة جداً، وبجانبه في الأكبر، مما يحافظ على التوسط */}
    <ExternalLink size={14} className="sm:w-5 sm:h-5 flex-shrink-0" strokeWidth={3} />
  </a>
</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;