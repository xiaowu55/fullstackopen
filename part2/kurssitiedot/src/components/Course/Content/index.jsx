import Part from "./Part";


const Content = ({part}) => { 
 
    
    // console.log(part[0].exercises);

    const totalresult = part.reduce((accumulator,currentValue)=>{
       
        // console.log(accumulator,currentValue.exercises);

        
        return  accumulator+currentValue.exercises
    },0)
  
    return (
      <div>
        {/* <Part part={part1.name} exercises={part1.exercises}/>
        <Part part={part2.name} exercises={part2.exercises}/>
        <Part part={part3.name} exercises={part3.exercises}/> */
            <>  
                {part.map((part)=><Part key={part.id} part={part.name} exercises={part.exercises}/>)} 
            </>

        }
        <h3>total of {totalresult} exercises</h3>
      </div>
    )
 }

 export default Content