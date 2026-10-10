import heroBanner from '../assets/images/hero-banner.jpg';

const stats = [
  { value: '2,500+', label: 'Happy Travelers' },
  { value: '40+', label: 'Destinations' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Travel Support' },
];

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="container">
        <p className="hero-badge">✦ AUTHENTIC EXPEDITIONS &amp; TAILORED HOLIDAYS</p>

        <h1 className="h1 hero-title">
          Your Journey. <span className="hero-accent">Our Passion.</span>
        </h1>

        <p className="hero-text">
          Discover remarkable destinations with thoughtfully planned journeys,
          trusted service, and unforgettable travel experiences.
        </p>

        <div className="btn-group">
          <a href="#package" className="btn btn-primary">
            Explore Packages
          </a>
          <a href="#contact" className="btn btn-secondary">
            Plan Custom Tour
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat-item" key={stat.label}>
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
