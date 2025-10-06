import React from 'react';

export default function ContactModal({ contact, onClose }) {
  if (!contact) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-header">
          <div className="modal-avatar">{contact.name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}</div>
          <h2>{contact.name}</h2>
          <div className="muted">{contact.company?.name}</div>
        </div>
        <div className="modal-body">
          <dl>
            <dt>Username</dt><dd>{contact.username}</dd>
            <dt>Email</dt><dd>{contact.email}</dd>
            <dt>Phone</dt><dd>{contact.phone}</dd>
            <dt>Website</dt><dd><a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a></dd>
            <dt>Address</dt><dd>{contact.address?.suite}, {contact.address?.street}, {contact.address?.city} {contact.address?.zipcode}</dd>
            <dt>Company</dt><dd>{contact.company?.catchPhrase}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
