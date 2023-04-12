import { useSelector, useDispatch } from 'react-redux'
import { addNote, voteAnecdots } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state.sort((a,b)=>b.votes-a.votes))
  const dispatch = useDispatch()

  const addN = (event) => { 
    event.preventDefault()
    let inp = event.target.note.value
    console.log(inp);
    dispatch(addNote(inp))
   }

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
      <h2>create new</h2>
      <form onSubmit={addN}>
        <div><input name='note'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App