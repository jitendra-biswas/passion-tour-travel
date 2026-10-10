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

        <button className="btn btn-primary" onClick={() => onBook(pkg)}>
          Book Tour
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
    setBookedMsg(`Booking requested for "${pkg.title}"! Our travel planner will contact you soon.`);
    setTimeout(() => setBookedMsg(''), 4500);
  };

  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Curated Itineraries</p>
        <h2 className="h2 section-title">Signature Holiday Packages</h2>
        <p className="section-text">
          Comprehensive travel experiences complete with vetted accommodations,
          seamless private transfers, and insightful cultural excursions.
        </p>

        {bookedMsg && (
          <div
            style={{
              padding: '14px 20px',
              background: '#F7F3EA',
              color: '#172923',
              border: '1px solid #E5DED2',
              borderRadius: '8px',
              marginBottom: '28px',
              textAlign: 'center',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: '#D92727', fontSize: '18px' }}>✓</span>
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

        <a href="#contact" className="btn btn-primary">
          Inquire About Custom Tours
        </a>
      </div>
    </section>
  );
}

export default Package;
