import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Person } from './components/Person'
import axios from 'axios'

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
    const promise = axios.get('http://localhost:3001/persons')

    promise.then((Response)=>{
      setPersons(Response.data)
    })
  
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

  
      axios
           .post('http://localhost:3001/persons',personObject)
           .then(res=>{
            console.log(res.data)
            setPersons(persons.concat(res.data))
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

 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterDataHandle={filterDataHandle} showDataHandler={showDataHandler}/>
      <h2>add a new</h2>
      <PersonForm onInputNameHandle={onInputNameHandle} onInputNummberHandle={onInputNummberHandle} onSubmitHandle={onSubmitHandle}/>
      <h2>Numbers</h2>
      <Person filterData={filterData} persons={persons}/>
    </div>
  )
}

export default App