import React from 'react';

//* User didn't select a note to display or create a new note
function NoSelection(props) {
  return (
    <div className='no-note-selection'>No selection :o</div>
  );
}


//* User is either editing a previously saved note or creating a new note 
function EditNote({ note, handleNoteChange, handleSaveNote }) {
  return (
    <div className='edit-note'>
      <div className='edit-note-opts'>
        <button className='edit-note-save-btn' type='button' onClick={handleSaveNote}>
          <img src='./assets/save-white.svg' alt='save note button'/>
        </button> 
      </div>
      <input id='edit-note-title' type='text' value={note.title}
              onChange={handleNoteChange} placeholder='Title' />

      <textarea id='edit-note-text' value={note.text} 
                onChange={handleNoteChange} placeholder='Start writing...'>
      </textarea>
    </div>
  );
}


/*
* displays view for editing a note ONLY if user selected 
* a previously saved note or to create a new note */
function CurrentNote({ note, handleNoteChange, handleSaveNote }) { 
  console.log('CurrentNote rendered');

  return (
    <article className='current-note'>
      { note ?
        <EditNote note={note} handleNoteChange={handleNoteChange} handleSaveNote={handleSaveNote} /> :
        <NoSelection />
      }
    </article>
  );
}

export default CurrentNote;