import { Link } from 'react-router-dom';
import heroBanner from '../assets/images/hero-banner.jpg';

const stats = [
  { value: '2,500+', label: 'Happy Travelers' },
  { value: '40+', label: 'Destinations' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Travel Support' },
];

function Hero({ onOpenBooking }) {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen bg-cover bg-center flex items-center pt-36 md:pt-44 pb-20 text-white"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-forest-dark/90 via-brand-forest/75 to-black/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 w-full">
        <div className="max-w-2xl">
          <p className="inline-block text-xs md:text-sm font-heading font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/15 px-3 py-1.5 rounded-full mb-4 border border-brand-gold/30">
            ✦ AUTHENTIC EXPEDITIONS &amp; TAILORED HOLIDAYS
          </p>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-5 tracking-tight text-white">
            Your Journey. <span className="text-brand-gold">Our Passion.</span>
          </h1>

          <p className="font-body text-base md:text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
            Discover remarkable destinations with thoughtfully planned journeys,
            trusted service, and unforgettable travel experiences crafted for discerning explorers.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-7">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Explore Packages
            </Link>
            <button
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/30 hover:border-brand-gold hover:text-brand-gold backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              onClick={() => onOpenBooking('Custom Tailored Tour')}
            >
              Plan Custom Tour
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 border-t border-white/15 max-w-4xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-gold">
                {stat.value}
              </span>
              <span className="font-body text-xs sm:text-sm text-white/75 mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
