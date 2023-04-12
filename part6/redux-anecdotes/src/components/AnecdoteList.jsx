import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdots } from '../reducers/anecdoteReducer'

export const AnecdoteList = () => {

    const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.sort((a,b)=>b.votes-a.votes))
    
  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdots(id))
    
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
