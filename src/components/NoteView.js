import React, {Component} from 'react';
import AllNotes from './AllNotes';
import CurrentNote from './CurrentNote';

class NoteView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedNotes: new Map(),
      notesCreated: 0, //* total notes created - will differ from savedNotes length if notes were deleted
      selectedNote: null, //* current selected note displayed in EditNote
    };


    //*************************************** */
    //*       EVENT HANDLERS 

    //* handler for selecting a note in AllNotes
    this.handleNoteSelect = this.handleNoteSelect.bind(this); 

    //* callback when user modifies the selectedNote in CurrentNote.
    this.handleSelectedNoteChange = this.handleSelectedNoteChange.bind(this);

    //* callback when user clicks "new note" button
    this.handleNewNote = this.handleNewNote.bind(this);

    //* callback to clear selectedNote - does NOT modify the stored data in savedNotes
    this.handleClearSelectedNote = this.handleClearSelectedNote.bind(this);

    //* callback to save selectedNote to savedNotes
    this.handleSaveNote = this.handleSaveNote.bind(this);
    
    //* callback to delete selectedNote, removing from savedNotes and clearing currentNote
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  //* creates a new "temporary" note by only storing it as the selectedNote.
  handleNewNote(event) {
    console.log('new note :D');
    
    //TODO ALL:
    //? ask user to save / discard current note if one is selected and has been modified
    //! REMOVE SAVEDNOTES DATA WHILE TESTING
    //* create new note object and save as selectedNote
    //* if the selectedNote is saved it will need to be added to savedNotes

    //* setup for new note object
    let notesCreated = this.state.notesCreated; //* id based on number of notes created (not tied to savedNotes.size)
    const selectedNote = {
      id: notesCreated,
      lastSaved: (new Date()).toUTCString(),
      title: '',
      text: ''
    };

    notesCreated += 1; //* updates number of notes created
    this.setState({ notesCreated, selectedNote }); 
  }

  //* clears the selectedNote but does NOT modify the savedNote data
  handleClearSelectedNote(event) {
    this.setState({ selectedNote: null });
  }

  //* note is saved if at least the title field isn't empty
  isValidNote(note) {
    return note.title !== '';
  }

  //* removes the whitespace around the title and text body of the note
  trimNote() {
    const trimmedNote = { ...this.state.selectedNote };
    trimmedNote.title = trimmedNote.title.trim(); //* removes whitespace around title
    trimmedNote.text = trimmedNote.text.trim();   //* removes whitespace around text body

    return trimmedNote;
  }

  //* creates / updates selectedNote in savedNotes: the selectedNote data will overwrite
  //* any data from the same note (same id) previously stored in savedNotes.
  handleSaveNote(event) {
    const updatedNote = this.trimNote(); //* returns the selected note with the whitespace around title/text removed

    if (this.isValidNote(updatedNote)) {
      //* saves the changes from selectedNote into the savedNotes list
      updatedNote.lastSaved = (new Date()).toUTCString(); //* updates save timestamp
      const savedNotes = this.state.savedNotes;

      //* updates selected note & state
      savedNotes.set(updatedNote.id, updatedNote);
      this.setState({ savedNotes });
    }

    else {
      alert('COMPUTER SAYS: The note must be filled out to use it...');
    }
  }


  handleDeleteNote(event) {
    const savedNotes = this.state.savedNotes;

    //* a note is seleted that can be removed
    if (this.state.selectedNote) {
      this.state.savedNotes.delete(this.state.selectedNote.id);

      this.setState({   //* clears selectedNote and updates savedNotes
        savedNotes: savedNotes, 
        selectedNote: null
      });
    }

    //* object to delete doesn't exist
    else {
      alert('COMPUTER SAYS: Nothing selected to remove...');
    }
  }


  //* user selected note to display
  handleNoteSelect(event) {
    let selectedId = Number(event.currentTarget.id);
   
    this.setState({
      selectedNote: { ...this.state.savedNotes.get(selectedId) }
    });
  }


  //* the selectedNote has been updated
  handleSelectedNoteChange(event) {
    const selectedNote = { ...this.state.selectedNote };

    switch (event.target.id) {
      case 'edit-note-title': //* selected note title modified
        selectedNote.title = event.target.value;
        break;

      case 'edit-note-text': //* selected note text modified
        selectedNote.text = event.target.value;
        break;
      
      default:
        console.log('Event mod not supported.');
    }

    this.setState({ selectedNote });
  }

  render() {
    return (
      <div className="note-view">
        <AllNotes savedNotes={this.state.savedNotes} handleNoteSelect={this.handleNoteSelect}
                  handleNewNote={this.handleNewNote} />

        <CurrentNote note={this.state.selectedNote} handleNoteChange={this.handleSelectedNoteChange}
                     handleSaveNote={this.handleSaveNote} handleClearNote={this.handleClearSelectedNote}
                     handleDeleteNote={this.handleDeleteNote} />
      </div>
    );
  }
}



export default NoteView;