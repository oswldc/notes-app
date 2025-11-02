import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, 50),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      createdAt: new Date().toISOString(),
    };

    this.props.addNote(newNote);
  }

  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="textarea"
          placeholder="Masukkan Judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          type="textarea"
          placeholder="Masukkan Catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NotesInput;
