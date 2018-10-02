import React, { Component } from 'react';
import './App.css';
import NoteContainer from './containers/NoteContainer.js'

class App extends Component {

  handleClick = () => {
    alert("Woahh Woahh Wooahhh!!... Why so curious, hmm?")
  }


  render() {
    return (

      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <header className="App-header" onClick={this.handleClick}>
            <font size="7">Welcome To Beep-Bop Boop-Bop</font>
          <br/>
            <h1>Express Thyself</h1>
          </header>
        </div>
          <NoteContainer />
       </div>
    )
  }

}

export default App;
