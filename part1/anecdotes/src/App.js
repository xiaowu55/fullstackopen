import { useState } from 'react'


const Button = props => <button onClick={props.onClick}>{props.name}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


 const [vote,setVote] = useState(Array(7).fill(0))


  const getRandomInt = (min,max) =>{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const [selected, setSelected] = useState(0)

  const clickHandle = () =>{
    let num = getRandomInt(0,7)
    console.log(num);
    setSelected(num)
  }

  const voteHandle =  () => { 
      
      const copypoints = [...vote]
      copypoints[selected] +=1
      setVote([...copypoints])
      console.log(copypoints)
   }

  return (
    <div>
      {anecdotes[selected]}
      <Button onClick={clickHandle}  name='next anecodote'/>
      <Button onClick={voteHandle}  name='vote'/>

    </div>
  )
}

export default App