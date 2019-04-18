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

function AllNotes({ savedNotes, handleNoteSelect }) {
  const noteList = [...savedNotes.values()].map(note => (
    <NoteItem key={note.id} note={note} handleNoteSelect={handleNoteSelect} /> 
  ));

  return (
    <div className='display-notes'>
      <ul id='saved-notes-list' >{noteList}</ul>
    </div>
  );
}

export default AllNotes;