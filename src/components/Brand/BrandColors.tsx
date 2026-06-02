import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const colors = [
  {
    name: 'Tactical Olive',
    hex: '#3D5A38',
    rgb: 'RGB: 61, 90, 56',
    textDark: false,
  },
  {
    name: 'Crisp Ivory',
    hex: '#FFFBF2',
    rgb: 'RGB: 255, 251, 242',
    textDark: true,
  },
  {
    name: 'Kinetic Chartreuse',
    hex: '#AFE648',
    rgb: 'RGB: 175, 230, 72',
    textDark: true,
  },
];

function ColorCard({ name, hex, rgb, textDark }: {
  name: string;
  hex: string;
  rgb: string;
  textDark: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-black/8 shadow-sm">
      {/* Info top */}
      <div className="bg-white px-5 py-4 flex flex-col gap-0.5">
        <span className="text-base font-semibold text-brand-dark">{name}</span>
        <span className="text-sm text-brand-dark/50">{hex}</span>
        <span className="text-sm text-brand-dark/40">{rgb}</span>
      </div>

      {/* Color swatch bottom */}
      <div
        className="relative flex-1 min-h-36 flex items-end justify-end p-3"
        style={{ backgroundColor: hex }}
      >
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
            textDark
              ? 'bg-black/10 hover:bg-black/20 text-black/60'
              : 'bg-white/15 hover:bg-white/25 text-white/80'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Kopieret
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Kopier
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function BrandColors() {
  return (
    <section id="farver" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">

        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Farver</h3>
        </div>

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {colors.map((color) => (
            <ColorCard key={color.hex} {...color} />
          ))}
        </div>

      </div>
    </section>
  );
}
