import React from 'react';
import ContactCard from './ContactCard';

export default function ContactsList({ contacts, onSelect }) {
  if (!contacts || contacts.length === 0) {
    return <div className="empty">No contacts found.</div>;
  }

  return (
    <section className="grid">
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} onClick={onSelect} />
      ))}
    </section>
  );
}
