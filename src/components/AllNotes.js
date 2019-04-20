import React from 'react';

function NoteItem({ note, handleNoteSelect }) {
  return (
    <li id={note.id} className='saved-note' onClick={handleNoteSelect}>
      <div className='saved-note-title'>{note.title}</div>
      <p className='saved-note-text-snippet'>{note.text}</p>
      <div className='saved-note-date'>{note.lastSaved}</div>
    </li>
  );
}

function AllNotes({ savedNotes, handleNoteSelect, handleDeleteNote }) {
  const noteList = [...savedNotes.values()].map(note => (
    <NoteItem key={note.id} note={note} handleNoteSelect={handleNoteSelect} /> 
  ));

  return (
    <div className='display-notes'>

      <div id='all-notes-opts-bar' className='note-opts-bar'>
        <span className='all-notes-opts-title'>All Notes</span>
        <button id='all-notes-delete-btn' className='note-opts-btn' type='button' onClick={handleDeleteNote}>
          <img src='./assets/delete-white.svg' alt='delete selected note'/>
        </button> 
      </div>

      <ul id='saved-notes-list' >{noteList}</ul>
    </div>
  );
}

export default AllNotes;