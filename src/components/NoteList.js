import React from 'react'
import Note from './Note'


const NoteList = props => {
  // console.log("NoteList props", props)
  const mappedNotes = props.notes.map(note => <Note note={note} key={note.title} handleEditNote={props.handleEditNote} handleDeleteNote={props.handleDeleteNote} />)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Note Title</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Note Body</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Update</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Remove</h3>
          </th>
        </tr>

        {mappedNotes}
      </tbody>
    </table>
  )
}


export default NoteList
