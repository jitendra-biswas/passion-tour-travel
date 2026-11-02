import WhyChooseUs from '../components/WhyChooseUs';

function About({ onOpenBooking }) {
  return (
    <article className="pt-28 md:pt-36">
      {/* Page Banner */}
      <section className="bg-brand-forest py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest-dark via-brand-forest to-black/70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 text-center max-w-3xl">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold mb-3">
            ABOUT US
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">
            About Passion Tour &amp; Holiday Service
          </h1>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Dedicated to crafting remarkable adventures, private holiday escapes, and authentic cultural journeys with personalized care and trusted destination expertise.
          </p>
        </div>
      </section>

      {/* Story & Commitments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-2">
                Our Heritage &amp; Vision
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-forest mb-5">
                Rooted in Passion, Driven by Excellence
              </h2>
              <p className="font-body text-brand-gray text-base leading-relaxed mb-4">
                Passion Tour &amp; Holiday Service was founded with a singular conviction: travel should never feel generic.
                Whether you seek the tranquil heights of the Himalayas, the turquoise waters of Southeast Asia, or
                the architectural splendors of Europe, each journey must resonate with personal meaning.
              </p>
              <p className="font-body text-brand-gray text-base leading-relaxed mb-8">
                With headquarters in Kathmandu, Nepal, and an extensive network of verified international partners,
                our team pairs deep local intimacy with world-class hospitality standards. We oversee every logistical
                step—from private chauffeur transfers to handpicked heritage retreats—so you can immerse fully in the joy of discovery.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border">
                <div>
                  <span className="font-heading font-extrabold text-3xl text-brand-red block">
                    10+
                  </span>
                  <span className="font-body text-xs text-brand-gray">
                    Years of Expeditions
                  </span>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl text-brand-red block">
                    99.4%
                  </span>
                  <span className="font-body text-xs text-brand-gray">
                    Happy Travelers
                  </span>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-3xl text-brand-red block">
                    40+
                  </span>
                  <span className="font-body text-xs text-brand-gray">
                    Global Routes
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-brand-forest text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-white/10">
              <h3 className="font-heading font-bold text-2xl text-white mb-6">
                Our Core Commitments
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <span className="text-brand-gold text-2xl flex-shrink-0 mt-0.5">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </span>
                  <div>
                    <strong className="block font-heading text-base text-white mb-1">
                      Uncompromising Safety
                    </strong>
                    <span className="font-body text-sm text-white/75 leading-relaxed">
                      Certified mountain guides, verified vehicles, and 24/7 travel concierge.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-gold text-2xl flex-shrink-0 mt-0.5">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </span>
                  <div>
                    <strong className="block font-heading text-base text-white mb-1">
                      Authentic Encounters
                    </strong>
                    <span className="font-body text-sm text-white/75 leading-relaxed">
                      Deep cultural connections and fair compensation for local hosts.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-gold text-2xl flex-shrink-0 mt-0.5">
                    <ion-icon name="checkmark-circle"></ion-icon>
                  </span>
                  <div>
                    <strong className="block font-heading text-base text-white mb-1">
                      Transparent Value
                    </strong>
                    <span className="font-body text-sm text-white/75 leading-relaxed">
                      Comprehensive inclusions with itemized pricing and zero hidden fees.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Pillars */}
      <WhyChooseUs />

      {/* Accreditations */}
      <section className="py-20 bg-brand-ivory border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-2">
            Trusted &amp; Verified
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-forest mb-12">
            Government Certified &amp; Recognized
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-7 rounded-xl border border-brand-border shadow-sm flex flex-col items-center">
              <span className="text-4xl text-brand-red mb-3">
                <ion-icon name="shield-checkmark"></ion-icon>
              </span>
              <h4 className="font-heading font-bold text-base text-brand-forest mb-1">
                Licensed Tour Operator
              </h4>
              <p className="font-body text-xs text-brand-gray">
                Govt. of Nepal Ministry of Tourism
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-brand-border shadow-sm flex flex-col items-center">
              <span className="text-4xl text-brand-red mb-3">
                <ion-icon name="ribbon-outline"></ion-icon>
              </span>
              <h4 className="font-heading font-bold text-base text-brand-forest mb-1">
                TAAN Member
              </h4>
              <p className="font-body text-xs text-brand-gray">
                Trekking Agencies Association of Nepal
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-brand-border shadow-sm flex flex-col items-center">
              <span className="text-4xl text-brand-red mb-3">
                <ion-icon name="medal-outline"></ion-icon>
              </span>
              <h4 className="font-heading font-bold text-base text-brand-forest mb-1">
                NMA Certified
              </h4>
              <p className="font-body text-xs text-brand-gray">
                Nepal Mountaineering Association
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => onOpenBooking('Consultation & Tour Planning')}
            >
              Plan Your Trip With Us
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;
