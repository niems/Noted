import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: [ //* stores all the saved notes
        /*
        {
          id: this represents the current number of notes created; this.state.notesCreated++.
          lastSaved: timestamp of the last time the note was saved

          title (user input): title of the note.
          note (user input): the saved note.
        }
        */
      ], 

      notesCreated: 0, //* total notes created - will differ from allNotes length if notes were deleted
    };

    this.addNote = this.addNote.bind(this); //* appends new note to allNotes
    this.deleteNote = this.deleteNote.bind(this); //* deletes note based on id
  }

  addNote() {
    return null;
  }

  deleteNote() {
    return null;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
