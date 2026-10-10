import { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TourSearch from './components/TourSearch';
import Popular from './components/Popular';
import Package from './components/Package';
import Gallery from './components/Gallery';
import Cta from './components/Cta';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

import WhyChooseUs from './components/WhyChooseUs';

function AppContent() {
  const [headerActive, setHeaderActive] = useState(false);
  const [goTopActive, setGoTopActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setHeaderActive(true);
        setGoTopActive(true);
      } else {
        setHeaderActive(false);
        setGoTopActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header isActive={headerActive} />

      <main>
        <article>
          <Hero />
          <TourSearch />
          <Popular />
          <WhyChooseUs />
          <Package />
          <Gallery />
          <Cta />
        </article>
      </main>

      <Footer />
      <GoToTop isActive={goTopActive} />
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

export default App;

