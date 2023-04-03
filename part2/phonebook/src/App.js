import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Person } from './components/Person'
import axios from 'axios'

import phoneService from './services/phonebook'

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
  

  useEffect(()=>{
    phoneService.getAll().then(res=>setPersons(res))

   
  },[])

  function onSubmitHandle(event) {
    event.preventDefault()
    console.log(persons)

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }

    
      const personObject = {
        name:newName,
        number:newNummber,
        id:persons.length+1
      }

      phoneService.create(personObject).then(res=>{
            console.log(res)
            setPersons(persons.concat(res))
          })
    
      
      

    

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

  const deletePersonHandle = (id,e) => { 
    console.log(id);
    e.preventDefault()
    phoneService.deletePhone(id).then(res=>console.log(res))
    phoneService.getAll().then(res=>setPersons(res))
   }

 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterDataHandle={filterDataHandle} showDataHandler={showDataHandler}/>
      <h2>add a new</h2>
      <PersonForm onInputNameHandle={onInputNameHandle} onInputNummberHandle={onInputNummberHandle} onSubmitHandle={onSubmitHandle}/>
      <h2>Numbers</h2>
      <Person filterData={filterData} persons={persons} deletePersonHandle={deletePersonHandle}/>
    </div>
  )
}

export default App