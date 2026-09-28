import { useState } from 'react';
import { useData } from '../context/DataContext';
import './admin.css';

export default function AdminDashboard({ onExit, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPkg, setNewPkg] = useState({
    title: '',
    location: '',
    price: '',
    duration: '7D/6N',
    pax: 'pax: 10',
    reviews: '(1 review)',
    text: '',
  });

  const {
    packages,
    bookings,
    subscribers,
    addPackage,
    deletePackage,
    updateBookingStatus,
    deleteBooking,
  } = useData();

  const totalRevenue = bookings.reduce(
    (acc, b) => (b.status === 'Confirmed' ? acc + Number(b.total || 0) : acc),
    0
  );

  const handleCreatePackage = (e) => {
    e.preventDefault();
    if (!newPkg.title || !newPkg.price) return;

    addPackage({
      ...newPkg,
      price: Number(newPkg.price),
      image: packages[0]?.image || '',
    });

    setNewPkg({
      title: '',
      location: '',
      price: '',
      duration: '7D/6N',
      pax: 'pax: 10',
      reviews: '(1 review)',
      text: '',
    });
    setIsModalOpen(false);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Tourly</h2>
          <span>Admin</span>
        </div>

        <nav className="admin-nav">
          <button
            className={`admin-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <ion-icon name="grid-outline"></ion-icon>
            Overview
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('packages')}
          >
            <ion-icon name="airplane-outline"></ion-icon>
            Tour Packages ({packages.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <ion-icon name="calendar-outline"></ion-icon>
            Bookings ({bookings.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'subscribers' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscribers')}
          >
            <ion-icon name="mail-outline"></ion-icon>
            Subscribers ({subscribers.length})
          </button>
        </nav>

        <div className="admin-sidebar-footer" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button className="btn-back-site" onClick={onExit}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Public Site
          </button>
          {onLogout && (
            <button
              className="btn-back-site"
              onClick={onLogout}
              style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#fca5a5' }}
            >
              <ion-icon name="log-out-outline"></ion-icon>
              Sign Out
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'packages' && 'Tour Packages Management'}
            {activeTab === 'bookings' && 'Customer Bookings & Inquiries'}
            {activeTab === 'subscribers' && 'Newsletter Subscribers'}
          </h1>

          <div className="admin-user">
            <div className="admin-avatar">AD</div>
            <span>Admin</span>
          </div>
        </header>

        <div className="admin-content">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-info">
                    <p>Total Revenue</p>
                    <h3>${totalRevenue.toLocaleString()}</h3>
                  </div>
                  <div className="stat-icon stat-green">
                    <ion-icon name="cash-outline"></ion-icon>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-info">
                    <p>Total Bookings</p>
                    <h3>{bookings.length}</h3>
                  </div>
                  <div className="stat-icon stat-blue">
                    <ion-icon name="ticket-outline"></ion-icon>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-info">
                    <p>Active Packages</p>
                    <h3>{packages.length}</h3>
                  </div>
                  <div className="stat-icon stat-purple">
                    <ion-icon name="globe-outline"></ion-icon>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-info">
                    <p>Subscribers</p>
                    <h3>{subscribers.length}</h3>
                  </div>
                  <div className="stat-icon stat-orange">
                    <ion-icon name="people-outline"></ion-icon>
                  </div>
                </div>
              </div>

              {/* Recent Bookings Table */}
              <div className="dashboard-card">
                <div className="card-header-flex">
                  <h2>Recent Bookings & Inquiries</h2>
                  <button
                    className="btn-add"
                    onClick={() => setActiveTab('bookings')}
                  >
                    View All
                  </button>
                </div>

                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.slice(0, 5).map((b) => (
                        <tr key={b.id}>
                          <td><strong>{b.id}</strong></td>
                          <td>
                            {b.customerName}
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                              {b.email}
                            </div>
                          </td>
                          <td>{b.destination}</td>
                          <td>{b.date}</td>
                          <td>${b.total}</td>
                          <td>
                            <span
                              className={`badge badge-${b.status.toLowerCase()}`}
                            >
                              {b.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: PACKAGES */}
          {activeTab === 'packages' && (
            <div className="dashboard-card">
              <div className="card-header-flex">
                <h2>All Tour Packages ({packages.length})</h2>
                <button
                  className="btn-add"
                  onClick={() => setIsModalOpen(true)}
                >
                  <ion-icon name="add-circle-outline"></ion-icon>
                  Add New Package
                </button>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Location</th>
                      <th>Duration</th>
                      <th>Capacity</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packages.map((pkg) => (
                      <tr key={pkg.id}>
                        <td><strong>{pkg.title}</strong></td>
                        <td>{pkg.location}</td>
                        <td>{pkg.duration}</td>
                        <td>{pkg.pax}</td>
                        <td><strong>${pkg.price}</strong> / person</td>
                        <td>
                          <button
                            className="btn-action btn-delete"
                            onClick={() => deletePackage(pkg.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="dashboard-card">
              <div className="card-header-flex">
                <h2>Manage Customer Bookings & Inquiries</h2>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Booking ID</th>
                      <th>Customer</th>
                      <th>Destination</th>
                      <th>Pax</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => (
                      <tr key={b.id}>
                        <td><strong>{b.id}</strong></td>
                        <td>
                          {b.customerName}
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                            {b.email}
                          </div>
                        </td>
                        <td>{b.destination}</td>
                        <td>{b.pax}</td>
                        <td>{b.date}</td>
                        <td><strong>${b.total}</strong></td>
                        <td>
                          <span
                            className={`badge badge-${b.status.toLowerCase()}`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-btn-group">
                            {b.status !== 'Confirmed' && (
                              <button
                                className="btn-action btn-confirm"
                                onClick={() =>
                                  updateBookingStatus(b.id, 'Confirmed')
                                }
                              >
                                Confirm
                              </button>
                            )}
                            {b.status !== 'Cancelled' && (
                              <button
                                className="btn-action btn-delete"
                                onClick={() =>
                                  updateBookingStatus(b.id, 'Cancelled')
                                }
                              >
                                Cancel
                              </button>
                            )}
                            <button
                              className="btn-action"
                              style={{ background: '#f1f5f9' }}
                              onClick={() => deleteBooking(b.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: SUBSCRIBERS */}
          {activeTab === 'subscribers' && (
            <div className="dashboard-card">
              <div className="card-header-flex">
                <h2>Newsletter Subscribers ({subscribers.length})</h2>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Subscriber Email</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((email, idx) => (
                      <tr key={email}>
                        <td>{idx + 1}</td>
                        <td><strong>{email}</strong></td>
                        <td>Website Footer Form</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Package Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Tour Package</h3>
            <form onSubmit={handleCreatePackage} className="modal-form">
              <div className="form-group">
                <label>Package Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tropical Maldives Getaway"
                  value={newPkg.title}
                  onChange={(e) =>
                    setNewPkg({ ...newPkg, title: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Location *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maldives"
                  value={newPkg.location}
                  onChange={(e) =>
                    setNewPkg({ ...newPkg, location: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Price (USD) *</label>
                <input
                  type="number"
                  required
                  placeholder="e.g. 850"
                  value={newPkg.price}
                  onChange={(e) =>
                    setNewPkg({ ...newPkg, price: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  rows="3"
                  placeholder="Brief package highlights..."
                  value={newPkg.text}
                  onChange={(e) =>
                    setNewPkg({ ...newPkg, text: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-add">
                  Create Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
