import { Play } from 'lucide-react';
import { Apple } from 'lucide-react';
import { LiquidButton } from '../LiquidGL';

export function BrandButtons() {
  return (
    <section id="knapper" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">
        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Knapper</h3>
        </div>
        <div className="md:col-span-12 flex flex-wrap items-center gap-6">
          
          <LiquidButton className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold text-lg px-12 py-3.5 rounded-full transition-transform active:scale-95 border-none shadow-none">
            HENT APPEN
          </LiquidButton>

          <button className="text-white flex items-center justify-center gap-3 bg-[#c7cfc9] hover:bg-[#b0b9b3] border-none px-6 py-2.5 rounded-full transition-all h-[56px] group">
            <Play className="w-6 h-6 fill-current group-hover:scale-105 transition-transform" />
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-white/90">Get it on</div>
              <div className="text-[18px] font-bold mt-[-2px]">Google Play</div>
            </div>
          </button>

          <button className="text-white flex items-center justify-center gap-3 bg-[#c7cfc9] hover:bg-[#b0b9b3] border-none px-6 py-2.5 rounded-full transition-all h-[56px] group">
            <Apple className="w-6 h-6 fill-current group-hover:scale-105 transition-transform" />
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium text-white/90">Download on the</div>
              <div className="text-[18px] font-bold mt-[-2px]">App Store</div>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
