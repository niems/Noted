import React, { Component } from 'react';

//* User didn't select a note to display or create a new note
function NoSelection(props) {
  return (
    <div className='no-note-selection'>No selection :o</div>
  );
}

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
}


/*
* displays view for editing a note ONLY if user selected 
* a previously saved note or to create a new note */
function CurrentNote({ isDisplayed, note }) { 

  return (
    <article className='current-note'>
      { isDisplayed ?
        <EditNote note={note} /> :
        <NoSelection />
      }
    </article>
  );
}

export default CurrentNote;