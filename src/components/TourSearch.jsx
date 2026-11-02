import { useState } from 'react';

function TourSearch({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    destination: '',
    people: 1,
    checkin: '',
    checkout: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenBooking(formData.destination || 'Selected Custom Trip');
  };

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-5">
      <div className="bg-white rounded-xl shadow-xl border border-brand-border/60 p-6 sm:p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          {/* Destination */}
          <div className="flex flex-col gap-1.5 lg:col-span-1">
            <label
              htmlFor="destination"
              className="font-heading font-semibold text-xs text-brand-forest uppercase tracking-wider"
            >
              Search Destination*
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="e.g. Kathmandu, Greece"
              className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
            />
          </div>

          {/* Pax Number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="people"
              className="font-heading font-semibold text-xs text-brand-forest uppercase tracking-wider"
            >
              Pax Number*
            </label>
            <input
              type="number"
              name="people"
              id="people"
              required
              min="1"
              placeholder="No. of Travelers"
              className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
            />
          </div>

          {/* Check-in */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkin"
              className="font-heading font-semibold text-xs text-brand-forest uppercase tracking-wider"
            >
              Check-in Date*
            </label>
            <input
              type="date"
              name="checkin"
              id="checkin"
              required
              className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
              value={formData.checkin}
              onChange={(e) =>
                setFormData({ ...formData, checkin: e.target.value })
              }
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="checkout"
              className="font-heading font-semibold text-xs text-brand-forest uppercase tracking-wider"
            >
              Check-out Date*
            </label>
            <input
              type="date"
              name="checkout"
              id="checkout"
              required
              className="w-full bg-brand-ivory border border-brand-border rounded-md px-3.5 py-2.5 text-sm text-brand-charcoal font-body focus:outline-none focus:border-brand-red focus:bg-white focus:ring-2 focus:ring-brand-red/10 transition-all"
              value={formData.checkout}
              onChange={(e) =>
                setFormData({ ...formData, checkout: e.target.value })
              }
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full h-11 inline-flex items-center justify-center rounded-md font-heading font-semibold text-sm text-white bg-brand-red hover:bg-brand-red-hover shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Find Journeys
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TourSearch;
