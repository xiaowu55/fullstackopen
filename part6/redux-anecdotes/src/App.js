import { useSelector, useDispatch } from 'react-redux'
import { addNote, voteAnecdots } from './reducers/anecdoteReducer'
import { AnecdoteForm } from './components/AnecdoteForm'

const App = (prop) => {
  const {store} = prop
  const anecdotes = useSelector(state => state.sort((a,b)=>b.votes-a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdots(id))
    
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <AnecdoteForm store={store}/>
    </div>
  )
}

export default App