import React, { Component } from 'react';
import SpeakerRequestList from './components/speakerrequestlist.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpeakerRequestList />
      </div>
    );
  }
}

export default App;
