import popular1 from '../assets/images/popular-1.jpg';
import popular2 from '../assets/images/popular-2.jpg';
import popular3 from '../assets/images/popular-3.jpg';

const destinations = [
  {
    image: popular1,
    alt: 'San Miguel, Italy',
    country: 'Italy',
    title: 'San Miguel Heritage',
    text: 'Explore timeless cobblestone alleys, classical architecture, and authentic regional culinary traditions.',
  },
  {
    image: popular2,
    alt: 'Burj Khalifa, Dubai',
    country: 'United Arab Emirates',
    title: 'Modern Dubai & Desert Safari',
    text: 'Experience iconic architectural marvels, world-class luxury stays, and private sunset desert excursions.',
  },
  {
    image: popular3,
    alt: 'Kyoto Temple, Japan',
    country: 'Japan',
    title: 'Ancient Kyoto Sanctum',
    text: 'Immerse in meditative zen gardens, revered mountain shrines, and timeless ceremonial tea traditions.',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="card-rating">
      {Array.from({ length: count }, (_, i) => (
        <ion-icon key={i} name="star"></ion-icon>
      ))}
    </div>
  );
}

function PopularCard({ destination }) {
  return (
    <div className="popular-card">
      <figure className="card-img">
        <img src={destination.image} alt={destination.alt} loading="lazy" />
      </figure>

      <div className="card-content">
        <StarRating />

        <p className="card-subtitle">
          <a href="#destination">{destination.country}</a>
        </p>

        <h3 className="h3 card-title">
          <a href="#destination">{destination.title}</a>
        </h3>

        <p className="card-text">{destination.text}</p>
      </div>
    </div>
  );
}

function Popular() {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Handpicked Locations</p>
        <h2 className="h2 section-title">Featured Destinations</h2>
        <p className="section-text">
          Curated travel routes crafted for discerning explorers seeking rich
          culture, iconic vistas, and authentic local encounters.
        </p>

        <ul className="popular-list">
          {destinations.map((dest) => (
            <li key={dest.title}>
              <PopularCard destination={dest} />
            </li>
          ))}
        </ul>

        <a href="#package" className="btn btn-primary">
          Explore All Destinations
        </a>
      </div>
    </section>
  );
}

export default Popular;
