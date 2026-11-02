import { useState } from 'react';
import { galleryData } from '../data';

function Gallery({ onOpenBooking, limit = 5 }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const items = limit ? galleryData.slice(0, limit) : galleryData;

  return (
    <section className="py-20" id="gallery">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-2">
            Visual Memories
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-forest mb-4">
            Moments From Our Expeditions
          </h2>
          <p className="font-body text-brand-gray text-base leading-relaxed">
            A glimpse into genuine travel stories, breathtaking vistas, and
            treasured memories captured by travelers exploring with Passion Tour.
          </p>
        </div>

        {/* Gallery responsive grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((img) => (
            <li
              key={img.id}
              onClick={() => setSelectedPhoto(img)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-brand-border/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  📍 {img.location}
                </span>
                <h4 className="font-heading font-bold text-sm text-white mt-0.5">
                  {img.title}
                </h4>
              </div>
            </li>
          ))}
        </ul>

        {/* Lightbox preview modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-brand-forest-dark rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-brand-red text-white flex items-center justify-center text-2xl transition-colors z-10 cursor-pointer"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo"
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />

              <div className="p-5 bg-brand-forest flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    {selectedPhoto.title}
                  </h4>
                  <p className="font-body text-xs text-brand-gold mt-0.5">
                    📍 {selectedPhoto.location}
                  </p>
                </div>
                {onOpenBooking && (
                  <button
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-sm transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedPhoto(null);
                      onOpenBooking(selectedPhoto.title);
                    }}
                  >
                    Book Trip Here
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
