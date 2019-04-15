import React from 'react';

function NoteItem({ note }) {
  return (
    <li id={note.id} className='saved-note'>
      <div className='saved-note-title'>{note.title}</div>
      <p className='saved-note-text-snippet'>{note.text}</p>
      <div className='saved-note-date'>{note.lastSaved}</div>
    </li>
  );
}

function DisplayNotes({ allNotes }) {
  const noteList = allNotes.map(note => (
    <NoteItem key={note.id} note={note} /> 
  ));
  return (
    <div className='display-notes'>
      <ul id='saved-notes-list'>{noteList}</ul>
    </div>
  );
}

export default DisplayNotes;