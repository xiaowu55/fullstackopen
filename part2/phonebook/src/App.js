import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      nummber:0
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNummber,setNewNummber] = useState(0)

  const onSubmitHandle = (event) => { 
    event.preventDefault()
    console.log(persons);

    for(let i =0;i<persons.length;i++){
        if(persons[i].name===newName){
          alert(`${newName} is already added to phonebook`)
          return
        }
      }
    setPersons(persons.concat({name:newName,nummber:newNummber}))
    
   }

  const onInputNameHandle = (event) =>{
    setNewName(event.target.value)
  }

  const onInputNummberHandle = (event) =>{
    setNewNummber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input onChange={onInputNameHandle}/>
        </div>
        <div>
          nummber: <input onChange={onInputNummberHandle}/>
        </div>
        <div>
          <button type="submit" onClick={onSubmitHandle}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=><div key={person.name}>{person.name}   {person.nummber}</div>)}
    </div>
  )
}

export default App