import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import logoBlue from '../assets/images/logo-blue.svg';

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about us', href: '#' },
  { label: 'destination', href: '#destination' },
  { label: 'packages', href: '#package' },
  { label: 'gallery', href: '#gallery' },
  { label: 'contact us', href: '#contact' },
];

function Header({ isActive, onOpenAdmin }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  return (
    <header className={`header${isActive ? ' active' : ''}`}>
      {/* Overlay */}
      <div
        className={`overlay${navOpen ? ' active' : ''}`}
        onClick={closeNav}
      />

      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <a href="tel:+01123456790" className="helpline-box">
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <p className="helpline-title">For Further Inquires :</p>
              <p className="helpline-number">+01 (123) 4567 90</p>
            </div>
          </a>

          <a href="#" className="logo">
            <img src={logo} alt="Tourly logo" />
          </a>

          <div className="header-btn-group">
            <button
              onClick={onOpenAdmin}
              className="btn btn-secondary"
              style={{
                fontSize: '11px',
                padding: '4px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
              title="Open Admin Dashboard"
            >
              <ion-icon name="speedometer-outline"></ion-icon>
              Admin
            </button>

            <button className="search-btn" aria-label="Search">
              <ion-icon name="search"></ion-icon>
            </button>
            <button
              className="nav-open-btn"
              aria-label="Open Menu"
              onClick={toggleNav}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>

          <nav className={`navbar${navOpen ? ' active' : ''}`}>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src={logoBlue} alt="Tourly logo" />
              </a>
              <button
                className="nav-close-btn"
                aria-label="Close Menu"
                onClick={closeNav}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="navbar-link"
                    onClick={closeNav}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="navbar-link"
                  style={{
                    color: '#0077ff',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    width: '100%',
                  }}
                  onClick={() => {
                    closeNav();
                    onOpenAdmin();
                  }}
                >
                  ⚡ Admin Dashboard
                </button>
              </li>
            </ul>
          </nav>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              className="btn btn-secondary"
              onClick={onOpenAdmin}
              style={{
                fontSize: '12px',
                padding: '6px 14px',
                borderColor: 'rgba(255,255,255,0.4)',
              }}
            >
              Admin Portal
            </button>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
