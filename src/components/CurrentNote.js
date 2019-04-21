import React from 'react';

//* User didn't select a note to display or create a new note
function NoSelection(props) {
  return (
    <div className='no-note-selection'>No selection :o</div>
  );
}


//* User is either editing a previously saved note or creating a new note 
function EditNote({ note, handleNoteChange, handleSaveNote, handleClearNote, handleDeleteNote }) {
  return (
    <div className='edit-note'>
      <div id='edit-note-opts-bar' className='note-opts-bar'>
        <button id='edit-note-back-btn' className='note-opts-btn' type='button' onClick={handleClearNote}>
          <img src='./assets/back-arrow.svg' alt='clear selected note button'/>
        </button> 

        <span className='note-opts-bar-container'>
          <button id='edit-note-save-btn' className='note-opts-btn' type='button' onClick={handleSaveNote}>
            <img src='./assets/save-white.svg' alt='save note button'/>
          </button> 

          <button id='edit-note-delete-btn' className='note-opts-btn' type='button' onClick={handleDeleteNote}>
            <img src='./assets/delete-white.svg' alt='save note button'/>
          </button> 
        </span>
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
function CurrentNote({ note, handleNoteChange, handleSaveNote, handleClearNote, handleDeleteNote }) { 
  console.log('CurrentNote rendered');

  const currentNoteClasses = note ? 'current-note selected' : 'current-note';

  return (
    <article className={currentNoteClasses}>
      { note ?
        <EditNote note={note} handleNoteChange={handleNoteChange}
                  handleSaveNote={handleSaveNote} handleClearNote={handleClearNote} handleDeleteNote={handleDeleteNote} /> :
        <NoSelection />
      }
    </article>
  );
}

export default CurrentNote;