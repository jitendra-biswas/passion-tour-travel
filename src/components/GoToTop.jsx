import { useState, useEffect } from 'react';

function GoToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-11 h-11 rounded-full bg-brand-red hover:bg-brand-red-hover text-white flex items-center justify-center text-xl shadow-lg transition-all duration-300 z-30 cursor-pointer ${
        active ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ion-icon name="chevron-up-outline"></ion-icon>
    </button>
  );
}

export default GoToTop;
