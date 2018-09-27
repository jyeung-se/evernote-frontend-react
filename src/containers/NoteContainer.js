import React, { Component } from 'react'
import EditForm from '../components/EditForm'
import NoteList from '../components/NoteList'


class NoteContainer extends Component {
  constructor() {
    super()

    this.state={
      notes: [],
      currentNote: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(notesData => this.setState({
      notes: notesData
    }))
  }


  updateNote = (event) => {
    this.setState({
      ...this.state,
      currentNote:
      {
        ...this.state.currentNote,   // prevents overwriting other keys (if any) in the CurrentNote state not listed below
        [event.target.name]: event.target.value,   // this way requires you add 'name' to the input fields in your Form
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value
      }
    })
  }


  handleEditNote = (note) => {
    this.setState({
      currentNote: note
    })
  }


  handleSubmit = (event) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id === this.state.currentNote.id ? Object.assign(note, this.state.currentNote) : note)
      )
    }))
    event.preventDefault()

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
    }).then(res => console.log("updated successfully"))
  }

  render() {
    // console.log(this.state.notes)
    return (
      <div className="ui grid container">
        <EditForm currentNote={this.state.currentNote} updateNote={this.updateNote} handleSubmit={this.handleSubmit} />
        <p><b>Evernote Whale</b> just passin' on by. Nothing to see here folks.</p>
        <NoteList notes={this.state.notes} handleEditNote={this.handleEditNote} />
      </div>
    )
  }

}

export default NoteContainer
