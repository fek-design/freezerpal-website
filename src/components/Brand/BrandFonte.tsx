const alphabet = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, æ, ø, å';

function FontCard({
  label,
  sublabel,
  fontFamily,
  bold = false,
}: {
  label: string;
  sublabel: string;
  fontFamily: string;
  bold?: boolean;
}) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-black/8 shadow-sm">
      {/* Info top */}
      <div className="bg-white px-5 py-4">
        <p className="text-base font-semibold text-brand-dark">{label}</p>
        <p className="text-sm text-brand-dark/50">{sublabel}</p>
      </div>

      {/* Preview swatch */}
      <div className="bg-[#3D5A38] flex flex-col items-start justify-between px-8 pt-6 pb-8 flex-1">
        {/* Big Aa */}
        <div
          className="text-[#FFFBF2] leading-none select-none w-full"
          style={{
            fontFamily,
            fontWeight: bold ? 700 : 400,
            fontSize: 'clamp(80px, 18vw, 180px)',
          }}
        >
          Aa
        </div>

        {/* Alphabet */}
        <p
          className="text-[#FFFBF2]/90 text-sm leading-relaxed mt-6"
          style={{
            fontFamily,
            fontWeight: bold ? 700 : 400,
          }}
        >
          {alphabet}
        </p>
      </div>
    </div>
  );
}

export function BrandFonte() {
  return (
    <section id="fonte" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">

        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Fonte</h3>
        </div>

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FontCard
            label="Rubrik"
            sublabel="Stack Sans Headline — Bold"
            fontFamily="'Rubik', sans-serif"
            bold
          />
          <FontCard
            label="Brødtekst"
            sublabel="Inter — Regular"
            fontFamily="'Inter', sans-serif"
            bold={false}
          />
        </div>

      </div>
    </section>
  );
}
