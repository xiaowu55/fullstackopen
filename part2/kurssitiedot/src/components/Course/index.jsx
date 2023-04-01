import React from 'react'

import Header from "./Header";
import Content from "./Content";


export const Course = ({course}) => {

   console.log(course.map((course)=>course.name));

    
  return (
    <div>
        {course.map((course)=>
        <Header key={course.id} course={course.name}/>,
        
        ) }
        
        
        {course.map((course)=>
        <Content key={course.id} part={course.parts}/>
        
        ) }

    </div>
  )
}
