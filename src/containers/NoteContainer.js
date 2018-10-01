import React, { Component } from 'react'
import EditForm from '../components/EditForm'
import CreateForm from '../components/CreateForm'
import NoteList from '../components/NoteList'


class NoteContainer extends Component {
  constructor() {
    super()

    this.state={
      notes: [],
      currentNote: {},
      newNote: {},
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


  createNewNote = (note) => {
    this.setState({
      newNote: note
    })
  }


  updateNewNoteInputs = (event) => {
    this.setState({
      ...this.state,
      newNote:
      {
        ...this.state.newNote,   // prevents overwriting other keys (if any) in the newNote state not listed below
        [event.target.name]: event.target.value,   // this way requires you add 'name' to the input fields in your Form
        [event.target.name]: event.target.value
      }
    })
  }


  handleNewNoteSubmit = (event) => {
    this.setState({
      notes: [...this.state.notes, this.state.newNote]
    })
    event.preventDefault()
    // event.target.reset()
    this.handleCreate()
  }


  // handleCreate = () => {
  //   fetch(`http://localhost:3000/api/v1/notes/`, {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({
  //       "title": `${this.state.newNote.title}`,
  //       "body": `${this.state.newNote.body}`,
  //       "user": {
  //         "id": `${this.state.user.id}`,
  //         "name": `${this.state.user.name}`
  //       }
  //     })
  //   }).then(res => console.log("Created a new note."))
  // }

  handleCreate = () => {
    fetch(`http://localhost:3000/api/v1/notes/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "title": `${this.state.newNote.title}`,
        "body": `${this.state.newNote.body}`,
        "user_id": `${this.state.user.id}`
      })
    }).then(res => console.log("Created a new note."))
  }

  updateExistingNoteInputs = (event) => {
    this.setState({
      ...this.state,
      currentNote:
      {
        ...this.state.currentNote,   // prevents overwriting other keys (if any) in the CurrentNote state not listed below
        [event.target.name]: event.target.value,   // this way requires you add 'name' to the input fields in your Form
        [event.target.name]: event.target.value
      }
    })
  }


  handleEditNote = (note) => {
    this.setState({
      currentNote: note
    })
  }


  handleEditSubmit = (event) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id === this.state.currentNote.id ? Object.assign(note, this.state.currentNote) : note)
      )
    }))
    event.preventDefault()
    event.target.reset()
    this.handlePatch()
  }


  handlePatch = () => {
    fetch(`http://localhost:3000/api/v1/notes/${this.state.currentNote.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "title": `${this.state.currentNote.title}`,
        "body": `${this.state.currentNote.body}`
      })
    }).then(res => console.log("Updated the note."))
  }


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
    // console.log(this.state.notes)
    return (
      <div className="ui grid container">
        <br/>
        <h2>Create New Note</h2>
        <CreateForm newNote={this.state.newNote} updateNewNoteInputs={this.updateNewNoteInputs} handleNewNoteSubmit={this.handleNewNoteSubmit} />
        <h2>Edit Existing Note</h2>
        <EditForm currentNote={this.state.currentNote} updateExistingNoteInputs={this.updateExistingNoteInputs} handleEditSubmit={this.handleEditSubmit} />
        <p><b>Evernote Whale</b> just passin' on by. Nothing to see here folks.</p>
        <NoteList notes={this.state.notes} handleEditNote={this.handleEditNote} handleDeleteNote={this.handleDeleteNote} />
      </div>
    )
  }

}

export default NoteContainer
