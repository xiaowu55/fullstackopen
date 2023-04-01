import React from 'react'

import Header from "./Header";
import Content from "./Content";


export const Course = ({course}) => {

  
  return (
    <div>
        <Header course={course.name}/>
        <Content part={course.parts}/>

    </div>
  )
}
