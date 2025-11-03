import React from 'react';
import { getInitialData } from '../utils/index.js';
import { showFormattedDate } from '../utils/index.js';
import NotesList from './NotesList.jsx';
import NotesInput from './NotesInput.jsx';
import NotesHeader from './NotesHeader.jsx';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      date: showFormattedDate(),
      searchKeyword: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
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
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchChangeHandler(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.searchKeyword.toLowerCase());
    });
    return (
      <div className="notes-app">
        <NotesHeader
          searchKeyword={this.state.searchKeyword}
          onSearchChange={this.onSearchChangeHandler}
        />
        <NotesInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NotesList notes={filteredNotes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NotesApp;
