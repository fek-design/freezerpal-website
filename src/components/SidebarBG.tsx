import { Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { LiquidGL, LiquidButton } from './LiquidGL';

export function SidebarBG({ activeSection }) {
  const navItems = [
    { id: 'logo', label: 'Logo' },
    { id: 'farver', label: 'Farver' },
    { id: 'fonte', label: 'Fonte' },
    { id: 'ikoner', label: 'Ikoner' },
    { id: 'baggrund', label: 'Baggrund' },
    { id: 'billede-stil', label: 'Billede stil' },
    { id: 'knapper', label: 'Knapper' },
  ];

  return (
    <div className="lg:col-span-3">
      <LiquidGL className="sticky top-32 overflow-hidden flex flex-col rounded-3xl bg-white shadow-lg shadow-brand-dark/5">
        
        <div className="p-8 pb-4">
          <h3 className="font-display font-bold text-2xl text-brand-dark mb-6">Brand Guide</h3>
          <div className="h-px bg-brand-dark/10 w-full mb-6"></div>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "text-lg transition-colors",
                  activeSection === item.id 
                    ? "text-brand-light font-bold" 
                    : "text-brand-dark hover:text-brand-light"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 border-t border-brand-dark/5 bg-brand-accent">
          <LiquidButton className="w-full text-white font-bold py-6 px-4 flex items-center justify-center gap-4 border-none border-t-0 rounded-none rounded-b-3xl hover:bg-brand-accent-hover transition-colors">
            <Download className="w-8 h-8" />
            <div className="text-left leading-tight">
              <span className="block text-xl">Download alt</span>
            </div>
          </LiquidButton>
        </div>

      </LiquidGL>
    </div>
  );
}