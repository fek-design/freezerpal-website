export function BrandBackgrounds() {
  const bgStyles = [
    { name: 'Baggrund 1', bg: 'bg-[#527a4d]' },
    { name: 'Baggrund 1.2', bg: 'bg-[#3D5A38]' },
    { name: 'Baggrund 2', bg: 'bg-[#e2e8e4]' },
    { name: 'Baggrund 2.2', bg: 'bg-[#a3b8aa]' },
    { name: 'Baggrund 3', bg: 'bg-[#7a9d82]' },
    { name: 'Baggrund 3.2', bg: 'bg-[#cad6ce]' }, // Removed gradient
    { name: 'Baggrund 4', bg: 'bg-[#FAF9F6]' },   // Removed gradient
    { name: 'Baggrund 4.2', bg: 'bg-[#3D5A38]' },
  ];

  return (
    <section id="baggrund" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-brand-dark/10 pt-16">
        
        {/* Section Header */}
        <div className="md:col-span-12">
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-8">Baggrund</h3>
        </div>
        
        {/* Grid Container */}
        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {bgStyles.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col h-64 rounded-2xl border border-black/10 overflow-hidden shadow-sm bg-white"
            >
              {/* Card Header Strip */}
              <div className="h-12 flex items-center px-4 border-b border-black/5 bg-white">
                <span className="text-sm font-medium text-brand-dark">{item.name}</span>
              </div>
              
              {/* Card Background Preview Area */}
              <div 
                className={`flex-1 w-full ${item.bg} bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')]`}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}