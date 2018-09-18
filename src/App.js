import React, { Component } from 'react';
import './App.css';

import IssueList from './issue-list.js';

class App extends Component {
  render() {
    return (
      <div className="App container text-left">
        <h1 className="nav justify-content-center custom-nav">Techlahoma Speakers Wanted</h1>

        <div className="row">
          <IssueList />
        </div>
      </div>
    );
  }
}

export default App;
