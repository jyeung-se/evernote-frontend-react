import React from 'react'


const Note = props => {
  // console.log("Notes props", props)

  return (
    <tr>
      <td>{props.note.title}</td>
      <td>{props.note.body}</td>
      <td>
        {/* <a href="/editnote"><button className="ui button left" onClick={() => props.handleEditNote(props.note)}>Edit</button></a> */}
        <button className="ui button left" onClick={() => props.handleEditNote(props.note)}>Edit</button>
      </td>
      <td>
        <button className="ui button left" onClick={() => props.handleDeleteNote(props.note)}>Delete</button>
      </td>
    </tr>
  )
}



export default Note
