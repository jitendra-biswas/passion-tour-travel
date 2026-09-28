import { createContext, useContext, useState, useEffect } from 'react';
import package1 from '../assets/images/packege-1.jpg';
import package2 from '../assets/images/packege-2.jpg';
import package3 from '../assets/images/packege-3.jpg';

const DataContext = createContext();

const initialPackages = [
  {
    id: 1,
    image: package1,
    title: 'Experience The Great Holiday On Beach',
    text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores.',
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
    text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores.',
    duration: '7D/6N',
    pax: 'pax: 10',
    location: 'Malaysia',
    reviews: '(20 reviews)',
    price: 520,
  },
  {
    id: 3,
    image: package3,
    title: "Santorini Island's Weekend Vacation",
    text: 'Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores.',
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
    const saved = localStorage.getItem('tourly_packages');
    return saved ? JSON.parse(saved) : initialPackages;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('tourly_bookings');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  const [subscribers, setSubscribers] = useState(() => {
    const saved = localStorage.getItem('tourly_subscribers');
    return saved ? JSON.parse(saved) : ['alex@domain.com', 'traveler99@gmail.com'];
  });

  useEffect(() => {
    localStorage.setItem('tourly_packages', JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem('tourly_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('tourly_subscribers', JSON.stringify(subscribers));
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
