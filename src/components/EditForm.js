import React from 'react'

const EditForm = (props) => {
  // console.log("EditForm props", props)

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={props.handleSubmit}
    >
      <div className="inline fields">
        <div className="eight wide field">
          <textarea
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={props.currentNote.title}
            onChange={props.updateNote}
          />
        </div>
        <div className="eight wide field">
          <textarea
            id="body"
            type="text"
            name="body"
            placeholder="Note"
            value={props.currentNote.body}
            onChange={props.updateNote}
          />
        </div>
        <button className="ui button" type="submit" value="Submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditForm
