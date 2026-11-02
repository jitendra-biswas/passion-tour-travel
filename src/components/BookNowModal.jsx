import { useState, useEffect } from 'react';
import { packagesData } from '../data';

const getDefaultDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 7);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function BookNowModal({ isOpen, onClose, selectedPackage }) {
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    phone: '',
    package: selectedPackage || packagesData[0]?.title || 'Custom Tour',
    date: getDefaultDate(),
    guests: '1',
    notes: '',
  }));

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !loading) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, loading, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (!ACCESS_KEY) {
      setError('Email service is not configured. Please contact us directly.');
      return;
    }

    if (formData.date < getDefaultDate()) {
      setError('Please select a travel date at least 7 days from today.');
      return;
    }

    setLoading(true);
    setError('');

    const payload = {
      access_key: ACCESS_KEY,
      subject: `New Tour Booking: ${formData.package}`,
      from_name: 'Passion Tour Travel Website',
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      'Selected Tour': formData.package,
      'Travel Date': formData.date,
      'Number of Guests': formData.guests,
      'Special Requests': formData.notes.trim() || 'None',
      botcheck: '',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ||
            result.body?.message ||
            result.error ||
            'Unable to send your booking request.'
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Booking submission error:', err);

      setError(
        err.message ||
          'Unable to send your request. Please check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={() => !loading && onClose()}
    >
      <div
        className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border my-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand-ivory hover:bg-brand-red text-brand-charcoal hover:text-white flex items-center justify-center text-2xl transition-colors cursor-pointer"
          onClick={onClose}
          disabled={loading}
          aria-label="Close booking modal"
        >
          <ion-icon name="close-outline" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl mx-auto mb-4">
              <ion-icon name="checkmark-circle" />
            </div>

            <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-1">
              BOOKING INQUIRY SENT
            </p>

            <h3 className="font-heading font-bold text-2xl text-brand-forest mb-3">
              Thank You, {formData.name}!
            </h3>

            <p className="font-body text-sm text-brand-gray leading-relaxed max-w-md mx-auto mb-6">
              Your inquiry for <strong className="text-brand-charcoal">{formData.package}</strong> on{' '}
              <strong className="text-brand-charcoal">{formData.date}</strong> has been submitted
              successfully. Our team will contact you using the email address you provided.
            </p>

            <div className="bg-brand-ivory border border-brand-border rounded-lg p-4 text-xs text-brand-forest flex items-center gap-3 max-w-md mx-auto mb-6 text-left">
              <span className="text-2xl text-brand-red flex-shrink-0">
                <ion-icon name="mail-outline" />
              </span>
              <span>
                Your request was accepted by Web3Forms. This is an inquiry, not a confirmed reservation.
              </span>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md transition-all cursor-pointer"
              onClick={onClose}
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-red mb-1">
                Reserve Your Trip
              </p>
              <h2 className="font-heading font-bold text-2xl text-brand-forest mb-1">
                Book Tour Package
              </h2>
              <p className="font-body text-xs text-brand-gray">
                Fill in your travel details and send us a booking inquiry via Web3Forms.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-center gap-2">
                <ion-icon name="alert-circle-outline" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Tour Selection */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="package" className="font-heading font-semibold text-xs text-brand-forest">
                  Select Package / Destination*
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                >
                  {packagesData.map((pkg) => (
                    <option key={pkg.id} value={pkg.title}>
                      {pkg.title} (${pkg.price}/person)
                    </option>
                  ))}
                  <option value="Custom Private Tour">
                    Custom Private Tour Itinerary
                  </option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-heading font-semibold text-xs text-brand-forest">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-heading font-semibold text-xs text-brand-forest">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                  />
                </div>
              </div>

              {/* Phone, Date, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-heading font-semibold text-xs text-brand-forest">
                    Phone / WhatsApp*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    required
                    maxLength={30}
                    placeholder="e.g. +977 98XXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="font-heading font-semibold text-xs text-brand-forest">
                    Travel Date*
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={getDefaultDate()}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="guests" className="font-heading font-semibold text-xs text-brand-forest">
                    Travelers*
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    max="50"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="notes" className="font-heading font-semibold text-xs text-brand-forest">
                  Special Requests / Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  maxLength={2000}
                  placeholder="Arrival time, dietary preferences, or other requirements..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all resize-y"
                />
              </div>

              {/* Botcheck honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                checked={false}
                readOnly
                tabIndex={-1}
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              {/* Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-brand-border mt-1">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-brand-forest bg-brand-ivory hover:bg-brand-border border border-brand-border transition-colors cursor-pointer"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-md font-heading font-semibold text-xs uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover shadow-md transition-colors cursor-pointer disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Booking Inquiry'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookNowModal;
