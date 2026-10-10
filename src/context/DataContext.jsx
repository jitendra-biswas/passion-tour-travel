import { createContext, useContext, useState, useEffect } from 'react';
import package1 from '../assets/images/packege-1.jpg';
import package2 from '../assets/images/packege-2.jpg';
import package3 from '../assets/images/packege-3.jpg';

const DataContext = createContext();

// Version key — bump this string whenever you change initialPackages to clear stale localStorage
const DATA_VERSION = 'v2';
const PKG_KEY = `tourly_packages_${DATA_VERSION}`;
const BKG_KEY = `tourly_bookings_${DATA_VERSION}`;
const SUB_KEY = `tourly_subscribers_${DATA_VERSION}`;

const initialPackages = [
  {
    id: 1,
    image: package1,
    title: 'Experience The Great Holiday On Beach',
    text: 'Pristine white-sand coastlines, azure waters, and secluded beachfront villas crafted for an indulgent retreat in style.',
    duration: '7D/6N',
    pax: 'pax: 10',
    location: 'Malaysia',
    reviews: '(25 reviews)',
    price: 750,
  },
  {
    id: 2,
    image: package2,
    title: 'Summer Holiday To The Oxolotan River',
    text: 'Immerse in lush rainforest riverbanks, guided boat cruises, and encounters with rich native biodiversity.',
    duration: '7D/6N',
    pax: 'pax: 10',
    location: 'Mexico',
    reviews: '(20 reviews)',
    price: 520,
  },
  {
    id: 3,
    image: package3,
    title: "Santorini Island's Weekend Vacation",
    text: 'Iconic whitewashed cliffside suites, Aegean sunset cruises, and private wine-tasting tours overlooking the caldera.',
    duration: '7D/6N',
    pax: 'pax: 10',
    location: 'Greece',
    reviews: '(40 reviews)',
    price: 660,
  },
];

const initialBookings = [
  {
    id: 'BK-101',
    customerName: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    destination: 'Santorini Island',
    pax: 2,
    date: '2026-10-15',
    total: 1320,
    status: 'Confirmed',
  },
  {
    id: 'BK-102',
    customerName: 'Michael Chen',
    email: 'mchen@example.com',
    destination: 'Malaysia Beach',
    pax: 4,
    date: '2026-11-02',
    total: 3000,
    status: 'Pending',
  },
  {
    id: 'BK-103',
    customerName: 'Emma Watson',
    email: 'emma.w@example.com',
    destination: 'Oxolotan River',
    pax: 1,
    date: '2026-10-28',
    total: 520,
    status: 'Confirmed',
  },
];

export function DataProvider({ children }) {
  const [packages, setPackages] = useState(() => {
    const saved = localStorage.getItem(PKG_KEY);
    return saved ? JSON.parse(saved) : initialPackages;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem(BKG_KEY);
    return saved ? JSON.parse(saved) : initialBookings;
  });

  const [subscribers, setSubscribers] = useState(() => {
    const saved = localStorage.getItem(SUB_KEY);
    return saved ? JSON.parse(saved) : ['alex@domain.com', 'traveler99@gmail.com'];
  });

  useEffect(() => {
    localStorage.setItem(PKG_KEY, JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem(BKG_KEY, JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem(SUB_KEY, JSON.stringify(subscribers));
  }, [subscribers]);

  const addPackage = (pkg) => {
    setPackages((prev) => [...prev, { ...pkg, id: Date.now() }]);
  };

  const deletePackage = (id) => {
    setPackages((prev) => prev.filter((p) => p.id !== id));
  };

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: `BK-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Pending',
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const updateBookingStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const addSubscriber = (email) => {
    if (!subscribers.includes(email)) {
      setSubscribers((prev) => [email, ...prev]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        packages,
        bookings,
        subscribers,
        addPackage,
        deletePackage,
        addBooking,
        updateBookingStatus,
        deleteBooking,
        addSubscriber,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
