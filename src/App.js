import React, { Component } from 'react';
import './App.css';
import NoteContainer from './containers/NoteContainer.js'


class App extends Component {
  render() {
    return (

      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <header className="App-header">
            <h1 className="App-title">Welcome To Beep-Beep Boop-Boop</h1>
          </header>
        </div>
          <NoteContainer />
        </div>
    )
  }
}

export default App;
