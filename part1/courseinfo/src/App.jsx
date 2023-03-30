import { useState } from 'react'

const Header = props => <h1>{props.title}</h1>

const Button = props => <button>{props.name}</button>

const Content = props => <p>{props.name}  {props.degree}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title='give feedback'/>
      <Button name='good' />
      <Button name='neutral' />
      <Button name='bad' />
      <Header title='statistics'/>
      <Content name='good' degree={good}/>
      <Content name='neutral' degree={neutral}/>
      <Content name='bad' degree={bad}/>
    </div>
  )
}

export default App