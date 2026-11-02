import Package from '../components/Package';

function Packages({ onOpenBooking }) {
  return (
    <article className="pt-28 md:pt-36">
      {/* Page Banner */}
      <section className="bg-brand-forest py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest-dark via-brand-forest to-black/70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 text-center max-w-3xl">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold mb-3">
            TOUR PACKAGES
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">
            Signature Holiday Packages
          </h1>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Curated travel packages complete with vetted accommodations, private transfers, and experienced local guides.
          </p>
        </div>
      </section>

      <div>
        <Package onOpenBooking={onOpenBooking} limit={null} />
      </div>
    </article>
  );
}

export default Packages;
