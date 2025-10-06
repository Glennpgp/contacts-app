import React, { useEffect, useState } from 'react';
import './App.css';
import ContactsList from './components/ContactsList';
import ContactModal from './components/ContactModal';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchContacts() {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (mounted) setContacts(data);
      } catch (err) {
        if (mounted) setError(err.message || 'Failed to load');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchContacts();
    return () => (mounted = false);
  }, []);

  const filtered = contacts.filter((c) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.company.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="App contacts-app">
      <header className="topbar">
        <div className="brand">Contacts</div>
        <div className="search-wrap">
          <input
            className="search"
            placeholder="Search by name, email, phone or company"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="container">
        {loading && <div className="status">Loading contacts…</div>}
        {error && <div className="status error">Error: {error}</div>}
        {!loading && !error && (
          <>
            <div className="summary">
              Showing {filtered.length} of {contacts.length} contacts
            </div>
            <ContactsList
              contacts={filtered}
              onSelect={(c) => setSelected(c)}
            />
          </>
        )}
      </main>

      <ContactModal
        contact={selected}
        onClose={() => setSelected(null)}
      />

      <footer className="footer">
        Data from jsonplaceholder.typicode.com — read-only demo
      </footer>
    </div>
  );
}

export default App;
