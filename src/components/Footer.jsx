import { useState } from 'react';
import logo from '../assets/images/logo.svg';
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
              <img src={logo} alt="Tourly logo" />
            </a>

            <p className="footer-text">
              Urna ratione ante harum provident, eleifend, vulputate molestiae
              proin fringilla, praesentium magna conubia at perferendis,
              pretium, aenean aut ultrices.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>

            <p className="contact-text">
              Feel free to contact and reach us !!
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
                <a href="mailto:info.tourly.com" className="contact-link">
                  info.tourly.com
                </a>
              </li>

              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>
                <address>3146 Koontz, California</address>
              </li>
            </ul>
          </div>

          <div className="footer-form">
            <p className="form-text">
              Subscribe our newsletter for more update &amp; news !!
            </p>

            {subscribed && (
              <p style={{ color: '#4ade80', fontSize: '14px', marginBottom: '10px' }}>
                ✓ Subscribed! You will receive our latest news.
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
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">codewithsadee</a>. All rights reserved
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                Term &amp; Condition
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
