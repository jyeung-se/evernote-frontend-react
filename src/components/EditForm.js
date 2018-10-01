import React, { Component } from 'react'

// const EditForm = (props) => {
class EditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // notes: this.props.notes,
      currentNote: this.props.currentNote,
      notes: this.props.notes,
      redirect: false
    }
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

  handleEditSubmit = (event) => {
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
    }).then(res => console.log("Updated the note."))
  }


  render() {
    return (
      <form
        className="ui form center aligned sixteen wide column"
        onSubmit={this.handleEditSubmit}
      >
        <div className="inline fields">
          <div className="eight wide field">
            <textarea
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.currentNote.title}
              onChange={this.updateExistingNoteInputs}
            />
          </div>
          <div className="eight wide field">
            <textarea
              id="body"
              type="text"
              name="body"
              placeholder="Note"
              value={this.state.currentNote.body}
              onChange={this.updateExistingNoteInputs}
            />
          </div>
          <button className="ui button" type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    )
  }
  }

export default EditForm
