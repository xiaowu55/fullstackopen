import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNummber,setNewNummber] = useState(0)
  const [showData,setShowData] = useState('')
  const [filterData,setFilterData] =useState([])
  


  const onSubmitHandle = (event) => { 
    event.preventDefault()
    console.log(persons);

    for(let i =0;i<persons.length;i++){
        if(persons[i].name===newName){
          alert(`${newName} is already added to phonebook`)
          return
        }
      }

    setPersons(persons.concat({name:newName,number:newNummber}))
    
   }

  const onInputNameHandle = (event) =>{
    setNewName(event.target.value)
  }

  const onInputNummberHandle = (event) =>{
    setNewNummber(event.target.value)
  }

  const filterDataHandle = (event) => { 
    event.preventDefault()
    let re = new RegExp(`${(showData)}`,'i')
    const newfilterData = persons.filter(person=>person.name.match(re))
    console.log(newfilterData);
    setFilterData(newfilterData)
   }

  const showDataHandler = (event) =>{
    console.log(showData);
    setShowData(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={filterDataHandle}>
        <div>filter shown with<input onChange={showDataHandler}/></div>
      </form>
      <form >
        <h1>add a new</h1>
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

      { filterData.length===0?persons.map((person)=><div key={person.id}>{person.name}   {person.number}</div>):filterData.map((person)=><div key={person.id}>{person.name}   {person.number}</div>)}
    </div>
  )
}

export default App