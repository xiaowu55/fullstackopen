const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Header = (props) => {
    const {course} = props
    return <h1>{course}</h1>
  }

  const Content = (props) => { 
    const {part,exercises} = props
    let newpart = []
    
    for(let i = 0;i<part.length;i++){
     
      newpart.push(part[i],exercises[i])
    }
     
      const result = newpart.map((newpart)=>(<p>{newpart}</p>))
      return (
        
        <>{result}</>
      )
    

    
   }

   const Total = (props) => { 

    const {exercises} = props

    const total = exercises[0]+exercises[1]+exercises[2]

    return (
      <p>Number of exercises{total}</p>
    )

   }
     


  return (
    <div>
      <Header course={course}/>
      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises={[exercises1,exercises2,exercises3]}/>
      
    </div>
  )
}

export default App