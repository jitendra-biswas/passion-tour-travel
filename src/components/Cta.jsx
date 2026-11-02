import { Link } from 'react-router-dom';

function Cta({ onOpenBooking }) {
  return (
    <section className="py-20 bg-brand-forest text-white relative overflow-hidden" id="contact">
      {/* Decorative background circle */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-brand-forest-light/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold mb-2">
            Your Next Chapter Awaits
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight text-white mb-4">
            Ready for an Unforgettable Journey? Let&apos;s Plan Together.
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Speak directly with our destination specialists to customize private itineraries,
            trekking adventures, and seamless holiday packages.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            onClick={() => onOpenBooking('Custom Holiday Consultation')}
          >
            <span className="text-lg">
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <span>Book Now</span>
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-brand-gold hover:text-brand-gold backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Contact Travel Desk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
