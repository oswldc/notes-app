import React from 'react';

function NotesHeader({ searchKeyword, onSearchChange }) {
  return (
    <header className="notes-app_header">
      <h1 className="notes-header_title">Notes App</h1>
      <input
        type="text"
        className="notes-header_search"
        placeholder="Cari..."
        value={searchKeyword}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </header>
  );
}

export default NotesHeader;
