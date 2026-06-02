import { Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Cta() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 6]);

  return (
    <section ref={containerRef} className="relative flex flex-col justify-center overflow-hidden bg-bg-base py-20 px-4 min-h-[90vh]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          style={{ scale }}
          className="w-[100vw] h-[100vw] md:w-[90vw] md:h-[90vw] lg:w-[80vw] lg:h-[80vw] xl:w-[70vw] xl:h-[70vw] bg-[#687C62] rounded-full flex-shrink-0 relative"
        >
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full text-center relative z-20">
        <p className="text-white/60 font-bold text-sm tracking-widest uppercase mb-6">START NU</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          Tag ejerskab over <span className="text-brand-accent">dit eget køkken.</span>
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Delt madplan, intelligent predictive indkøbsliste og komplet fryser overblik. Forbind dit hjem på få sekunder og se besparelses-balancen vokse!
        </p>

        <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold text-lg px-12 py-5 rounded-full transition-transform active:scale-95 shadow-[0_0_40px_rgba(170,221,74,0.3)] hover:shadow-[0_0_60px_rgba(170,221,74,0.5)]">
          Kom Igang
        </button>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Ingen binding</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> 620 aktive hjem i dag</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Fuldt udbytte</span>
        </div>
      </div>
    </section>
  );
}