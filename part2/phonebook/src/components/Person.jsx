import React from 'react'

export const Person = (props) => {

    const {filterData,persons} = props
    console.log(filterData);

  return (
    filterData.length===0
        ?persons.map((person)=><div key={person.id}>{person.name}   {person.number}</div>)
        :filterData.map((person)=><div key={person.id}>{person.name}   {person.number}</div>)
  )
}
