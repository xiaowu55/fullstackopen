import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { voteAnecdots } from '../reducers/anecdoteReducer'
import { addVote, asObject, setNote } from '../redux/store'
import {changeTip, tip} from '../redux/notification'
import noteService from '../services/note'


export const AnecdoteList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      noteService
                  .getAll().then(notes=>dispatch(setNote((notes.map(asObject)))))
    
  
    }, [dispatch])
    

  console.log(useSelector(state=>state.anecdotes));
  const anecdotes = useSelector(state => [...state.anecdotes].sort((a,b)=>b.votes-a.votes))
    
  const vote = (id) => {
    dispatch(addVote(id))
    dispatch(tip())
    setTimeout(()=>dispatch(changeTip('render here notification...')),500)
  }

  return (
    <div>
        {
        anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}
