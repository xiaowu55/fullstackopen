import { useMutation, useQuery } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../service/queries";
import React, { useState } from "react";

const Authors = (props) => {
  const [name,setName] = useState('')
  const [born,setBorn] = useState('')

  const allAuthors = useQuery(ALL_AUTHORS)
  const [setAuthorBorn] = useMutation(EDIT_AUTHOR,{refetchQueries:[{query:ALL_AUTHORS}]})

  if (!props.show) {
    return null
  }

  if(allAuthors.loading){
    return <div>loading</div>
  }


  const authors = [...allAuthors.data.allAuthors]

  const submit = async(event) => { 
    event.preventDefault()

    setAuthorBorn({variables:{name,setBornTo:Number(born)}})
    console.log('edit',typeof born,name,born)
    
    setName('')
    setBorn('')
  }


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
            <div>name<input  value={name} onChange={({target}) => { setName(target.value) }}/></div>
            <div>born<input  value={born} onChange={({target}) => { setBorn(target.value) }}/></div>
            <div><button type="submit">update author</button></div>
      </form>
    </div>
  )
}

export default Authors
