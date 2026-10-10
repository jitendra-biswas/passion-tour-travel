function WhyChooseUs() {
  const pillars = [
    {
      icon: 'compass-outline',
      title: 'Tailored Journeys',
      text: 'Bespoke itineraries curated around your pace, preferences, and distinctive travel aspirations.',
    },
    {
      icon: 'trail-sign-outline',
      title: 'Local Expertise',
      text: 'Seasoned mountain guides and certified hosts sharing deep regional culture and hidden trails.',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Seamless Support',
      text: 'Attentive, 24/7 dedicated travel concierge from initial planning until your safe return home.',
    },
    {
      icon: 'ribbon-outline',
      title: 'Transparent Value',
      text: 'Comprehensive, vetted package inclusions with straightforward pricing and zero hidden costs.',
    },
  ];

  return (
    <section className="why-us" id="about">
      <div className="container">
        <p className="section-subtitle">The Passion Difference</p>
        <h2 className="h2 section-title">Why Travelers Choose Us</h2>
        <p className="section-text">
          Every journey with Passion Tour &amp; Holiday Service is crafted with
          meticulous preparation, trusted local relationships, and dedicated care.
        </p>

        <div className="why-us-grid">
          {pillars.map((item, index) => (
            <div className="why-us-card" key={index}>
              <div className="why-us-icon">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h3 className="why-us-card-title">{item.title}</h3>
              <p className="why-us-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
