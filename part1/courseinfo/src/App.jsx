import { useState } from 'react'

const Header = props => <h1 >{props.title}</h1>

const Button = props => <button onClick={props.onClick}>{props.name}</button>

const Content = props => <p>{props.name}  {props.degree}</p>

const Statistics = ({statistics}) => {
  

  return (<><p>all  {statistics.all}</p>
            <p>average  {statistics.average}</p>
            <p>positive  {statistics.positive} %</p>
           </>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [all,setAll] = useState(0)
  // const [grade,setGrade] = useState(0)
  // const [average,setAverage] = useState(0)
  // const [positive,setPositive] = useState(0)

  const [statistics,setStatistics] = useState({
    all:0,
    average:0,
    positive:0
  }
)

  

  const clickHandle = (props) => {

    let newgood=good,newbad=bad
    statistics.all=statistics.all+1
    if(props==='good'){
      newgood = good+1
      
      setGood(newgood)
     
    }
    else if(props==='neutral'){
      setNeutral(neutral+1)
    }
    else{
      newbad = bad+1
      setBad(newbad)
    }
    let newstatistics = {...statistics,
      average:statistics.all>0? (newgood-newbad)/statistics.all:statistics.average=-1,
      positive:newgood/statistics.all}
    
    setStatistics(newstatistics)
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
      <Statistics statistics={statistics}/>
    </div>
  )
}

export default App