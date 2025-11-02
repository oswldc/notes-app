import React from 'react';
import { showFormattedDate } from '../utils';

function NotesItemBody({ title, body, createdAt }) {
  return (
    <div className="notes-item_body">
      <h3 className="notes-item_title">{title}</h3>
      <p className="notes-item_content">{body}</p>
      <p className="notes-item_date">{showFormattedDate(createdAt)}</p>
    </div>
  );
}

export default NotesItemBody;
