import popular1 from '../assets/images/popular-1.jpg';
import popular2 from '../assets/images/popular-2.jpg';
import popular3 from '../assets/images/popular-3.jpg';

const destinations = [
  {
    image: popular1,
    alt: 'San miguel, italy',
    country: 'Italy',
    title: 'San miguel',
    text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.',
  },
  {
    image: popular2,
    alt: 'Burj khalifa, dubai',
    country: 'Dubai',
    title: 'Burj khalifa',
    text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.',
  },
  {
    image: popular3,
    alt: 'Kyoto temple, japan',
    country: 'Japan',
    title: 'Kyoto temple',
    text: 'Fusce hic augue velit wisi ips quibusdam pariatur, iusto.',
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
          <a href="#">{destination.country}</a>
        </p>

        <h3 className="h3 card-title">
          <a href="#">{destination.title}</a>
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
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destination</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        <ul className="popular-list">
          {destinations.map((dest) => (
            <li key={dest.title}>
              <PopularCard destination={dest} />
            </li>
          ))}
        </ul>

        <button className="btn btn-primary">More destintion</button>
      </div>
    </section>
  );
}

export default Popular;
