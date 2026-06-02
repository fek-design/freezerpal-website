import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex text-white font-display font-bold text-xl items-center gap-2">
          <Logo className="text-white" />
          <span>Freezer Pal</span>
        </div>

        <div className="text-white/50 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Freezer Pal. Alle rettigheder forbeholdes. Skabt i Norden til at mindske globalt madspild.
        </div>

        <div className="flex gap-6 text-sm text-white/50">
          <a href="/brand-guide" className="hover:text-white transition-colors">Brand Guide</a>
          <a href="#" className="hover:text-white transition-colors">Privatlivspolitik</a>
          <a href="#" className="hover:text-white transition-colors">Betingelser</a>
        </div>
      </div>
    </footer>
  );
}
