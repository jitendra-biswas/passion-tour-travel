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
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/AdminLogin';

function AppContent() {
  const [isAdmin, setIsAdmin] = useState(
    () => window.location.hash === '#admin'
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('tourly_admin_auth') === 'true'
  );
  const [headerActive, setHeaderActive] = useState(false);
  const [goTopActive, setGoTopActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
    };

    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setHeaderActive(true);
        setGoTopActive(true);
      } else {
        setHeaderActive(false);
        setGoTopActive(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openAdmin = () => {
    window.location.hash = '#admin';
    setIsAdmin(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exitAdmin = () => {
    window.location.hash = '';
    setIsAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = () => {
    sessionStorage.setItem('tourly_admin_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('tourly_admin_auth');
    setIsAuthenticated(false);
  };

  if (isAdmin) {
    if (!isAuthenticated) {
      return <AdminLogin onLogin={handleLoginSuccess} onBack={exitAdmin} />;
    }
    return <AdminDashboard onExit={exitAdmin} onLogout={handleLogout} />;
  }

  return (
    <>
      <Header isActive={headerActive} onOpenAdmin={openAdmin} />

      <main>
        <article>
          <Hero />
          <TourSearch />
          <Popular />
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
