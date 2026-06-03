import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 0,
    chapter: 'KAPITEL 1: OVERBLIKKET',
    title: '"Du ejer mere mad, end du kender til."',
    text: 'Den gennemsnitlige dansker smider fødevarer for over 1.500 kr. direkte i skraldespanden fra fryseren hvert år, blot fordi det bliver glemt bagest i skuffen. Freezer Pal husker og kategoriserer alt fra kød to rester med smarte kvitterings-scans.',
    colorBg: 'from-green-900 to-black',
    imageSrc: '/images/how-it-works-phone1.jpg', 
  },
  {
    id: 1,
    chapter: 'KAPITEL 2: PLANLÆG',
    title: '"Fælles madplan synkronisering."',
    text: 'Generer en komplet madplan for ugen baseret primært på de varer, du allerede har. Det reducerer dine indkøb og tømmer fryseren strategisk før nye varer kommer til.',
    colorBg: 'from-green-900 to-black',
    imageSrc: '/images/how-it-works-phone2.jpg',
  },
  {
    id: 2,
    chapter: 'KAPITEL 3: INDKØB',
    title: '"Live dele-indkøbsliste."',
    text: 'Den delte indkøbsliste opdateres live mellem familiemedlemmer. Slut med at købe mælk, når din partner allerede har gjort det.',
    colorBg: 'from-green-900 to-black',
    imageSrc: '/images/how-it-works-phone3.jpg',
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height;
      
      const progress = -rect.top / (totalHeight - window.innerHeight);
      const clampedProgress = Math.min(Math.max(progress, 0), 1.0);
      
      let stage = Math.floor(clampedProgress * 3);
      if (stage >= 3) stage = 2;
      
      setActiveStage(stage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStep = steps[activeStage] || steps[0];

  return (
    <>
    {/* Section Header Context - pt-24 reduced to pt-12 */}
    <div className="bg-bg-base text-center max-w-3xl mx-auto pt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2 lg:mb-4">
        Tre nemme trin til <span className="text-brand-light">total madkontrol</span>
      </h2>
      <p className="text-text-muted text-sm sm:text-base lg:text-lg">
        Rul ned over trinnene og se, hvordan skærmene indeni den interaktive smartphone opdaterer sig i realtid.
      </p>
    </div>
    
    {/* Scroll Engine Track */}
    <section id="udforsk" ref={containerRef} className="bg-bg-base relative h-[400vh]">
      {/* Sticky container - Compressed inner paddings down to pt-4 pb-4 lg:pt-6 lg:pb-10 */}
      <div className="sticky top-0 h-[100dvh] lg:h-screen w-full flex flex-col justify-center pt-4 pb-4 lg:pt-6 lg:pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-24">
            
            {/* Left Box: Dynamic Copy Elements */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-[10px] sm:text-xs font-bold text-brand-dark tracking-widest uppercase mb-2 lg:mb-4">
                    {currentStep.chapter}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-brand-dark mb-3 lg:mb-6 leading-tight">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed mb-4 lg:mb-6">
                    {currentStep.text}
                  </p>
                  <div className="flex items-center gap-4 text-brand-dark text-xs sm:text-sm font-medium border-b border-brand-dark/20 pb-2 max-w-max">
                    Scroll ned for at planlægge maden
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Visual Track Indicators */}
              <div className="mt-4 lg:mt-12 flex items-center gap-2">
                 {steps.map((step) => (
                   <div 
                    key={step.id} 
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      activeStage === step.id ? "w-8 sm:w-12 bg-brand-dark" : "w-3 sm:w-4 bg-gray-300"
                    )} 
                   />
                 ))}
              </div>
            </div>

            {/* Right Box: Programmatic 3D Hardware Display - lg:pb-12 removed */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center perspective-[2000px] mt-4 lg:mt-0">
              <div 
                className="relative w-[210px] sm:w-[260px] h-[410px] sm:h-[500px] lg:h-[70vh] lg:max-h-[620px] lg:w-[min(320px,35vh)] transition-transform duration-700 ease-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${-15 + (activeStage * 10)}deg) rotateX(5deg)` 
                }}
              >
                {/* Hardware 3D Bezel Layers */}
                <div className="absolute inset-0 bg-[#444] rounded-[50px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]" style={{ transform: 'translateZ(-2px)' }} />
                <div className="absolute inset-0 bg-[#333] rounded-[50px]" style={{ transform: 'translateZ(-5px)' }} />
                <div className="absolute inset-0 bg-[#222] rounded-[50px]" style={{ transform: 'translateZ(-10px)' }} />
                <div className="absolute inset-0 bg-[#111] rounded-[50px]" style={{ transform: 'translateZ(-15px)' }} />
                <div className="absolute inset-0 bg-[#000] rounded-[50px]" style={{ transform: 'translateZ(-20px)' }} />

                {/* Glass Layer housing the screen content */}
                <div 
                  className="absolute inset-0 bg-black rounded-[50px] border-[10px] border-[#111111] overflow-hidden"
                  style={{ transform: 'translateZ(0px)' }}
                >
                  {/* Native iOS Camera Element */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-20" />
                  
                  {/* LCD Pipeline matrix */}
                  <div className="absolute inset-0 bg-[#111111] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`screen-${currentStep.id}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 p-2"
                      >
                        {/* Internal Display Mask */}
                        <div className="rounded-[40px] w-full h-full bg-[#1A1A1A] overflow-hidden absolute inset-0">
                          {/* Fallback text layer pinned below image */}
                          <p className="text-white/40 text-[10px] font-mono absolute inset-0 flex items-center justify-center text-center px-4 z-0 pointer-events-none">
                            [ Indlæser: {currentStep.imageSrc} ]
                          </p>
                          
                          <img 
                            src={currentStep.imageSrc}
                            alt={`App Step ${currentStep.id + 1}`} 
                            className="absolute inset-0 w-full h-full object-cover z-10" 
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}