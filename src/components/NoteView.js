import React, {Component} from 'react';
import DisplayNotes from './DisplayNotes';
import CurrentNote from './CurrentNote';

class NoteView extends Component {
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
        {
          id: 1,
          lastSaved: (new Date()).toUTCString(),
          title: 'First saved note :D',
          text: 'test note test note test note test note test note test note'
        },
        {
          id: 2,
          lastSaved: (new Date()).toUTCString(),
          title: 'Another note title',
          text: 'aanother note test data to see how the <li> wraps</li>another note test data to see how the <li> wraps</li>another note test data to see how the <li> wraps</li>nother note test data to see how the <li> wraps</li>'
        },
        {
          id: 3,
          lastSaved: (new Date()).toUTCString(),
          title: '3 Another note title',
          text: 'another note test data to see how the <li> wraps</li>'
        },
        {
          id: 4,
          lastSaved: (new Date()).toUTCString(),
          title: 'adhfaAnother note title',
          text: 'another note test data to see how the <li> wraps</li>'
        },
        {
          id: 5,
          lastSaved: (new Date()).toUTCString(),
          title: ' ayyy Another note title',
          text: 'another note test data to see how the <li> wraps</li>'
        },
      ], 

      notesCreated: 0, //* total notes created - will differ from allNotes length if notes were deleted
      isEditingNote: true, //* true if a note is being created / edited
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
    let testSelectedNote = { ...this.state.allNotes[0] }; //uses the first note to test editing

    return (
      <div className="note-view">
        <DisplayNotes allNotes={this.state.allNotes} />
        <CurrentNote isDisplayed={this.state.isEditingNote} note={testSelectedNote} />
      </div>
    );
  }
}



export default NoteView;