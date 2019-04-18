<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> editNote

//* User didn't select a note to display or create a new note
function NoSelection(props) {
  return (
    <div className='no-note-selection'>No selection :o</div>
  );
}

<<<<<<< HEAD
//* User is either editing a previously saved note or creating a new note 
class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      text: this.props.note.text
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(`onChange: ${event.target.id}`);

    switch (event.target.id) {
      case 'edit-note-title':
        this.setState({ title: event.target.value });
        break;

      case 'edit-note-text':
        this.setState({ text: event.target.text });
        break;
      
      default:
        console.log('Event mod not supported.');
    }
  }

  render() {
    return (
      <div className='edit-note'>
        <input id='edit-note-title' type='text' value={this.state.title}
               onChange={this.handleChange} placeholder='Title' />

        <textarea id='edit-note-text' value={this.state.text} 
                  onChange={this.handleChange} placeholder='Start writing...'>
        </textarea>
      </div>
    );
  }
=======

//* User is either editing a previously saved note or creating a new note 
function EditNote({ note, handleNoteChange }) {
  return (
    <div className='edit-note'>
      <input id='edit-note-title' type='text' value={note.title}
              onChange={handleNoteChange} placeholder='Title' />

      <textarea id='edit-note-text' value={note.text} 
                onChange={handleNoteChange} placeholder='Start writing...'>
      </textarea>
    </div>
  );
>>>>>>> editNote
}


/*
* displays view for editing a note ONLY if user selected 
* a previously saved note or to create a new note */
<<<<<<< HEAD
function CurrentNote({ isDisplayed, note }) { 

  return (
    <article className='current-note'>
      { isDisplayed ?
        <EditNote note={note} /> :
=======
function CurrentNote({ note, handleNoteChange }) { 
  console.log('CurrentNote rendered');

  return (
    <article className='current-note'>
      { note ?
        <EditNote note={note} handleNoteChange={handleNoteChange} /> :
>>>>>>> editNote
        <NoSelection />
      }
    </article>
  );
}

export default CurrentNote;