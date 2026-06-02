import { useEffect, useState, useRef } from 'react';
import { User } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { LiquidButton } from './LiquidGL';

interface NavbarProps {
  pathname?: string;
}

export default function Navbar({ pathname = '/' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const isBrandPage = pathname === '/brand';
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle transparent vs glass background
      setScrolled(currentScrollY > 20);

      // Handle visibility (smart navbar)
      if (currentScrollY < 50) {
        // Always show at the top
        setVisible(true);
      } else {
        // If scrolling down, hide; if scrolling up, show
        if (currentScrollY > lastScrollY.current + 10) {
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current - 10) {
          setVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTextClass = isBrandPage 
    ? (scrolled ? 'text-brand-dark' : 'text-brand-dark') 
    : (scrolled ? 'text-text-main' : 'text-white/90');
    
  const logoTextClass = isBrandPage
    ? 'text-brand-dark'
    : (scrolled ? 'text-brand-dark' : 'text-white');

  const logoIconClass = isBrandPage
    ? 'text-brand-dark'
    : (scrolled ? 'text-brand-dark' : 'text-white');

  const btnIconClass = isBrandPage
    ? (scrolled ? 'text-text-main hover:bg-black/5' : 'text-brand-dark hover:bg-black/5')
    : (scrolled ? 'text-text-main hover:bg-black/5' : 'text-white hover:bg-white/10');

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8',
        scrolled ? 'py-4' : 'py-6',
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-7xl flex items-center justify-between rounded-full px-6 py-3 transition-colors duration-300',
          scrolled ? 'glass shadow-sm dark:glass-dark' : 'bg-transparent'
        )}
      >
        <div className="flex items-center gap-2">
          {/* Logo */}
          <a href="/" className="flex font-display font-bold text-xl items-center gap-2">
            <Logo className={logoIconClass} />
            <span className={logoTextClass}>Freezer Pal</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className={cn("hidden md:flex items-center gap-8 text-sm font-medium", navTextClass)}>
          <a href="/#fordele" className="hover:text-brand-accent transition-colors">Fordele</a>
          <a href="/#udforsk" className="hover:text-brand-accent transition-colors">Udforsk</a>
          <a href="/#faq" className="hover:text-brand-accent transition-colors">FAQ</a>
          <a href="/brand-guide" className="hover:text-brand-accent transition-colors">Brand Guide</a>
        </div>

        <div className="flex items-center gap-4">
          <button className={cn("p-2 rounded-full transition-colors", btnIconClass)}>
             <User className="w-5 h-5" />
          </button>
          <LiquidButton className="font-semibold px-6 py-2.5 rounded-full text-sm text-brand-dark">
            HENT APPEN
          </LiquidButton>
        </div>
      </div>
    </nav>
  );
}

