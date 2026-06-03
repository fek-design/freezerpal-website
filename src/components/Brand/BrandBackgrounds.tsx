import bg1 from '../../assets/images/Baggrund 1.svg';
import bg1_2 from '../../assets/images/Baggrund 1.2.svg';
import bg2 from '../../assets/images/Baggrund 2.svg';
import bg2_2 from '../../assets/images/Baggrund 2.2.svg';
import bg3 from '../../assets/images/Baggrund 3.svg';
import bg3_2 from '../../assets/images/Baggrund 3.2.svg';
import bg4 from '../../assets/images/Baggrund 4.svg';
import bg4_2 from '../../assets/images/Baggrund 4.2.svg';

export function BrandBackgrounds() {

  const bgStyles = [
    { name: 'Baggrund 1', bg: bg1 },
    { name: 'Baggrund 1.2', bg: bg1_2 },
    { name: 'Baggrund 2', bg: bg2 },
    { name: 'Baggrund 2.2', bg: bg2_2 },
    { name: 'Baggrund 3', bg: bg3 },
    { name: 'Baggrund 3.2', bg: bg3_2 },
    { name: 'Baggrund 4', bg: bg4 },
    { name: 'Baggrund 4.2', bg: bg4_2 },
  ];

  return (
    <section id="baggrund" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">
        
        {/* Section Header */}
        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Baggrund</h3>
        </div>
        
        {/* Grid Container */}
        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {bgStyles.map((item, idx) => {
            // Resolve the asset path cleanly whether it evaluates to an Astro object or direct string fallback
            const imgPath = item.bg?.src || item.bg;

            return (
              <div 
                key={idx} 
                className="flex flex-col h-64 rounded-2xl border border-black/10 overflow-hidden shadow-sm bg-white"
              >
                {/* Card Header Strip */}
                <div className="h-12 flex items-center px-4 border-b border-black/5 bg-white">
                  <span className="text-sm font-medium text-brand-dark">{item.name}</span>
                </div>
                
                {/* Card Background Preview Area */}
                {/* FIX: Extracted asset data from className. 
                  Added bg-cover and bg-center for correct canvas clipping.
                  Implemented layered multi-background inline styling safely.
                */}
                <div 
                  className="flex-1 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${imgPath}'), url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')`
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}