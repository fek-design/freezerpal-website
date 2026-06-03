import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '../lib/utils';
import { Calendar, ShoppingBasket, RefreshCw, TrendingUp } from 'lucide-react';
import benefitsImg from '../assets/images/benefits-girl-kitchen-splash.jpg';

const testimonials = [
  {
    name: 'Camilla M.',
    role: 'Mor til to',
    title: 'Endelig overblik over fryseren',
    text: 'Vi smider markant mindre mad ud, fordi appen husker vores fryserindhold. Den delte indkøbsliste og det simple design sparer os for meget tid i hverdagen.',
    avatarColor: 'bg-blue-100',
  },
  {
    name: 'Thomas K.',
    role: 'Familiefar',
    title: 'Genial til børnefamilier',
    text: 'Madplanen fungerer upåklageligt. Det minimalistiske design gør det nemt for både min kone og mig at opdatere køleskabsbeholdningen lynhurtigt. Ren kognitiv aflastning i ulvetimen.',
    avatarColor: 'bg-green-100',
  },
  {
    name: 'Amalie L.',
    role: 'Projektleder',
    title: 'Bedre end alternativerne',
    text: 'Vi brugte før Rema og Nemlig, men manglede fryser-overblikket. Denne app samler alt ét sted. Slut med at stresse over aftensmad og dobbelte indkøb.',
    avatarColor: 'bg-orange-100',
  }
];

const timelineSteps = [
  {
    id: 1,
    icon: Calendar,
    title: 'PLANLÆG',
    heading: '1. Planlæg din madplan digitalt',
    text: 'Appen kortlægger opskrifter på sekunder. Ud fra dine gemte ingredienser i frys og køleskab, finder Freezer Pal de mest økonomiske retter. Du mindsker indkøbsudgifterne drastisk.',
  },
  {
    id: 2,
    icon: ShoppingBasket,
    title: 'KØB IND',
    heading: '2. Køb ind med delt liste',
    text: 'Den smarte indkøbsliste synkroniserer lynhurtigt med resten af familien. Kryds af mens du køber ind, så intet bliver glemt eller købt dobbelt.',
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'OPDATER',
    heading: '3. Opdater beholdningen nemt',
    text: 'Når du kommer hjem, opdaterer du blot fryser- og køleskabsbeholdningen i appen. Kvitterings-scan gør det muligt at tilføje varer på få sekunder.',
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'SPAR',
    heading: '4. Spar penge og red klimaet',
    text: 'Ved at bruge Freezer Pal konsekvent, vil du se dit madspild falde drastisk. Spar over 1.500 kr. årligt og gør noget godt for miljøet.',
  }
];

export default function Benefits() {
  const [activeStep, setActiveStep] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeStep]);

  return (
    <section id="fordele" className="py-32 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headers */}
        <div className="text-center max-w-3xl mx-auto mb-20 gsap-fade-in">
          <p className="text-brand-light font-bold text-sm tracking-widest uppercase mb-4">Fordele</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
            Et fuldt økosystem til <span className="text-brand-light">din hverdagsmad</span>
          </h2>
          <p className="text-text-muted text-lg">
            Hvorfor lade resterne gå til spilde? Se hvordan Freezer Pal samler dine kummefryser-hemmeligheder og forvandler dem til velsmagende, nemme middage.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {testimonials.map((t, idx) => (
            <div key={idx} className="gsap-fade-in bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-gray-600", t.avatarColor)}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-dark">{t.name}</h4>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-brand-dark">{t.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-4xl mx-auto gsap-fade-in">
          <div className="z-10 relative flex justify-between items-start mb-16">
            {/* Connecting Line */}
            <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-200 -z-1" />
            
            {timelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div 
                  key={step.id} 
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                    isActive 
                      ? "bg-white border-brand-accent text-brand-dark scale-110 shadow-xl" 
                      : "bg-gray-50 border-white text-gray-400 group-hover:border-brand-accent/50"
                  )}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className={cn(
                    "mt-4 text-xs font-bold tracking-wider transition-colors",
                    isActive ? "text-brand-dark" : "text-gray-400"
                  )}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          <div ref={textContainerRef} className="text-center max-w-2xl mx-auto h-[120px]">
            <h4 className="font-bold text-lg text-brand-dark mb-3">{timelineSteps[activeStep].heading}</h4>
            <p className="text-text-muted leading-relaxed">
              {timelineSteps[activeStep].text}
            </p>
          </div>
        </div>

      </div>

      {/* Full width image banner */}
      <div className="w-full mt-32 relative h-[400px] overflow-hidden">
        <img 
          src={benefitsImg.src}
          alt="Woman looking in fridge"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-end p-8 md:p-16">
           <div className="text-white">
             <h3 className="text-5xl font-display font-bold leading-tight drop-shadow-lg">
               30 % Mere tid<br />
              i din hverdag
             </h3>
           </div>
        </div>
      </div>
    </section>
  );
}
