import React from 'react';

function NotesItemBody({ title, body, createdAt }) {
  return (
    <div className="notes-item_body">
      <h3 className="notes-item_title">{title}</h3>
      <p className="contact-item_body">{body}</p>
      <p className="notes-item_date">{createdAt}</p>
    </div>
  );
}

export default NotesItemBody;
