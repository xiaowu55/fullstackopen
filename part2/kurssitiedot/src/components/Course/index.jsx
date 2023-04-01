import React from 'react'

import Header from "./Header";
import Content from "./Content";


export const Course = ({course}) => {

//    console.log(course.map((course)=>course.name));

    
  return (
    <div>
        {course.map((course)=><div key={course.id}>
            <Header course={course.name}/>
            <Content  part={course.parts}/>
        </div>
        
        ) }
    </div>
  )
}
