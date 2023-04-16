import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/store";
import noteSevice from '../services/note'

import React from 'react'

export const AnecdoteForm = (props) => {

    
    const dispatch = useDispatch()

    console.log(useSelector(state=>state.anecdotes))

  

    const addN = async (event) => { 
        event.preventDefault()
        let inp = event.target.note.value
        console.log(inp);
        const newNote = await noteSevice.addNew(inp)
        dispatch(addNote({...newNote}))
       }

  return (
    <div>
        <h2>create new</h2>
      <form onSubmit={addN}>
        <div><input name='note'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

