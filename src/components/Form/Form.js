
import styles from './Form.module.scss'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState} from 'react';

export default function Entry({ entry, completeEntry, editEntryText, deleteEntry }) {
  const [showInput, setShowInput] = useState(false)
  return (
    <li>
      <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {entry.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editEntryText(entry.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        Complete
        <input
          type="checkbox"
          checked={entry.completed}
          onChange={(e) => {
            completeEntry(entry.id, e)
          }}
        />
      </label>
      <button
        checked={entry.completed}
        onClick={(e) => {
          deleteEntry(entry.id)
        }}
      >
        Delete Entry
      </button>
    </li>
  )
}

// function FormIntake() {

//   const [blogEntry, setBlogEntry] = useState('')

//   const handleChange = (evt) => {
//     setBlogEntry(evt.target.value);
//   };
//   return (
//     <div className='div'>
//       <Form className={styles.form}
//         onSubmit={(e) => {
//           e.preventDefault()
//           setBlogEntry()
          
          
//         }}
//       >
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridName">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               className={styles.title}
//               type="text"
//               value={blogEntry.title}
//               name='title'
//               placeholder="Today's Title"
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group as={Col} controlId="formGridDate">
//             <Form.Label>Date</Form.Label>
//             <Form.Control
//               className={styles.date}
//               type="date"
//               value={blogEntry.date}
//               name='date'
//               placeholder="Today's Date"
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridMood">
//             <Form.Label
//               className={styles.mood}>Mood</Form.Label>
//             <Form.Select
//               size="lg"
//               defaultValue="Pick me a color"
//               className={styles.select}
//               type="string"
//               value={blogEntry.mood}
//               name='mood'
//               placeholder="Today's Color"
//               options={blogEntry.mood} 
//               onChange={handleChange}
// >
//               <option>Red...</option>
//               <option>White</option>
//               <option>Blue</option>
//             </Form.Select>
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-3" controlId="formGridEntry">
//           <Form.Label>Blog Entry</Form.Label>
//           <Form.Control
//           className={styles.entry}
//           type="text"
//           value={blogEntry.entry}
//           name='title'
//           placeholder="Interestingly, ..."
//           onChange={handleChange}
//              />
//         </Form.Group>

//         <Form.Group className="mb-3" id="formGridRead">
//           <Form.Check
//             className={styles.checkbox}
//             type="checkbox"
//             label="Check me out" 
//           value={blogEntry.like}
//           name='like'
//           placeholder="Interestingly, ..."
//           onChange={handleChange}
//           />
//         </Form.Group>
//         <Button
//           className={styles.button}
//           variant="primary"
//           type="submit"
//           onChange={handleChange} 
//           value={blogEntry}
//           >
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default FormIntake;