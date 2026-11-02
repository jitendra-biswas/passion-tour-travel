import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: 'home', to: '/' },
  { label: 'about us', to: '/about' },
  { label: 'destination', to: '/destinations' },
  { label: 'packages', to: '/packages' },
  { label: 'gallery', to: '/gallery' },
  { label: 'contact us', to: '/contact' },
];

function Header({ isActive, onOpenBooking }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="absolute top-0 left-0 w-full z-40">
      {/* Mobile Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          navOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeNav}
        aria-hidden="true"
      />

      {/* Header Top - Contact bar & Logo */}
      <div
        className={`w-full py-3 transition-all duration-300 z-50 ${
          isActive
            ? 'fixed top-0 left-0 bg-brand-forest shadow-md'
            : 'absolute top-0 left-0 bg-brand-forest/75 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Helpline box (hidden on small mobile, visible sm+) */}
          <a
            href="tel:+01123456790"
            className="flex items-center gap-3 text-white group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg text-brand-gold group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-white/70 uppercase tracking-wider">For Inquiries:</p>
              <p className="text-sm font-semibold font-heading text-white group-hover:text-brand-gold transition-colors duration-200">
                +01 (123) 4567 90
              </p>
            </div>
          </a>

          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeNav}>
            <img
              src="/logo_passion_tourtravel.png"
              alt="Passion Tour & Holiday Service"
              className="max-h-[50px] w-auto object-contain"
            />
          </Link>

          {/* Action buttons on mobile/tablet */}
          <div className="flex items-center gap-3">
            <button
              className="w-10 h-10 rounded-full bg-brand-red hover:bg-brand-red-hover text-white flex items-center justify-center text-xl transition-all duration-200 shadow-sm cursor-pointer"
              aria-label="Book Tour"
              onClick={() => onOpenBooking()}
              title="Book Tour"
            >
              <ion-icon name="calendar-outline"></ion-icon>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-2xl md:hidden transition-colors cursor-pointer"
              aria-label="Open Menu"
              onClick={toggleNav}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {/* Header Bottom - Navbar (desktop & slide-out mobile drawer) */}
      <div className="hidden md:block absolute top-[74px] left-0 w-full py-3.5 bg-brand-forest/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Social icons */}
          <ul className="flex items-center gap-3">
            <li>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-brand-forest flex items-center justify-center text-sm transition-colors duration-200"
                aria-label="Facebook"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-brand-forest flex items-center justify-center text-sm transition-colors duration-200"
                aria-label="Twitter"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 text-white hover:bg-brand-gold hover:text-brand-forest flex items-center justify-center text-sm transition-colors duration-200"
                aria-label="YouTube"
              >
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>

          {/* Nav links */}
          <nav>
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive: isLinkActive }) =>
                      `font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative pb-1 hover:text-brand-gold ${
                        isLinkActive
                          ? 'text-brand-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold'
                          : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Book Now button */}
          <button
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            onClick={() => onOpenBooking()}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-brand-forest text-white z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 md:hidden ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <Link to="/" onClick={closeNav}>
              <img
                src="/logo_passion_tourtravel.png"
                alt="Passion Tour"
                className="max-h-10 w-auto"
              />
            </Link>
            <button
              onClick={closeNav}
              className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-brand-red flex items-center justify-center text-2xl transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive: isLinkActive }) =>
                    `block py-2 font-heading font-semibold uppercase tracking-wider text-base transition-colors ${
                      isLinkActive ? 'text-brand-gold' : 'text-white/90 hover:text-brand-gold'
                    }`
                  }
                  onClick={closeNav}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <button
            className="w-full py-3 rounded-md font-heading font-semibold text-center text-white bg-brand-red hover:bg-brand-red-hover shadow-md transition-colors cursor-pointer"
            onClick={() => {
              closeNav();
              onOpenBooking();
            }}
          >
            Book Now
          </button>
          <p className="text-xs text-white/50 text-center font-body">
            Passion Tour &amp; Holiday Service
          </p>
        </div>
      </aside>
    </header>
  );
}

export default Header;
