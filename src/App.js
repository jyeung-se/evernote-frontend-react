import React, { Component } from 'react';
import './App.css';
import NoteContainer from './containers/NoteContainer.js'


class App extends Component {

  handleClick = () => {
    alert("Woahh Woahh Wooahhh!!... Watch it HOOman! No random Clicky Clicky, Okay?")
  }


  render() {
    return (

      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <header className="App-header" onClick={this.handleClick}>
            <font size="7">Welcome To Beep-Bop Boop-Bop</font>
          <br/>
            <h1>Where HOOmans are transformed into Whhhhhaaaales</h1>
          </header>
        </div>
         <NoteContainer />
       </div>
    )
  }

}

export default App;
