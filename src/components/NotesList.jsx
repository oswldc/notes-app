import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          onDelete={onDelete}
          {...note}
        />
      ))}
    </div>
  );
}

export default NotesList;
