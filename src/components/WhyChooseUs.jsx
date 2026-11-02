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
    <section className="py-20 bg-brand-ivory-dark/60 border-y border-brand-border/60" id="about">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-2">
            The Passion Difference
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-forest mb-4">
            Why Travelers Choose Us
          </h2>
          <p className="font-body text-brand-gray text-base leading-relaxed">
            Every journey with Passion Tour &amp; Holiday Service is crafted with
            meticulous preparation, trusted local relationships, and dedicated care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-7 border border-brand-border/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-start group"
            >
              <div className="w-14 h-14 rounded-lg bg-brand-ivory text-brand-red group-hover:bg-brand-red group-hover:text-white flex items-center justify-center text-3xl mb-5 transition-colors duration-200">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-forest mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
