import React, { Component } from 'react';
import './App.css';

import IssueList from './issue-list.js';

class App extends Component {
  render() {
    return (
      <div className="App container text-left">
        <div className='Help-header'>
        <h1 className="nav justify-content-center custom-nav">Techlahoma Speakers Wanted</h1>
        <div className="Help-link">
            <a href="https://github.com/techlahoma/speakers-wanted/issues/new/choose" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Create New Issue</a>
          </div>
          </div>

        <div className="row">
          <IssueList />
        </div>
      </div>
    );
  }
}

export default App;
