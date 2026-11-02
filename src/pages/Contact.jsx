import { useState } from 'react';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: 'General Inquiry',
  message: '',
};

function Contact({ onOpenBooking }) {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!ACCESS_KEY) {
      setError('Email service is not configured. Please try again later.');
      return;
    }

    setLoading(true);
    setError('');
    setSent(false);

    const payload = {
      access_key: ACCESS_KEY,
      subject: `New Contact Inquiry: ${formData.subject}`,
      from_name: 'Passion Tour Website',
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'Not provided',
      'Inquiry Type': formData.subject,
      message: formData.message.trim(),
      botcheck: '',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || 'Unable to send your message. Please try again.'
        );
      }

      setSent(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error('Contact form error:', err);

      setError(
        err.message ||
          'Something went wrong. Check your internet connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="pt-28 md:pt-36">
      {/* Page Banner */}
      <section className="bg-brand-forest py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest-dark via-brand-forest to-black/70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 text-center max-w-3xl">
          <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold mb-3">
            CONTACT US
          </p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-4">
            Contact Our Travel Desk
          </h1>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Speak directly with our dedicated travel planners for custom itineraries, private departures, and booking inquiries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl border border-brand-border/70 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-brand-ivory text-brand-red flex items-center justify-center text-2xl mb-5">
                <ion-icon name="call-outline" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-forest mb-1">
                Direct Phone
              </h3>
              <p className="font-body text-xs text-brand-gray mb-4">
                For immediate assistance and telephone inquiries:
              </p>
              <a
                href="tel:+01123456790"
                className="font-heading font-semibold text-sm text-brand-forest hover:text-brand-red transition-colors mb-1"
              >
                +01 (123) 4567 90
              </a>
              <a
                href="tel:+97714412345"
                className="font-heading font-semibold text-sm text-brand-forest hover:text-brand-red transition-colors mb-4"
              >
                +977 (1) 441-2345
              </a>
              <span className="font-heading text-xs font-semibold text-brand-gold uppercase tracking-wider mt-auto pt-3 border-t border-brand-border">
                24/7 Dedicated Support
              </span>
            </div>

            <div className="bg-white p-8 rounded-xl border border-brand-border/70 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-brand-ivory text-brand-red flex items-center justify-center text-2xl mb-5">
                <ion-icon name="mail-outline" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-forest mb-1">
                Email Us
              </h3>
              <p className="font-body text-xs text-brand-gray mb-4">
                For quotes and custom proposals:
              </p>
              <a
                href="mailto:info@passiontourtravel.com"
                className="font-heading font-semibold text-sm text-brand-forest hover:text-brand-red transition-colors mb-1 break-all"
              >
                info@passiontourtravel.com
              </a>
              <a
                href="mailto:reservations@passiontourtravel.com"
                className="font-heading font-semibold text-sm text-brand-forest hover:text-brand-red transition-colors mb-4 break-all"
              >
                reservations@passiontourtravel.com
              </a>
              <span className="font-heading text-xs font-semibold text-brand-gold uppercase tracking-wider mt-auto pt-3 border-t border-brand-border">
                Average response: &lt; 2 hrs
              </span>
            </div>

            <div className="bg-white p-8 rounded-xl border border-brand-border/70 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-brand-ivory text-brand-red flex items-center justify-center text-2xl mb-5">
                <ion-icon name="location-outline" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-forest mb-1">
                Kathmandu Office
              </h3>
              <p className="font-body text-xs text-brand-gray mb-2">
                Passion Tour &amp; Holiday Service Ltd.
              </p>
              <address className="not-italic font-body text-xs text-brand-gray leading-relaxed mb-4">
                Tourism Plaza, Tridevi Marg, Thamel
                <br />
                Kathmandu, Nepal
              </address>
              <span className="font-heading text-xs font-semibold text-brand-gold uppercase tracking-wider mt-auto pt-3 border-t border-brand-border">
                Mon – Sat: 8:00 AM – 7:00 PM
              </span>
            </div>
          </div>

          {/* Contact Form and WhatsApp sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 sm:p-10 border border-brand-border/70 shadow-sm">
              <h2 className="font-heading font-bold text-2xl text-brand-forest mb-2">
                Send An Inquiry
              </h2>
              <p className="font-body text-sm text-brand-gray mb-6">
                Have a question about your next trip? Send us your requirements and our travel team will get back to you.
              </p>

              {sent && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-xs font-semibold text-green-800 flex items-center gap-3">
                  <span className="text-xl text-green-600">
                    <ion-icon name="checkmark-circle-outline" />
                  </span>
                  <div>
                    <strong className="block">Message Sent Successfully!</strong>
                    <span>Your inquiry was accepted by our email service. Our team will review and respond shortly.</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-xs font-semibold text-red-800 flex items-center gap-3">
                  <span className="text-xl text-red-600">
                    <ion-icon name="alert-circle-outline" />
                  </span>
                  <div>
                    <strong className="block">Unable to Send Message</strong>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="font-heading font-semibold text-xs text-brand-forest">
                      Your Name*
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-heading font-semibold text-xs text-brand-forest">
                      Email Address*
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="font-heading font-semibold text-xs text-brand-forest">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      placeholder="e.g. +977 98XXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="font-heading font-semibold text-xs text-brand-forest">
                      Inquiry Type*
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Custom Holiday Package">Custom Holiday Package</option>
                      <option value="Group & Family Booking">Group &amp; Family Booking</option>
                      <option value="Trekking & Mountain Tour">Trekking &amp; Mountain Tour</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-heading font-semibold text-xs text-brand-forest">
                    Message*
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    maxLength={3000}
                    placeholder="Tell us about your travel dates, destinations, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all resize-y"
                  />
                </div>

                {/* Honeypot for bot filtering */}
                <input
                  type="checkbox"
                  name="botcheck"
                  checked={false}
                  readOnly
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? 'Sending Message...' : 'Send Message'}
                  </button>

                  {onOpenBooking && (
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-brand-forest bg-brand-ivory hover:bg-brand-forest hover:text-white border border-brand-border shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-60"
                      disabled={loading}
                      onClick={() => onOpenBooking('Direct Tour Reservation')}
                    >
                      Open Book Now Form
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* WhatsApp Box */}
            <div className="bg-brand-forest text-white rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-4xl text-green-400 block mb-4">
                  <ion-icon name="logo-whatsapp" />
                </span>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="font-body text-xs text-white/75 leading-relaxed mb-6">
                  Have a quick question? Message our travel coordinator directly on WhatsApp for real-time support.
                </p>
              </div>

              <a
                href="https://wa.me/9779701955279?text=Hello%20Passion%20Tour!%20I%20have%20an%20inquiry%20about%20your%20holiday%20packages."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-green-600 hover:bg-green-700 shadow-md transition-colors"
              >
                <span className="text-lg">
                  <ion-icon name="logo-whatsapp" />
                </span>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Contact;
