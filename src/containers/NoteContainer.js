import React, { Component } from 'react'
import EditForm from '../components/EditForm'
import CreateForm from '../components/CreateForm'
import NoteList from '../components/NoteList'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class NoteContainer extends Component {
  constructor() {
    super()

    this.state={
      notes: [],
      currentNote: {},
      user: {
        id: 1,
        name: "jack"
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(notesData => this.setState({
      notes: notesData
    }))
  }

  //
  // createNewNote = (note) => {
  //   this.setState({
  //     newNote: note
  //   })
  // }

  //
  // updateNewNoteInputs = (event) => {
  //   this.setState({
  //     ...this.state,
  //     newNote:
  //     {
  //       ...this.state.newNote,   // prevents overwriting other keys (if any) in the newNote state not listed below
  //       [event.target.name]: event.target.value,   // this way requires you add 'name' to the input fields in your Form
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }
  //

  handleNewNoteSubmit = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
    // event.target.reset()
    this.handleCreate(note)
  }


  handleCreate = (note) => {
    fetch(`http://localhost:3000/api/v1/notes/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "title": `${note.title}`,
        "body": `${note.body}`,
        "user_id": `${this.state.user.id}`
      })
    }).then(res => console.log("Created a new note."))
  }


  // updateExistingNoteInputs = (event) => {
  //   this.setState({
  //     ...this.state,
  //     currentNote:
  //     {
  //       ...this.state.currentNote,   // prevents overwriting other keys (if any) in the CurrentNote state not listed below
  //       [event.target.name]: event.target.value,   // this way requires you add 'name' to the input fields in your Form
  //       [event.target.name]: event.target.value
  //     }
  //   })
  // }


  handleEditNote = (note) => {
    this.setState({
      currentNote: note
    })
  }


  // handleEditSubmit = (event) => {
  //   this.setState(prevState => ({
  //     notes: prevState.notes.map(
  //       note => (note.id === this.state.currentNote.id ? Object.assign(note, this.state.currentNote) : note)
  //     )
  //   }))
  //   event.preventDefault()
  //   this.handlePatch()
  // }
  //
  //
  // handlePatch = () => {
  //   fetch(`http://localhost:3000/api/v1/notes/${this.state.currentNote.id}`, {
  //     method: "PATCH",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       "title": `${this.state.currentNote.title}`,
  //       "body": `${this.state.currentNote.body}`
  //     })
  //   }).then(res => console.log("Updated the note."))
  // }


  handleDeleteNote = (note) => {
    fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(res => console.log("Deleted the note."))
    this.setState({
      notes: this.state.notes.filter(eachNote => eachNote.id !== note.id)
    })
  }


  render() {
    // console.log("notes is", this.state.notes)
    const noteList =
    <div>
      <h2>Evernote Whale just passin' on by. Nothing to see here folks.</h2>
      <NoteList notes={this.state.notes} handleEditNote={this.handleEditNote} handleDeleteNote={this.handleDeleteNote} />
    </div>

    // const createForm =
    // <div>
    //   <h2>Create a new note</h2>
    //   <CreateForm notes={this.state.notes} newNote={this.state.newNote} updateNewNoteInputs={this.updateNewNoteInputs} handleNewNoteSubmit={this.handleNewNoteSubmit} />
    // </div>

    const editForm =
    <div>
      <h2>Edit note</h2>
      <EditForm notes={this.state.notes} currentNote={this.state.currentNote} updateExistingNoteInputs={this.updateExistingNoteInputs} handleEditSubmit={this.handleEditSubmit} />
      <NoteList notes={this.state.notes} handleEditNote={this.handleEditNote} handleDeleteNote={this.handleDeleteNote} />
    </div>


    return (
      <Router>
        <div>
          <Route exact path="/newnote" render={(renderprops) => <CreateForm notes={this.state.notes} newNote={this.state.newNote} updateNewNoteInputs={this.updateNewNoteInputs} handleNewNoteSubmit={this.handleNewNoteSubmit} {...renderprops} />} />
          <Route exact path="/editnote" component={() => editForm} />
          <br/>
          <br/>
          <Route exact path="/" component={() => noteList} />
        </div>
      </Router>
    )
  }


  // render() {
  //   // console.log(this.state.notes)
  //   return (
  //     <div className="ui grid container">
  //       <br/>
  //       <h2>Create New Note</h2>
  //       <CreateForm newNote={this.state.newNote} updateNewNoteInputs={this.updateNewNoteInputs} handleNewNoteSubmit={this.handleNewNoteSubmit} />
  //       <h2>Edit Existing Note</h2>
  //       <EditForm currentNote={this.state.currentNote} updateExistingNoteInputs={this.updateExistingNoteInputs} handleEditSubmit={this.handleEditSubmit} />
  //       <p><b>Evernote Whale</b> just passin' on by. Nothing to see here folks.</p>
  //       <NoteList notes={this.state.notes} handleEditNote={this.handleEditNote} handleDeleteNote={this.handleDeleteNote} />
  //     </div>
  //   )
  // }


}

export default NoteContainer
