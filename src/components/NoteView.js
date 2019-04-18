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
    //*       EVENT HANDLERS - selectedNote

    //* handler for selecting a note in AllNotes
    this.handleNoteSelect = this.handleNoteSelect.bind(this); 

    //* callback when user modifies the selectedNote in CurrentNote.
    this.handleSelectedNoteChange = this.handleSelectedNoteChange.bind(this);
  }


  //! TESTING ONLY: data population
  componentDidMount() {
    let testData = new Map();

    testData.set(1, {
      id: 1,
      lastSaved: (new Date()).toUTCString(),
      title: 'Note 1',
      text: 'this is the text for NOTE 1, aaaaaaaaaand I\'m done'
    });

    testData.set(2, {
      id: 2,
      lastSaved: (new Date()).toUTCString(),
      title: 'Note 2',
      text: 'This is placeholder text for Note 2.This is placeholder text for Note 2.This is placeholder text for Note 2.This is placeholder text for Note 2.This is placeholder text for Note 2.This is placeholder text for Note 2.'
    });
    
    this.setState({
      savedNotes: testData,
    });
  }


  //* user selected note to display
  handleNoteSelect(event) {
    let selectedId = Number(event.currentTarget.id);
    console.log(`handleNoteSelect current target: ${selectedId}\n`);
   
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

    this.setState({ selectedNote })
  }

  render() {
    return (
      <div className="note-view">
        <AllNotes savedNotes={this.state.savedNotes} handleNoteSelect={this.handleNoteSelect} />
        <CurrentNote note={this.state.selectedNote} handleNoteChange={this.handleSelectedNoteChange} /> 
      </div>
    );
  }
}



export default NoteView;