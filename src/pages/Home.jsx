import Hero from '../components/Hero';
import TourSearch from '../components/TourSearch';
import Popular from '../components/Popular';
import WhyChooseUs from '../components/WhyChooseUs';
import Package from '../components/Package';
import Gallery from '../components/Gallery';
import Cta from '../components/Cta';

function Home({ onOpenBooking }) {
  return (
    <article>
      <Hero onOpenBooking={onOpenBooking} />
      <TourSearch onOpenBooking={onOpenBooking} />
      <Popular onOpenBooking={onOpenBooking} limit={3} />
      <WhyChooseUs />
      <Package onOpenBooking={onOpenBooking} limit={3} />
      <Gallery onOpenBooking={onOpenBooking} limit={5} />
      <Cta onOpenBooking={onOpenBooking} />
    </article>
  );
}

export default Home;
