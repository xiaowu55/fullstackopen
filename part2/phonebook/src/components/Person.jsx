import React from 'react'

export const Person = (props) => {

    const {filterData,persons,deletePersonHandle} = props

    
    

  return (
    filterData.length===0
        ?persons.map((person)=><div key={person.id}>{person.name}   {person.number}<button onClick={(e)=>deletePersonHandle(person.id,e)}>delete</button></div>)
        :filterData.map((person)=><div key={person.id}>{person.name}   {person.number}</div>)
  )
}
