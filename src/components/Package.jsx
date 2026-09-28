import { useState } from 'react';
import { useData } from '../context/DataContext';

function PackageCard({ pkg, onBook }) {
  return (
    <div className="package-card">
      <figure className="card-banner">
        <img src={pkg.image} alt={pkg.title} loading="lazy" />
      </figure>

      <div className="card-content">
        <h3 className="h3 card-title">{pkg.title}</h3>

        <p className="card-text">{pkg.text}</p>

        <ul className="card-meta-list">
          <li className="card-meta-item">
            <div className="meta-box">
              <ion-icon name="time"></ion-icon>
              <p className="text">{pkg.duration}</p>
            </div>
          </li>

          <li className="card-meta-item">
            <div className="meta-box">
              <ion-icon name="people"></ion-icon>
              <p className="text">{pkg.pax}</p>
            </div>
          </li>

          <li className="card-meta-item">
            <div className="meta-box">
              <ion-icon name="location"></ion-icon>
              <p className="text">{pkg.location}</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card-price">
        <div className="wrapper">
          <p className="reviews">{pkg.reviews}</p>

          <div className="card-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
        </div>

        <p className="price">
          ${pkg.price}
          <span>/ per person</span>
        </p>

        <button className="btn btn-secondary" onClick={() => onBook(pkg)}>
          Book Now
        </button>
      </div>
    </div>
  );
}

function Package() {
  const { packages, addBooking } = useData();
  const [bookedMsg, setBookedMsg] = useState('');

  const handleBook = (pkg) => {
    addBooking({
      customerName: 'Guest Traveler',
      email: 'guest@example.com',
      destination: pkg.title,
      pax: 1,
      date: new Date().toISOString().split('T')[0],
      total: pkg.price,
    });
    setBookedMsg(`Booking requested for "${pkg.title}"! Sent to Admin.`);
    setTimeout(() => setBookedMsg(''), 4000);
  };

  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packeges</p>
        <h2 className="h2 section-title">Checkout Our Packeges</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo,
          rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur,
          aptent.
        </p>

        {bookedMsg && (
          <div
            style={{
              padding: '12px 20px',
              background: '#dcfce7',
              color: '#15803d',
              borderRadius: '8px',
              marginBottom: '24px',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {bookedMsg}
          </div>
        )}

        <ul className="package-list">
          {packages.map((pkg) => (
            <li key={pkg.id || pkg.title}>
              <PackageCard pkg={pkg} onBook={handleBook} />
            </li>
          ))}
        </ul>

        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
}

export default Package;
