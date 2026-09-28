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
              padding: '12px 20px',
              background: '#ffffff',
              color: '#0077ff',
              borderRadius: '50px',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            Thank you! Your travel inquiry has been received.
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
              placeholder="Enter Destination"
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
              placeholder="No.of People"
              className="input-field"
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="checkin" className="input-label">
              Checkin Date**
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
              Checkout Date*
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

          <button type="submit" className="btn btn-secondary">
            Inquire now
          </button>
        </form>
      </div>
    </section>
  );
}

export default TourSearch;
