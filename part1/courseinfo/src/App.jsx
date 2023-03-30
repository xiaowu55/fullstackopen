const Header = (props) => {
  const {course} = props
  return <h1>{course}</h1>
}




const Content = ({part,exercises}) => { 
 
    console.log(part);
  
    return (
      <div>
        {/* <Part part={part1.name} exercises={part1.exercises}/>
        <Part part={part2.name} exercises={part2.exercises}/>
        <Part part={part3.name} exercises={part3.exercises}/> */
        <>
          <Part part={part[0].name} exercises={part[0].exercises}/>
          <Part part={part[1].name} exercises={part[1].exercises}/>
          <Part part={part[2].name} exercises={part[2].exercises}/>
        </>
        }
      </div>
    )
 }



 const Part = (props) => { 
  const {part,exercises} = props

  return (
    <p>
    {part} {exercises}
  </p>
  )
 }




const Total = (props) => { 

  const {exercises} = props


  const total = exercises[0].exercises+exercises[1].exercises+exercises[2].exercises

  return (
    <p>Number of exercises{total}</p>
  )

 }


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


 

  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts} exercises={course.parts}/>
      <Total exercises={course.parts}/>
      
    </div>
  )
}

export default App