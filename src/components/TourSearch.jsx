import { useState } from 'react';
import { useData } from '../context/DataContext';

function TourSearch() {
  const { addBooking } = useData();
  const [formData, setFormData] = useState({
    destination: '',
    people: 1,
    checkin: '',
    checkout: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({
      customerName: 'Traveler Inquiry',
      email: 'inquiry@tourly.com',
      destination: formData.destination,
      pax: Number(formData.people),
      date: formData.checkin || new Date().toISOString().split('T')[0],
      total: Number(formData.people) * 600,
    });
    setSubmitted(true);
    setFormData({ destination: '', people: 1, checkin: '', checkout: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="tour-search">
      <div className="container">
        {submitted && (
          <div
            style={{
              padding: '14px 24px',
              background: '#F7F3EA',
              color: '#172923',
              border: '1px solid #E5DED2',
              borderRadius: '8px',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: '#D92727', fontSize: '18px' }}>✓</span>
            Thank you! Your travel inquiry has been received. Our team will contact you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="tour-search-form">
          <div className="input-wrapper">
            <label htmlFor="destination" className="input-label">
              Search Destination*
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="e.g. Kathmandu, Greece, Dubai"
              className="input-field"
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="people" className="input-label">
              Pax Number*
            </label>
            <input
              type="number"
              name="people"
              id="people"
              required
              min="1"
              placeholder="No. of Travelers"
              className="input-field"
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkin" className="input-label">
              Check-in Date*
            </label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              required
              className="input-field"
              value={formData.checkin}
              onChange={(e) =>
                setFormData({ ...formData, checkin: e.target.value })
              }
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkout" className="input-label">
              Check-out Date*
            </label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              required
              className="input-field"
              value={formData.checkout}
              onChange={(e) =>
                setFormData({ ...formData, checkout: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Find Journeys
          </button>
        </form>
      </div>
    </section>
  );
}

export default TourSearch;
