
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import { useState, useEffect } from "react"
import Article from "./components/Assignment/Article";
export default function App({
  blog
}) {
    const [entries, setEntries] = useState([])

    const addEntry = (e) => {
        const newEntry = { text: e.target.value, id: Date.now(), completed: false }
        setEntries([newEntry, ...entries])
        e.target.value = ''
    }



    // const wheresAntony = students.findIndex(student => student.name === 'Antony')
    // students[wheresAntony].grade = 'A+++'
    const completeEntry = (id, e) => {
        const entriesCopy = [...entries]
        const indexOfEntry = entriesCopy.findIndex((i) => i.id === id )
        entriesCopy[indexOfEntry].completed = !entriesCopy[indexOfEntry].completed
        setEntries(entriesCopy)
    }
    const editEntryText = (id, e) => {
     const entriesCopy = [...entries]
     const indexOfEntry = entriesCopy.findIndex((i) => i.id === id)
     entriesCopy[indexOfEntry].text = e.target.value
     setEntries([...entriesCopy])
     e.target.value = ""
   }
 
   const deleteEntry = (id) => {
     const entriesCopy = [...entries]
     const indexOfEntry = entriesCopy.findIndex((i) => i.id === id)
     entriesCopy.splice(indexOfEntry, 1)
     setEntries([...entriesCopy])
   };

  return (
    <div className="App">

      <Display />
      <Article />
    
    

      <>
      </>
    </div>
  )
}