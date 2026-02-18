import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { productsData } from './data/products';
import ViralSlider from './components/ViralSlider';
import ProductCard from './components/ProductCard';
import CategoryList from './components/CategoryList';
import SearchBar from './components/SearchBar';
import { RefreshCw } from 'lucide-react';
import BeautyFinds from './pages/BeautyFinds';
import ElectronicsFinds from './pages/ElectronicsFinds';
import FashionFinds from './pages/FashionFinds';
import HomeGardenFinds from './pages/HomeGardenFinds';
import SatisfyingFinds from './pages/SatisfyingFinds';
import StressBusters from './pages/StressBusters';
import VibeBoosters from './pages/VibeBoosters';



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProducts = productsData.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (p.code && p.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const brands = ["AMAZON", "ALIEXPRESS", "TEMU", "SHEIN", "EBAY", "WALMART"];

  return (
    <Router> {/* غلف التطبيق بالـ Router */}
      <div className="min-h-screen relative bg-[#fdfdff] font-sans overflow-x-hidden" dir="ltr">
        
        {/* طبقة البقع الخلفية - ستبقى ثابتة في كل الصفحات */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-[#5014FF]/15 blur-[80px] sm:blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[5%] right-[-10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-[#FF82F2]/20 blur-[70px] sm:blur-[100px] rounded-full"></div>
          <div className="absolute top-[20%] left-[15%] w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-[#A2FCA5]/25 blur-[70px] sm:blur-[110px] rounded-full"></div>
        </div>

        {/* 1. Marquee - سيبقى ظاهراً في كل الصفحات */}
        <div className="relative z-10 bg-[#A2FCA5] border-b-2 border-black py-1 overflow-hidden select-none">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <span key={i} className="inline-block text-black font-black text-[10px] sm:text-[12px] uppercase tracking-widest italic mx-6 sm:mx-10">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* تحديد المسارات */}
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={
            <main className="relative z-10 py-6">
              {/* العنوان والبحث يظهران فقط في الرئيسية أو يمكن رفعهما فوق الـ Routes ليظهرا دائماً */}
              <div className="text-center mt-6 mb-10 px-4">
                <div className="inline-block transform -rotate-1 sm:-rotate-2">
                  <h1 className="text-5xl sm:text-8xl font-black text-black tracking-tighter drop-shadow-[3px_3px_0px_#FF82F2] font-bubble">
                    Alto<span className="text-[#5014FF] animate-pulse-fast">Finds</span>
                  </h1>
                  <p className="text-black/70 text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-2 bg-white/40 backdrop-blur-sm py-1 px-4 rounded-full border border-black/5">
                     The Best Curated Finds For You
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </div>

              {searchQuery === "" ? (
                <>
                  <div><ViralSlider products={productsData} /></div>
                  <div><CategoryList /></div>

                  <section className="px-4 max-w-7xl mx-auto mt-12 mb-20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col">
                        <h2 className="text-xl font-black text-black uppercase italic tracking-tighter">Recent Discoveries</h2>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5014FF] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5014FF]"></span>
                          </span>
                          <span className="text-[10px] font-bold text-[#5014FF] uppercase tracking-widest">Live Updates</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 justify-items-center justify-center">
                      {productsData.slice(0, visibleCount).map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} isViral={false} />
                      ))}
                    </div>

                    {visibleCount < productsData.length && (
                      <div className="flex justify-center mt-12">
                        <button onClick={handleLoadMore} className="bg-[#F3FCA2] text-black border-2 border-black px-8 py-3 rounded-2xl font-black uppercase text-sm shadow-[4px_4px_0px_#5014FF] active:shadow-none active:translate-y-1 transition-all flex items-center gap-2">
                          <span>Load More</span>
                          <RefreshCw size={18} strokeWidth={3} />
                        </button>
                      </div>
                    )}
                  </section>
                </>
              ) : (
                <section className="px-4 max-w-7xl mx-auto">
                   <h2 className="text-xl font-black text-black mb-6 uppercase italic">Search Results ({filteredProducts.length})</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center justify-center">
                      {filteredProducts.map((product, index) => (
                        <div key={product.id} className="w-full max-w-[95%] sm:max-w-none">
                           <ProductCard product={product} index={index} isViral={false} />
                        </div>
                      ))}
                    </div>
                </section>
              )}
            </main>
          } />

          {/* صفحة Beauty Finds */}
          <Route path="/category/beauty" element={<BeautyFinds />} />
          <Route path="/category/electronics" element={<ElectronicsFinds />} />
          <Route path="/category/home-garden" element={<HomeGardenFinds />} />
       
         
<Route path="/category/games" element={<SatisfyingFinds />} /> 

         
<Route path="/category/fashion" element={<FashionFinds />} />
   <Route path="/category/StressBusters" element={<StressBusters />} />
<Route path="/category/vibe-boosters" element={<VibeBoosters />} />

          
        </Routes>
        <div className="mt-8 pt-6 border-t-4 border-black text-center px-4 mb-4">
  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed text-black">
    As an Amazon Associate, I earn from qualifying purchases. 
  </p>
  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed text-gray-700 mt-2">
    This site also participates in the AliExpress Affiliate Program and may earn commissions from links on this page.
  </p>
</div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 25s linear infinite;
            width: max-content;
          }
          .animate-pulse-fast {
            animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
            0%, 100% { filter: brightness(1.2) drop-shadow(0 0 8px #FF82F2); }
            50% { filter: brightness(1); }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;