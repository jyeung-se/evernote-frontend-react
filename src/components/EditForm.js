import React, { Component } from 'react'

// const EditForm = (props) => {
class EditForm extends Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {
      // notes: this.props.notes,
      currentNote: this.props.currentNote
    }
  }


  updateExistingNoteInputs = (event) => {
    this.setState({
      ...this.state,
      currentNote:
      {
        ...this.state.currentNote,   // prevents overwriting other keys (if any) in the CurrentNote state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    // }, ()=>console.log(this.state))
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


  handleUpdate = (event) => {
    event.preventDefault()
    this.props.handleEditSubmit(this.state.currentNote)
    // this.props.history.push("/")
  }


  render() {
    // console.log('edit form props', this.props)
    // console.log('edit form state', this.state)
    return (
      <form
        className="ui form center aligned sixteen wide column"
        onSubmit={this.handleUpdate}
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
            Update Note
          </button>
        </div>
      </form>
    )
  }
  }

export default EditForm
