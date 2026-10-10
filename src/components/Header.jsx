import { useState } from 'react';

const navLinks = [
  { label: 'home', href: '#home' },
  { label: 'about us', href: '#' },
  { label: 'destination', href: '#destination' },
  { label: 'packages', href: '#package' },
  { label: 'gallery', href: '#gallery' },
  { label: 'contact us', href: '#contact' },
];

function Header({ isActive }) {
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
              <p className="helpline-title">For Further Inquiries :</p>
              <p className="helpline-number">+01 (123) 4567 90</p>
            </div>
          </a>

          <a href="#" className="logo">
            <img
              src="/logo_passion_tourtravel.png"
              alt="Passion Tour & Holiday Service logo"
              style={{
                maxHeight: '54px',
                maxWidth: '160px',
                height: 'auto',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </a>

          <div className="header-btn-group">
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
                <img
                  src="/logo_passion_tourtravel.png"
                  alt="Passion Tour & Holiday Service logo"
                  style={{
                    maxHeight: '48px',
                    maxWidth: '150px',
                    height: 'auto',
                    width: 'auto',
                    objectFit: 'contain',
                  }}
                />
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
            </ul>
          </nav>

          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
