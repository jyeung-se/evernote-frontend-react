import React from 'react'


const Note = props => {
  // console.log("Notes props", props)

  return (
    <tr>
      <td>{props.note.title}</td>
      <td>{props.note.body}</td>
      <td>
        <button className="ui button left" onClick={() => props.handleEditNote(props.note)}>
          Edit
        </button>
      </td>
    </tr>
  )
}



export default Note
