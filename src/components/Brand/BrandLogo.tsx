import { Download, X } from 'lucide-react';
import logoSort from '../../assets/logo/Logo_sort.svg';
import logoHvid from '../../assets/logo/Logo_hvid.svg';

// Logo component using real assets
function FreezerPalLogo({ variant = 'light' }: { variant?: 'light' | 'dark' | 'cream' | 'sort' }) {
  const isDark = variant === 'dark' || variant === 'sort';
  return (
    <img
      src={isDark ? logoHvid.src : logoSort.src}
      alt="Freezer-Pal logo"
      className="h-10 w-auto"
    />
  );
}

// Logo preview card
function LogoCard({
  label,
  bg,
  variant,
  showBorder = false,
  isInvalid = false,
  invalidReason,
}: {
  label: string;
  bg: string;
  variant?: 'light' | 'dark' | 'cream' | 'sort';
  showBorder?: boolean;
  isInvalid?: boolean;
  invalidReason?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={`relative flex items-center justify-center rounded-xl h-24 overflow-hidden ${bg} ${
          showBorder ? 'border border-black/10' : ''
        }`}
      >
        <FreezerPalLogo variant={variant} />

        {/* Invalid overlay */}
        {isInvalid && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-red-500 rounded-xl" />
            <div className="absolute top-1 right-1 bg-red-500 rounded-full p-0.5">
              <X className="w-3 h-3 text-white" />
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="100" y2="100" stroke="#EF4444" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        )}
      </div>
      <span className="text-xs text-brand-dark/60 font-medium">{label}</span>
      {invalidReason && (
        <span className="text-xs text-red-500">{invalidReason}</span>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-brand-dark/50 font-medium mb-3 mt-6 first:mt-0">{children}</p>
  );
}

export function BrandLogo() {
  return (
    <section id="logo" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">

        <div className="md:col-span-12 flex items-start justify-between">
          <h3 className="text-4xl font-display font-bold text-brand-dark">Logo</h3>
          <button className="flex items-center gap-2 bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark/80 transition-colors">
            <Download className="w-4 h-4" />
            Download Logo
          </button>
        </div>

        <div className="md:col-span-12">
          <div className="flex items-center justify-center bg-[#3D5A38] rounded-2xl h-48">
            <FreezerPalLogo variant="dark" />
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="bg-[#f0f4f1] rounded-2xl p-6 h-full">
            <p className="text-sm font-semibold text-brand-dark mb-1">Minimum størrelse</p>
            <p className="text-xs text-brand-dark/50 mb-5">
              Logoets bredde må ikke være mindre end 120px online og 40 mm i print.
            </p>
            <div className="flex items-end gap-6">
              <div className="flex flex-col items-center gap-2">
                <img src={logoSort.src} alt="Freezer-Pal logo" className="h-10 w-auto" />
                <div className="flex items-center gap-1">
                  <div className="h-px w-12 bg-brand-dark/30" />
                  <span className="text-[10px] text-brand-dark/40">160px</span>
                  <div className="h-px w-12 bg-brand-dark/30" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-60">
                <img src={logoSort.src} alt="Freezer-Pal logo" className="h-6 w-auto" />
                <div className="flex items-center gap-1">
                  <div className="h-px w-6 bg-brand-dark/30" />
                  <span className="text-[10px] text-brand-dark/40">80px</span>
                  <div className="h-px w-6 bg-brand-dark/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 h-full flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-white mb-1">Lyst on/dark logo</p>
              <p className="text-xs text-white/40 mb-5">
                Brug altid det lyse logo på mørke baggrunde.
              </p>
            </div>
            <div className="flex items-center justify-center py-4">
              <FreezerPalLogo variant="dark" />
            </div>
          </div>
        </div>

        <div className="md:col-span-12">
          <SectionLabel>Freezer-Pal Hvid Logo</SectionLabel>
          <div className="grid grid-cols-3 gap-4">
            <LogoCard label="FS Baggrund 4" bg="bg-[#FAF9F6]" variant="dark" showBorder />
            <LogoCard label="FS Billede" bg="bg-[#527a4d]" variant="dark" />
            <LogoCard label="FS Cream" bg="bg-[#e8e0d4]" variant="dark" showBorder />
          </div>
        </div>

        <div className="md:col-span-12">
          <SectionLabel>Freezer-Pal Sort Logo</SectionLabel>
          <div className="grid grid-cols-3 gap-4">
            <LogoCard label="FS Baggrund 4.1" bg="bg-[#FAF9F6]" variant="light" showBorder />
            <LogoCard label="FS Cream" bg="bg-[#e8e0d4]" variant="light" showBorder />
            <LogoCard label="FS Billede" bg="bg-[#527a4d]" variant="light" />
          </div>
        </div>

        <div className="md:col-span-12">
          <p className="text-sm font-semibold text-red-500 mb-3">Brug ikke disse varianter</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <LogoCard label="Misfarvet" bg="bg-[#527a4d]" variant="light" isInvalid invalidReason="Forkert farve" />
            <LogoCard label="Drop shadow" bg="bg-[#FAF9F6]" variant="light" isInvalid showBorder invalidReason="Drop shadow" />
            <LogoCard label="Outline" bg="bg-[#FAF9F6]" variant="light" isInvalid showBorder invalidReason="Outline" />
            <LogoCard label="Blur" bg="bg-[#3D5A38]" variant="dark" isInvalid invalidReason="Blur effekt" />
            <LogoCard label="Glass Effects" bg="bg-[#a3b8aa]" variant="light" isInvalid invalidReason="Glass effekt" />
            <LogoCard label="Rotate" bg="bg-[#FAF9F6]" variant="light" isInvalid showBorder invalidReason="Roteret" />
          </div>
        </div>

      </div>
    </section>
  );
}