import React, {Component} from 'react';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.noteStyle = {
      backgroundColor: '#0000ff',
      color: '#ffffff',
      fontSize: '1em'
    };
  }

  render() {
    return (
      <div id='note-view' style={{...this.noteStyle}}>Note View</div>
    )
  }
}

export default NoteView;