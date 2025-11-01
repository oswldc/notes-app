import React from 'react';
import NOtesItemBody from './NotesItemBody.jsx';
import DeleteButton from './DeleteButton.jsx';

function NotesItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="notes-item">
      <NOtesItemBody title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
