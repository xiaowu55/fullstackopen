import React,{useEffect} from 'react'
import { useDispatch, useSelector,connect} from 'react-redux'
// import { voteAnecdots } from '../reducers/anecdoteReducer'
import { addVote, initialNotes, setVote} from '../redux/store'
import {changeTip, setNotification, tip} from '../redux/notification'



const AnecdoteList = (props) => {


    useEffect(() => {
      props.initialNotes()
    }, [])
    

  // const anecdotes = useSelector(state => [...state.anecdotes].sort((a,b)=>b.votes-a.votes))
  console.log('props',props);
  const anecdotes = [...props.anecdotes].sort((a,b)=>b.votes-a.votes)
  console.log('qweqweqw',anecdotes);

    
  const vote = (id) => {
    props.setVote(id)
    console.log(id);
    // dispatch(tip())
    // setTimeout(()=>dispatch(changeTip('render here notification...')),500)
    props.setNotification(anecdotes, id,1000)
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

const mapStateToProps = state =>{
return {anecdotes:state.anecdotes}
}

const mapDispatchToProps = dispatch =>{
  return {
    setVote:id=>{dispatch(setVote(id))},
    initialNotes:id=>{dispatch(initialNotes())},
    setNotification:(anecdotes,id,time)=>{dispatch(setNotification(`you voted '${anecdotes.find(e=>e.id===id).content}'`, time))}
  }
  }

const ConnectAnecdoteList = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)

export default ConnectAnecdoteList
