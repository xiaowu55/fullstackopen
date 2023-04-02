import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const onSubmitHandle = (event) => { 
    event.preventDefault()
    console.log(persons);
    setPersons(persons.concat({name:newName}))
   }

  const onInputHandle = (event) =>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onClick={onSubmitHandle}>
        <div>
          name: <input onChange={onInputHandle}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=><div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App