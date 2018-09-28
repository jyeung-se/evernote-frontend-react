import React from 'react'

const CreateForm = (props) => {
  // console.log("CreateForm props", props)

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={props.handleNewNoteSubmit}
    >
      <div className="inline fields">
        <div className="eight wide field">
          <textarea
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={props.newNote.title}
            onChange={props.updateNewNoteInputs}
          />
        </div>
        <div className="eight wide field">
          <textarea
            id="body"
            type="text"
            name="body"
            placeholder="Note"
            value={props.newNote.body}
            onChange={props.updateNewNoteInputs}
          />
        </div>
        <button className="ui button" type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default CreateForm
