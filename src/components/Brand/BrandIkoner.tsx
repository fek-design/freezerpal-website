import Indkøb from '../../assets/icons/Indkøb.svg';
import Lager from '../../assets/icons/Lager.svg';
import LogUd from '../../assets/icons/Log ud.svg';
import Opskrifter from '../../assets/icons/Opskrifter.svg';
import Plan from '../../assets/icons/Plan.svg';
import Profil from '../../assets/icons/Profil.svg';
import Tilbered from '../../assets/icons/Tilbered.svg';

const icons = [
  { src: Profil, label: 'Profil' },
  { src: Tilbered, label: 'Tilbered' },
  { src: Lager, label: 'Lager' },
  { src: Opskrifter, label: 'Opskrifter' },
  { src: Plan, label: 'Plan' },
  { src: Indkøb, label: 'Indkøb' },
  { src: LogUd, label: 'Log ud' },
];

export function BrandIkoner() {
  return (
    <section id="ikoner" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">

        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Ikoner</h3>
        </div>

        {/* Icon row */}
        <div className="md:col-span-12">
          <div className="bg-[#f0f4f1] rounded-2xl px-8 py-10 flex flex-wrap gap-8 items-center justify-start">
            {icons.map((icon) => (
              <div key={icon.label} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={icon.src.src}
                    alt={icon.label}
                    className="w-full h-full object-contain"
                    style={{ filter: 'invert(25%) sepia(20%) saturate(800%) hue-rotate(90deg) brightness(60%)' }}
                  />
                </div>
                <span className="text-xs text-brand-dark/50 font-medium">{icon.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dark variant */}
        <div className="md:col-span-12">
          <div className="bg-[#3D5A38] rounded-2xl px-8 py-10 flex flex-wrap gap-8 items-center justify-start">
            {icons.map((icon) => (
              <div key={icon.label} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={icon.src.src}
                    alt={icon.label}
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <span className="text-xs text-white/50 font-medium">{icon.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
