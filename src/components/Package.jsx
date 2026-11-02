import { Link } from 'react-router-dom';
import { packagesData } from '../data';

function Package({ onOpenBooking, limit = 3 }) {
  const items = limit ? packagesData.slice(0, limit) : packagesData;

  return (
    <section className="py-20" id="package">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-2">
            Curated Itineraries
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-forest mb-4">
            Signature Holiday Packages
          </h2>
          <p className="font-body text-brand-gray text-base leading-relaxed">
            Comprehensive travel experiences complete with vetted accommodations,
            seamless private transfers, and insightful cultural excursions.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((pkg) => (
            <li key={pkg.id} className="flex">
              <div className="bg-white rounded-xl overflow-hidden border border-brand-border/70 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col w-full group">
                <figure className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </figure>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-bold text-xl text-brand-forest mb-2.5">
                    {pkg.title}
                  </h3>

                  <p className="font-body text-sm text-brand-gray leading-relaxed mb-5 flex-grow">
                    {pkg.description}
                  </p>

                  {/* Meta items */}
                  <ul className="flex items-center justify-between py-3 border-y border-brand-border/60 text-xs text-brand-forest/90 font-heading font-semibold mb-5">
                    <li className="flex items-center gap-1.5">
                      <span className="text-brand-red text-base">
                        <ion-icon name="time"></ion-icon>
                      </span>
                      <span>{pkg.duration}</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-brand-red text-base">
                        <ion-icon name="people"></ion-icon>
                      </span>
                      <span>{pkg.pax}</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-brand-red text-base">
                        <ion-icon name="location"></ion-icon>
                      </span>
                      <span>{pkg.location}</span>
                    </li>
                  </ul>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="flex items-center gap-1 text-brand-gold text-xs mb-0.5">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <span className="text-brand-gray ml-1 text-[11px] font-body">
                          {pkg.reviews}
                        </span>
                      </div>
                      <p className="font-heading font-extrabold text-2xl text-brand-forest">
                        ${pkg.price}
                        <span className="text-xs font-normal text-brand-gray font-body ml-1">
                          / person
                        </span>
                      </p>
                    </div>

                    <button
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                      onClick={() => onOpenBooking(pkg.title)}
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {limit && (
          <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              View All Packages
            </Link>
            <button
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-sm text-brand-forest bg-white hover:bg-brand-forest hover:text-white border border-brand-border shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              onClick={() => onOpenBooking('Custom Private Holiday')}
            >
              Inquire About Custom Tours
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Package;
