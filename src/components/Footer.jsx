import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-brand-forest-dark text-white border-t border-white/10">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo_passion_tourtravel.png"
                alt="Passion Tour & Holiday Service"
                className="max-h-14 w-auto object-contain"
              />
            </Link>

            <p className="font-body text-sm text-white/75 leading-relaxed mb-6">
              Dedicated to crafting remarkable adventures, private holiday
              escapes, and authentic cultural journeys with personalized care
              and trusted destination expertise.
            </p>

            <button
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-sm transition-all duration-200 cursor-pointer"
              onClick={() => onOpenBooking()}
            >
              Book a Tour
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 font-body text-sm">
              <li>
                <Link to="/" className="text-white/75 hover:text-brand-gold transition-colors inline-block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/75 hover:text-brand-gold transition-colors inline-block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white/75 hover:text-brand-gold transition-colors inline-block py-0.5">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-white/75 hover:text-brand-gold transition-colors inline-block py-0.5">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/75 hover:text-brand-gold transition-colors inline-block py-0.5">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/75 hover:text-brand-gold transition-colors inline-block py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Contact Us
            </h4>

            <p className="font-body text-xs text-white/70 leading-relaxed mb-4">
              Connect with our dedicated travel planners for inquiries and private bookings.
            </p>

            <ul className="flex flex-col gap-3 font-body text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="text-brand-gold text-lg">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <a href="tel:+01123456790" className="hover:text-brand-gold transition-colors">
                  +01 (123) 4567 90
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-brand-gold text-lg">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <a href="mailto:info@passiontourtravel.com" className="hover:text-brand-gold transition-colors">
                  info@passiontourtravel.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-brand-gold text-lg mt-0.5">
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                <address className="not-italic text-white/80">
                  Kathmandu, Nepal &amp; Global Destinations
                </address>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">
              Travel Journal
            </h4>
            <p className="font-body text-xs text-white/70 leading-relaxed mb-4">
              Subscribe to our journal for curated destination guides and special offers.
            </p>

            {subscribed && (
              <p className="text-xs text-brand-gold font-semibold mb-3">
                ✓ Subscribed! Thank you for joining our community.
              </p>
            )}

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <input
                type="email"
                className="w-full bg-white/10 border border-white/20 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-white/40 font-body focus:outline-none focus:border-brand-gold focus:bg-white/15 transition-all"
                placeholder="Enter Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-sm transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6 bg-black/30">
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-body">
          <p>
            &copy; 2026 Passion Tour &amp; Holiday Service. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            <li>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">
                Privacy &amp; Terms
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-gold transition-colors">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-gold transition-colors">
                Help &amp; FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
