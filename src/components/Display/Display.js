import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'

import Form from '../Form/Form'


export default function BlogList({
    entries,
    addEntry,
    completeEntry,
    deleteEntry,
    editEntryText
  }) {
    return (
      <>
      <div className='newentry'>
        <h1>New Blog Entry </h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addEntry(e)
          }}
        />
        </div>
        {entries.length ? (
          <>
<div className="nowlist">

            <h1>My Entries</h1>
            <ul>
              {entries
                .filter((i) => !i.completed)
                .map((entry) => {
                  return (
                    <Form
                      key={entry.id}
                      entry={entry}
                      completeEntry={completeEntry}
                      deleteEntry={deleteEntry}
                      editEntryText={editEntryText}
                    />
                  )
                })}
            </ul>

            </div>

            <div className="neverlist">
            
            <h1>Archived Entries </h1>
            <ul>
              {entries
                .filter((i) => i.completed)
                .map((entry) => {
                  return (
                    <Form
                      key={entry.id}
                      entry={entry}
                      completeTodo={completeEntry}
                      deleteEntry={deleteEntry}
                      editEntryText={editEntryText}
                    />
                  )
                })}
            </ul>
            </div>
          </>
        ) : (
          <h1>No Entries Added Yet</h1>
        )}
      </>
    )
  }