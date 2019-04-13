import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import NoteView from './components/noteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NoteView />
        <Footer />
      </div>
    );
  }
}

export default App;
