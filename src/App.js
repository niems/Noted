import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
//import DisplayNotes from './components/DisplayNotes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: []
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
