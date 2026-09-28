import { useState } from 'react';

export default function AdminLogin({ onLogin, onBack }) {
  const [email, setEmail] = useState('admin@tourly.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default demo credentials
    if (email === 'admin@tourly.com' && password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid email or password. Use demo credentials below.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172a',
        fontFamily: "'Poppins', sans-serif",
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: '#ffffff',
          borderRadius: '16px',
          padding: '36px 30px',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '0.5px',
            }}
          >
            Tourly <span style={{ color: '#0077ff' }}>Admin</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '6px' }}>
            Sign in to access your travel dashboard
          </p>
        </div>

        {error && (
          <div
            style={{
              background: '#fee2e2',
              color: '#b91c1c',
              padding: '10px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              marginBottom: '16px',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#334155',
                marginBottom: '6px',
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#334155',
                marginBottom: '6px',
              }}
            >
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              background: '#0077ff',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'background 0.2s',
            }}
          >
            Sign In to Dashboard
          </button>
        </form>

        {/* Demo Credentials Box */}
        <div
          style={{
            marginTop: '24px',
            padding: '12px 16px',
            background: '#f8fafc',
            border: '1px dashed #cbd5e1',
            borderRadius: '8px',
            fontSize: '0.82rem',
            color: '#475569',
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: '4px', color: '#1e293b' }}>
            🔑 Demo Credentials:
          </div>
          <div><strong>Email:</strong> admin@tourly.com</div>
          <div><strong>Password:</strong> admin123</div>
        </div>

        <button
          onClick={onBack}
          style={{
            width: '100%',
            background: 'none',
            border: 'none',
            color: '#64748b',
            fontSize: '0.85rem',
            marginTop: '18px',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          ← Return to Public Website
        </button>
      </div>
    </div>
  );
}
