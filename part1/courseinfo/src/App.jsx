import { useState } from 'react'

const Header = props => <h1 >{props.title}</h1>

const Button = props => <button onClick={props.onClick}>{props.name}</button>

const Content = props => <p>{props.name}  {props.degree}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)
  const [grade,setGrade] = useState(0)
  // const [average,setAverage] = useState(0)
  // const [positive,setPositive] = useState(0)

  let average,positive =0

  average = grade/all

  positive = good/all

  console.log('re');

  const clickHandle = (props) => { 
    setAll(all+1)
    if(props==='good'){
      setGood(good+1)
      setGrade(grade+1)
    }
    else if(props==='neutral'){
      setNeutral(neutral+1)
    }
    else{
      setBad(bad+1)
      setGrade(grade-1)
    }
   }

  return (
    <div>
      <Header title='give feedback'/>
      <Button name='good' onClick={()=>clickHandle('good')}/>
      <Button name='neutral' onClick={()=>clickHandle('neutral')}/>
      <Button name='bad' onClick={()=>clickHandle('bad')} />
      <Header title='statistics'/>
      <Content name='good' degree={good}/>
      <Content name='neutral' degree={neutral}/>
      <Content name='bad' degree={bad}/>
      <Content name='all' degree={all}/>
      <Content name='average' degree={average}/>
      <Content name='positive' degree={positive}/>
    </div>
  )
}

export default App