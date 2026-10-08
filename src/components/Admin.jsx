import React, { useState, useEffect } from 'react';
import { loadResponses, ADMIN_PASSWORD } from '../utils/storage';
import '../styles/Admin.css';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('admin') === '1');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [responses, setResponses] = useState(null);

  useEffect(() => {
    if (!loggedIn) return;
    loadResponses()
      .then((list) => setResponses(list.slice().reverse()))
      .catch(() => setResponses([]));
  }, [loggedIn]);

  const login = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin', '1');
      setLoggedIn(true);
      setError('');
    } else {
      setError('Wrong password.');
    }
  };

  const logout = () => {
    sessionStorage.removeItem('admin');
    setLoggedIn(false);
    setPassword('');
    setResponses(null);
  };

  return (
    <section id="admin">
      <div className="container">
        {/* Show/hide handled with a CSS class toggled from React state */}
        <div className={`admin-login ${loggedIn ? 'hidden' : ''}`}>
          <p className="section-label">Owner only</p>
          <h2 className="section-title"><span>Admin Login</span></h2>
          <form className="admin-form" onSubmit={login}>
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn-submit">Login</button>
            {error && <p className="admin-error">{error}</p>}
          </form>
        </div>

        <div className={`admin-responses ${loggedIn ? '' : 'hidden'}`}>
          <p className="section-label">Inbox</p>
          <h2 className="section-title"><span>User Responses</span></h2>
          <button className="btn-submit" onClick={logout}>Logout</button>
          <div className="response-list">
            {responses === null && <p>Loading...</p>}
            {responses && responses.length === 0 && <p>No responses yet.</p>}
            {responses && responses.map((r, i) => (
              <div className="response-card" key={i}>
                <h3>{r.name} <span>({r.email})</span></h3>
                <p>{r.message}</p>
                <small>{new Date(r.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
