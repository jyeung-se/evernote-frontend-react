import React, { Component } from 'react'

// const CreateForm = (props) => {
class CreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // notes: this.props.notes,
      newNote: {},
      user: {
        id: 1,
        name: "jack"
      }
    }
  }


  updateNewNoteInputs = (event) => {
    this.setState({
      ...this.state,
      newNote:
      {
        ...this.state.newNote,   // prevents overwriting other keys (if any) in the newNote state not listed below
        [event.target.name]: event.target.value   // this way requires you add 'name' to the input fields in your Form
      }
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleNewNoteSubmit(this.state.newNote)
    this.props.history.push("/")
  }


  render () {
    // console.log("renderprops", this.props)
    return (
      <form
        className="ui form center aligned sixteen wide column"
        onSubmit={this.handleSubmit}
      >
        <div className="inline fields">
          <div className="eight wide field">
            <textarea
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.newNote.title}
              onChange={this.updateNewNoteInputs}
            />
          </div>
          <div className="eight wide field">
            <textarea
              id="body"
              type="text"
              name="body"
              placeholder="Note"
              value={this.state.newNote.body}
              onChange={this.updateNewNoteInputs}
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

export default CreateForm
