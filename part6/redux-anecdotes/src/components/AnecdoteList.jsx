import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { voteAnecdots } from '../reducers/anecdoteReducer'
import { addVote, initialNotes, setVote} from '../redux/store'
import {changeTip, tip} from '../redux/notification'



export const AnecdoteList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(initialNotes())
    }, [dispatch])
    

  const anecdotes = useSelector(state => [...state.anecdotes].sort((a,b)=>b.votes-a.votes))
  console.log(anecdotes);
    
  const vote = (id) => {
    dispatch(setVote(id))
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
