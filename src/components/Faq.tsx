import { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Hvordan er I anderledes end Rema 1000's eller Nemlig.com's app?",
    a: "Modsat supermarkedernes apps, som er designet til at få dig til at købe mere, er Freezer Pal designet til at give dig overblik over det, du *allerede* har. Vi tjener ikke penge på dine dagligvarekøb."
  },
  {
    q: "Hvem ejer mine data og hvad kan den bruges til?",
    a: "Du ejer dine egne data. Vi sælger aldrig din spisehistorik eller fryserbeholdning til tredjepart (som f.eks. supermarkeder eller annoncører)."
  },
  {
    q: "Kræver det en masse manuelt taste arbejde hver gang jeg handler?",
    a: "Nej, vores smarte kvitterings-scanner gør det muligt at opdatere lageret på under 5 sekunder ved hjælp af AI-genkendelse."
  },
  {
    q: "Kan min partner og mine børn logge på samme konto?",
    a: "Ja, et Freezer Pal abonnement dækker hele husstanden. I kan invitere hinanden og dele overblik og indkøbsliste i realtid."
  }
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Calculator State
  const [members, setMembers] = useState(2);
  const [frequency, setFrequency] = useState<'Sjældent' | 'Nogle gange' | 'Ofte' | 'Hele Tiden'>('Nogle gange');

  // Simple hardcoded math for mockup purposes
  const wasteMultiplier = 
    frequency === 'Sjældent' ? 0.5 :
    frequency === 'Nogle gange' ? 1 :
    frequency === 'Ofte' ? 1.5 : 2;

  const basicCostPerPerson = 250; // kr
  const lostPerMonth = Math.round(members * basicCostPerPerson * wasteMultiplier);
  const savedPerMonth = Math.round(lostPerMonth * 0.85); // 85% reduction estimate
  const co2SavedYearly = Math.round(members * 25 * wasteMultiplier); // kg

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 gsap-fade-in">
          <p className="text-brand-dark font-bold text-sm tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
            Spørgsmål & svar om <span className="text-brand-light">Freezer Pal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Calculator */}
          <div className="lg:col-span-6 bg-bg-base rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden gsap-fade-in">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
              KØKKEN-REGNSKAB BEREGNER
            </h4>
            <h3 className="text-3xl font-display font-bold text-brand-dark mb-4 leading-tight">
              Hvad koster dit madspild dig lige nu?
            </h3>
            <p className="text-text-muted mb-8 text-sm">
              Drag skyderne for at modtage dit skræddersyede spildestimat baseret på gennemsnitlige danske dagligvarepriser.
            </p>

            <div className="space-y-8 mb-10 relative z-10">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold text-brand-dark">Antal familiemedlemmer:</label>
                  <span className="text-sm font-bold bg-white px-3 py-1 rounded-full border border-gray-200">
                    {members} Personer
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  value={members} 
                  onChange={(e) => setMembers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-accent hover:accent-brand-accent-hover"
                />
              </div>

              {/* Toggles */}
              <div>
                <label className="text-sm font-semibold text-brand-dark block mb-4">Hvor ofte smider i mad ud?</label>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  {['Sjældent', 'Nogle gange', 'Ofte', 'Hele Tiden'].map(freq => (
                    <button
                      key={freq}
                      onClick={() => setFrequency(freq as any)}
                      className={cn(
                        "py-2 px-2 text-xs font-semibold rounded-full border transition-colors",
                        frequency === freq 
                          ? "bg-brand-dark border-brand-dark text-white" 
                          : "color-bg-alt border-gray-200 text-text-muted hover:border-brand-accent"
                      )}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
              <div className="bg-[#FFF4EC] rounded-2xl p-4 border border-[#FFE4D6]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#A0522D] mb-2 leading-tight">Tabt om måneden</p>
                <p className="text-xl font-bold text-brand-dark mb-1">{lostPerMonth} kr.</p>
                <p className="text-[10px] text-brand-dark/60 leading-tight">Direkte ud med affaldsposen</p>
              </div>
              <div className="bg-[#F0FBE5] rounded-2xl p-4 border border-[#D5ECAE]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-light mb-2 leading-tight">Din Freezer-Gevinst</p>
                <p className="text-xl font-bold text-brand-dark mb-1">-{savedPerMonth} kr.</p>
                <p className="text-[10px] text-brand-dark/60 leading-tight">Sparret på kontoen</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2 leading-tight">Årlig CO2 Gevinst</p>
                <p className="text-xl font-bold text-brand-dark mb-1">{co2SavedYearly} kg</p>
                <p className="text-[10px] text-brand-dark/60 leading-tight">Svarer til cykelture</p>
              </div>
            </div>

            <p className="text-xs text-brand-light/70 font-medium relative z-10 bg-brand-accent/10 p-3 rounded-xl border border-brand-accent/20">
              Ved at lade Freezer Pal organisere jeres frys, sparer I ca. {savedPerMonth * 12} kr. om året. Pengene udbetales som ren råderums-øgning!
            </p>

          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-center gsap-fade-in">
            <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
              OFTE STILLEDE SPØRGSMÅL
            </h4>
            <h3 className="text-3xl font-display font-bold text-brand-dark mb-10 leading-tight">
              Nedbryd enhver tvivl
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border-b border-gray-200">
                    <button 
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex justify-between items-center text-left py-6 focus:outline-none group"
                    >
                      <span className="font-semibold text-brand-dark pr-8 group-hover:text-brand-accent transition-colors">
                        {faq.q}
                      </span>
                      <span className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                        isOpen ? "bg-brand-dark border-brand-dark text-white rotate-45" : "bg-gray-50 border-gray-200 text-gray-500 group-hover:border-brand-accent group-hover:text-brand-accent"
                      )}>
                        <Plus className="w-5 h-5" />
                      </span>
                    </button>
                    <div 
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <p className="text-text-muted leading-relaxed pb-6 text-sm pt-2">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 font-bold text-brand-dark">🔒</div>
              <div>
                <h5 className="font-bold text-sm text-brand-dark">GDPR-Kompatibel & Krypteret</h5>
                <p className="text-xs text-text-muted mt-1">Dine oplysninger synkroniseres udelukkende over krypterede HTTPS-linjer og gemmes sikkert.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
