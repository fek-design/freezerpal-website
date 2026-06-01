import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Apple, Play, ArrowDown } from 'lucide-react';
import heroImg from '../assets/images/hero-bg-family.jpg';
import heroAppImg from '../assets/images/hero-screen.jpg';
export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phone = phoneRef.current;
    const container = containerRef.current;
    if (!phone || !container) return;

    // Spin in animation from the top
    gsap.fromTo(phone, 
      { 
        y: -800, 
        rotationZ: -180, 
        rotationX: 45,
        rotationY: -25,
        opacity: 0,
        scale: 0.5
      },
      { 
        y: 0, 
        rotationZ: 2, 
        rotationX: 5,
        rotationY: 25,
        scale: 1,
        opacity: 1, 
        duration: 1.8, 
        ease: 'power3.out',
        onComplete: () => {
          // Subtle floating animation starts after spin in
          gsap.to(phone, {
            y: "-=15",
            duration: 2.5,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
          });
        }
      }
    );

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Calculate mouse position relative to the center of the container (-1 to 1)
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      
      gsap.to(phone, {
        rotationY: 25 + (x * 15), 
        rotationX: 5 + (-y * 15), 
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] pt-32 pb-20 overflow-hidden bg-brand-dark flex items-center"
    >
      <div className="absolute inset-0 z-0">
         <img 
           src={heroImg.src}
           alt="Family in kitchen"
           className="w-full h-full object-cover opacity-100 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-brand-dark/10" />
         <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-light/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 md:mt-0">
        
        {/* 3D Simulated Phone Area (Left) */}
        <div className="lg:col-span-1 flex justify-center lg:justify-start lg:translate-x-12 xl:translate-x-24 relative h-[600px] perspective-[1000px] order-2 lg:order-1 pt-12 lg:pt-0">
          {/* We simulate the premium 3D phone look with CSS shadows and borders */}
          <div 
            ref={phoneRef}
            className="relative w-[300px] h-[610px] will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(5deg) rotateY(25deg) rotateZ(2deg)'
            }}
          >
            {/* 3D Sides / Bezel */}
            <div className="absolute inset-0 bg-[#444] rounded-[50px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]" style={{ transform: 'translateZ(-4px)' }} />
            <div className="absolute inset-0 bg-[#333] rounded-[50px]" style={{ transform: 'translateZ(-8px)' }} />
            <div className="absolute inset-0 bg-[#222] rounded-[50px]" style={{ transform: 'translateZ(-12px)' }} />
            <div className="absolute inset-0 bg-[#111] rounded-[50px]" style={{ transform: 'translateZ(-16px)' }} />
            <div className="absolute inset-0 bg-[#000] rounded-[50px]" style={{ transform: 'translateZ(-20px)' }} />

            {/* Front Face */}
            <div className="absolute inset-0 bg-black rounded-[50px] border-[6px] border-[#2a2a2a] overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
              {/* Phone Top Notch / Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-20" />
              
              {/* Screen Content */}
<div className="absolute inset-x-2 inset-y-2 rounded-[40px] bg-[#111111] overflow-hidden">
  
  {/* Fallback Text: Stays at z-0 */}
  <p className="text-white/40 text-xs font-mono absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
    [ App Image Loading... ]
  </p>

  {/* The Image: Absolute positioning breaks it out of flexbox constraints so object-cover works flawlessly */}
  <img 
    src={heroAppImg.src} 
    alt="App interface" 
    className="absolute inset-0 w-full h-full object-cover z-10" 
  />
</div>
              
              {/* Phone Edge Glint */}
              <div className="absolute inset-0 rounded-[44px] pointer-events-none border border-white/10" />
            </div>
          </div>

          {/* Floor Shadow */}
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black/50 blur-xl rounded-full" />
        </div>

        {/* Text Content & Download Buttons (Right) */}
<div className="lg:col-span-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left order-1 lg:order-2 mt-8 mb-16 lg:mb-0 lg:mt-0 gsap-fade-in relative z-10 w-full">
  
  <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.05] tracking-tight mb-12 text-white drop-shadow-lg">
    Mere tid i<br />
    hverdagen
  </h1>
  
  {/* Button Group: Must mathematically align with the heading */}
  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-[280px] sm:max-w-none mx-auto lg:mx-0"><button className="cursor-pointer w-full sm:w-auto text-white flex items-center justify-center gap-4 sm:gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 px-8 py-4 sm:px-6 sm:py-3 rounded-full transition-all h-[72px] sm:h-[64px] group">
              <Apple className="w-9 h-9 sm:w-8 sm:h-8 fill-current group-hover:scale-105 transition-transform" />
              <div className="text-left leading-tight">
                <div className="text-xs sm:text-[10px] font-medium text-white/90">Download on the</div>
                <div className="font-semibold text-xl sm:text-lg text-white">App Store</div>
              </div>
            </button>
            <button className="cursor-pointer w-full sm:w-auto text-white flex items-center justify-center gap-4 sm:gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 px-8 py-4 sm:px-6 sm:py-3 rounded-full transition-all h-[72px] sm:h-[64px] group">
              <Play className="w-8 h-8 sm:w-7 sm:h-7 fill-current group-hover:scale-105 transition-transform" />
              <div className="text-left leading-tight">
                <div className="text-xs sm:text-[10px] font-medium text-white/90">Get it on</div>
                <div className="font-semibold text-xl sm:text-lg text-white">Google Play</div>
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-8 right-8 text-white/50 animate-bounce cursor-pointer flex justify-center items-center">
        <ArrowDown className="w-8 h-8" />
      </div>
    </section>
  );
}
