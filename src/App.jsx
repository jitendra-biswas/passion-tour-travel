import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import ScrollToTop from './components/ScrollToTop';
import BookNowModal from './components/BookNowModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import GalleryPage from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [headerActive, setHeaderActive] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY >= 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (pkgTitle = '') => {
    setSelectedPackage(pkgTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPackage('');
  };

  return (
    <>
      <ScrollToTop />
      <Header isActive={headerActive} onOpenBooking={handleOpenBooking} />

      <main>
        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
          <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
          <Route path="/destinations" element={<Destinations onOpenBooking={handleOpenBooking} />} />
          <Route path="/packages" element={<Packages onOpenBooking={handleOpenBooking} />} />
          <Route path="/gallery" element={<GalleryPage onOpenBooking={handleOpenBooking} />} />
          <Route path="/contact" element={<Contact onOpenBooking={handleOpenBooking} />} />
        </Routes>
      </main>

      <Footer onOpenBooking={handleOpenBooking} />
      <GoToTop />

      {/* Book Now Modal with Mail Sending API */}
      {isBookingOpen && (
        <BookNowModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          selectedPackage={selectedPackage}
        />
      )}
    </>
  );
}

export default App;
