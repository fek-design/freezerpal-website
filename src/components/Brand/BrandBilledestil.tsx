import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import img95 from '../../assets/images/image 95.jpg';
import img102 from '../../assets/images/image 102.jpg';
import img103 from '../../assets/images/image 103.jpg';
import img104 from '../../assets/images/image 104.jpg';
import img105 from '../../assets/images/image 105.jpg';
import img107 from '../../assets/images/image 107.jpg';
import img108 from '../../assets/images/image 108.jpg';
import img109 from '../../assets/images/image 109.jpg';
import img110 from '../../assets/images/image 110.jpg';
import img111 from '../../assets/images/image 111.jpg';
import img112 from '../../assets/images/image 112.jpg';
import img113 from '../../assets/images/image 113.jpg';
import img114 from '../../assets/images/image 114.jpg';

type Category = 'alle' | 'haender' | 'personer' | 'koeleskab';

const images = [
  { src: img102, alt: 'Madlavning hænder', category: 'haender' as Category },
  { src: img103, alt: 'Madlavning hænder', category: 'haender' as Category },
  { src: img105, alt: 'Madlavning hænder', category: 'haender' as Category },
  { src: img107, alt: 'Madlavning hænder', category: 'haender' as Category },
  { src: img108, alt: 'Madlavning hænder', category: 'haender' as Category },
  { src: img95,  alt: 'Madlavning person', category: 'personer' as Category },
  { src: img104, alt: 'Madlavning person', category: 'personer' as Category },
  { src: img109, alt: 'Madlavning person', category: 'personer' as Category },
  { src: img110, alt: 'Madlavning person', category: 'personer' as Category },
  { src: img114, alt: 'Madlavning person', category: 'personer' as Category },
  { src: img111, alt: 'Køleskab person',   category: 'koeleskab' as Category },
  { src: img112, alt: 'Køleskab person',   category: 'koeleskab' as Category },
  { src: img113, alt: 'Køleskab person',   category: 'koeleskab' as Category },
];

const filters: { id: Category; label: string }[] = [
  { id: 'alle',      label: 'Alle' },
  { id: 'haender',   label: 'Madlavning & hænder' },
  { id: 'personer',  label: 'Madlavning & person(er)' },
  { id: 'koeleskab', label: 'Køleskab/Fryser & person' },
];

export function BrandBilledestil() {
  const [active, setActive] = useState<Category>('alle');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === 'alle'
    ? images
    : images.filter((img) => img.category === active);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section id="billede-stil" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">

        {/* Header */}
        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Billede stil</h3>
        </div>

        {/* Filter pills */}
        <div className="md:col-span-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => { setActive(f.id); setLightboxIndex(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                active === f.id
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'bg-transparent text-brand-dark/60 border-brand-dark/20 hover:border-brand-dark/50 hover:text-brand-dark'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="md:col-span-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="aspect-square rounded-2xl overflow-hidden bg-brand-dark/5 cursor-zoom-in group"
                style={{
                  animation: 'fadeIn 0.3s ease forwards',
                  animationDelay: `${i * 40}ms`,
                  opacity: 0,
                }}
              >
                <img
                  src={img.src.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src.src}
              alt={filtered[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              style={{ maxHeight: '85vh' }}
            />
            <p className="text-white/40 text-sm text-center mt-4">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}