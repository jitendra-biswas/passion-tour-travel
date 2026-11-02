import { Link } from 'react-router-dom';
import { destinationsData } from '../data';

function Popular({ onOpenBooking, limit = 3 }) {
  const items = limit ? destinationsData.slice(0, limit) : destinationsData;

  return (
    <section className="py-20" id="destination">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-2">
            Handpicked Locations
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-forest mb-4">
            Featured Destinations
          </h2>
          <p className="font-body text-brand-gray text-base leading-relaxed">
            Curated travel routes crafted for discerning explorers seeking rich
            culture, iconic vistas, and authentic local encounters.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((dest) => (
            <li key={dest.id} className="flex">
              <div className="bg-white rounded-xl overflow-hidden border border-brand-border/70 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col w-full group">
                <figure className="relative h-60 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 right-3 bg-brand-forest text-brand-gold text-xs font-heading font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                    From ${dest.price}
                  </span>
                </figure>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-brand-gold text-sm mb-2">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="font-heading text-xs font-semibold text-brand-red uppercase tracking-wider mb-1">
                    {dest.country}
                  </p>

                  <h3 className="font-heading font-bold text-xl text-brand-forest mb-2.5">
                    {dest.title}
                  </h3>

                  <p className="font-body text-sm text-brand-gray leading-relaxed mb-6 flex-grow">
                    {dest.description}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60">
                    <button
                      className="flex-1 py-2.5 px-4 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-sm transition-all duration-200 cursor-pointer text-center"
                      onClick={() => onOpenBooking(dest.title)}
                    >
                      Book Trip
                    </button>
                    {limit && (
                      <Link
                        to="/destinations"
                        className="py-2.5 px-4 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-brand-forest bg-brand-ivory hover:bg-brand-forest hover:text-white border border-brand-border transition-all duration-200 text-center"
                      >
                        Details
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {limit && (
          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Explore All Destinations
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Popular;
