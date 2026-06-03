import { Download } from 'lucide-react';
import { cn } from '../lib/utils';

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
    /* FIX: Added 'hidden lg:flex' to target visibility strictly to desktop viewports */
    <div className="hidden lg:flex lg:col-span-3 flex-col">
      {/* Standard semantic <aside> to bypass inherited component padding */}
      <aside className="sticky top-32 flex flex-col rounded-3xl bg-white shadow-lg shadow-brand-dark/5 overflow-hidden w-full">
        
        {/* Isolate the padding to the text content area only */}
        <div className="p-8 pb-10">
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
        
        {/* Flush Footer Button: mt-auto pushes it to the bottom, w-full guarantees edge-to-edge */}
        <button className="w-full mt-auto bg-brand-accent text-white font-bold py-6 px-4 flex items-center justify-center gap-4 hover:bg-brand-accent-hover transition-colors focus:outline-none">
          <Download className="w-8 h-8" />
          <div className="text-left leading-tight">
            <span className="block text-xl">Download alt</span>
          </div>
        </button>

      </aside>
    </div>
  );
}