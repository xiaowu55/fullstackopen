import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { voteAnecdots } from '../reducers/anecdoteReducer'
import { addVote } from '../redux/store'

export const AnecdoteList = () => {

    const dispatch = useDispatch()

  console.log(useSelector(state=>state.anecdotes));
  const anecdotes = useSelector(state => [...state.anecdotes].sort((a,b)=>b.votes-a.votes))
    
  const vote = (id) => {
    dispatch(addVote(id))
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
