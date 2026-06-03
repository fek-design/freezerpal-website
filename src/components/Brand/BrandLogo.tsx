import { Download } from 'lucide-react';
import { cn } from '../../lib/utils';

// Main Assets
import logoSort from '../../assets/logo/Logo_sort.svg';
import logoHvid from '../../assets/logo/Logo_hvid.svg';
import bg1 from '../../assets/images/Baggrund 4.2.svg';
import img1 from '../../assets/images/image 103.jpg';

// Violation Assets
import blurLogo from '../../assets/logo/Blur_Logo.svg';
import dropShadowLogo from '../../assets/logo/Dropshadow_Logo.svg';
import glassLogo from '../../assets/logo/Glass_Logo.svg';
import outlineLogo from '../../assets/logo/Outline_Logo.svg';
import pinkLogo from '../../assets/logo/Pink_Logo.svg';
import rotereLogo from '../../assets/logo/Rotere_Logo.svg';

interface FreezerPalLogoProps {
  variant?: 'light' | 'dark' | 'cream' | 'sort' | 'misfarvet';
}

function FreezerPalLogo({ variant = 'light' }: FreezerPalLogoProps) {
  const isDark = variant === 'dark' || variant === 'sort';
  const isMisfarvet = variant === 'misfarvet';
  
  return (
    <img
      src={isDark ? logoHvid.src : logoSort.src}
      alt="Freezer-Pal logo"
      className="h-9 w-auto relative z-10"
      style={isMisfarvet ? { filter: 'invert(41%) sepia(82%) saturate(3450%) hue-rotate(314deg) brightness(100%) contrast(102%)' } : undefined}
    />
  );
}

interface LogoCardProps {
  label: string;
  bg: string;
  variant?: 'light' | 'dark' | 'cream' | 'sort' | 'misfarvet';
  isInvalid?: boolean;
  invalidReason?: string;
  imageBg?: string; 
  overrideImgSrc?: string;
}

function LogoCard({
  label,
  bg,
  variant,
  isInvalid = false,
  invalidReason,
  imageBg,
  overrideImgSrc,
}: LogoCardProps) {
  const isDarkLogo = variant === 'light' || variant === 'sort' || variant === 'misfarvet';

  return (
    <div className="flex flex-col h-40 rounded-2xl border border-black/10 overflow-hidden shadow-sm bg-white relative">
      
      <div className="h-10 flex items-center px-4 border-b border-black/5 bg-white relative z-30">
        <span className="text-xs font-medium text-brand-dark">{label}</span>
      </div>
      
      <div
        className={cn(
          "flex-1 w-full relative flex items-center justify-center bg-cover bg-center",
          bg
        )}
        style={imageBg ? { backgroundImage: `url('${imageBg}')` } : undefined}
      >
        {imageBg && (
          <div 
            className={cn(
              "absolute inset-0 z-0 pointer-events-none",
              isDarkLogo ? "bg-white/25" : "bg-black/15"
            )} 
          />
        )}

        {overrideImgSrc ? (
          <img src={overrideImgSrc} alt={`${label} violation`} className="h-12 w-auto relative z-10" />
        ) : (
          <FreezerPalLogo variant={variant} />
        )}

        {isInvalid && !overrideImgSrc && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="0" y1="100" x2="100" y2="0" stroke="#FF0000" strokeWidth="3" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        )}
      </div>
      
      {invalidReason && !overrideImgSrc && (
        <div className="absolute bottom-1 left-3 z-30">
          <span className="text-[10px] font-medium text-red-500 bg-white/90 px-1.5 py-0.5 rounded-md shadow-sm border border-red-100">{invalidReason}</span>
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xl font-display font-bold text-brand-dark mb-4 mt-8 first:mt-0">{children}</h4>
  );
}

export function BrandLogo() {
  return (
    <section id="logo" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">

        {/* Main Title Banner */}
        <div className="md:col-span-12 flex items-start justify-between">
          <h3 className="text-4xl font-display font-bold text-brand-dark">Logo</h3>
          <button className="flex items-center gap-2 bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark/80 transition-colors shadow-sm focus:outline-none">
            <Download className="w-4 h-4" />
            Download Logo
          </button>
        </div>

        {/* Large Brand Showcase Anchor */}
        <div className="md:col-span-12">
          <div className="flex items-center justify-center bg-[#3D5A38] rounded-2xl h-48 shadow-inner">
            <FreezerPalLogo variant="dark" />
          </div>
        </div>

        {/* Minimum Sizing Constraints */}
        <div className="md:col-span-7">
          <div className="bg-[#f0f4f1] rounded-2xl p-6 h-full border border-brand-dark/5">
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

        {/* Color Contrast Policy */}
        <div className="md:col-span-5">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 h-full flex flex-col justify-between shadow-md">
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

        {/* Row 1: Freezer-Pal Hvid Logo */}
        <div className="md:col-span-12 mt-4">
          <SectionLabel>Freezer-Pal Hvid Logo</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <LogoCard
              label="På Baggrund 4"
              bg="bg-[#FAF9F6]"
              variant="dark"
              imageBg={bg1.src}
            />
            <LogoCard
              label="På Billede"
              bg="bg-[#527a4d]"
              variant="dark"
              imageBg={img1.src}
            />
            <LogoCard 
              label="På Cream" 
              bg="bg-[#e8e0d4]" 
              variant="dark" 
              isInvalid={true} 
            />
          </div>
        </div>

        {/* Row 2: Freezer-Pal Sort Logo */}
        <div className="md:col-span-12 mt-4">
          <SectionLabel>Freezer-Pal Sort Logo</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <LogoCard 
              label="På Baggrund 4.2" 
              bg="bg-[#FFFFFF]" 
              variant="light" 
              imageBg={bg1.src} 
            />
            <LogoCard 
              label="På Billede" 
              bg="bg-[#527a4d]" 
              variant="light" 
              imageBg={img1.src} 
              isInvalid={true}
            />
            <LogoCard 
              label="På Cream" 
              bg="bg-[#e8e0d4]" 
              variant="light" 
            />
          </div>
        </div>

        {/* Violation Matrix Module */}
        <div className="md:col-span-12 mt-8">
          <h4 className="text-lg font-bold text-red-600 mb-4 tracking-tight">Brug ikke disse varianter</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <LogoCard label="Misfarve" bg="bg-brand-dark" overrideImgSrc={pinkLogo.src} />
            <LogoCard label="Drop shadow" bg="bg-brand-dark" overrideImgSrc={dropShadowLogo.src} />
            <LogoCard label="Outline" bg="bg-brand-dark" overrideImgSrc={outlineLogo.src} />
            <LogoCard label="Blur" bg="bg-brand-dark" overrideImgSrc={blurLogo.src} />
            <LogoCard label="Glass Effects" bg="bg-brand-dark" overrideImgSrc={glassLogo.src} />
            <LogoCard label="Roterer" bg="bg-brand-dark" overrideImgSrc={rotereLogo.src} />
          </div>
        </div>

      </div>
    </section>
  );
}