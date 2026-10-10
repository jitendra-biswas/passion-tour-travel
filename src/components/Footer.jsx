import { useState } from 'react';
import { useData } from '../context/DataContext';

function Footer() {
  const { addSubscriber } = useData();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    addSubscriber(email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="/logo_passion_tourtravel.png"
                alt="Passion Tour & Holiday Service logo"
                style={{
                  maxHeight: '58px',
                  maxWidth: '170px',
                  height: 'auto',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'inline-block',
                }}
              />
            </a>

            <p className="footer-text">
              Dedicated to crafting remarkable adventures, private holiday
              escapes, and authentic cultural journeys with personalized care
              and trusted destination expertise.
            </p>
          </div>

          <div className="footer-contact" id="contact-footer">
            <h4 className="contact-title">Contact Us</h4>

            <p className="contact-text">
              Connect with our dedicated travel planners for inquiries, private
              customizations, and bookings.
            </p>

            <ul>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+01123456790" className="contact-link">
                  +01 (123) 4567 90
                </a>
              </li>

              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:info@passiontourtravel.com" className="contact-link">
                  info@passiontourtravel.com
                </a>
              </li>

              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <address>Kathmandu, Nepal &amp; Global Destinations</address>
              </li>
            </ul>
          </div>

          <div className="footer-form">
            <h4 className="contact-title">Travel Journal</h4>
            <p className="form-text">
              Subscribe to our journal for curated destination guides, seasonal
              itineraries, and special offers.
            </p>

            {subscribed && (
              <p style={{ color: '#F5A900', fontSize: '14px', marginBottom: '10px', fontWeight: 600 }}>
                ✓ Subscribed! Thank you for joining our travel community.
              </p>
            )}

            <form onSubmit={handleSubscribe} className="form-wrapper">
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Passion Tour &amp; Holiday Service. All rights reserved.
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
