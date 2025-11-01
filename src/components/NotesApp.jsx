import React from 'react';
import { getInitialData } from '../utils/index.js';
import { showFormattedDate } from '../utils/index.js';
import NotesList from './NotesList.jsx';
import NotesInput from './NotesInput.jsx';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      date: showFormattedDate(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: this.state.date,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="notes-app">
        <h1>Notes App</h1>
        <h2>Tambah Catatan</h2>
        <NotesInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NotesApp;
