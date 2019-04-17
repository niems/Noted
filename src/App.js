import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NoteView from './components/NoteView';
import './App.css';

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
