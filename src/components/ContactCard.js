import React from 'react';

function avatarFor(name) {
  const parts = name.split(' ');
  const initials = parts.map((p) => p[0]).slice(0,2).join('').toUpperCase();
  return initials;
}

export default function ContactCard({ contact, onClick }) {
  return (
    <article className="card" onClick={() => onClick(contact)} tabIndex={0}>
      <div className="avatar">{avatarFor(contact.name)}</div>
      <div className="card-body">
        <h3 className="name">{contact.name}</h3>
        <div className="meta">{contact.company?.name}</div>
        <div className="muted">{contact.email} · {contact.phone}</div>
      </div>
    </article>
  );
}
