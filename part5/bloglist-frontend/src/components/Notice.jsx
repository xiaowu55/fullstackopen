import React from 'react'

export const Notice = (props) => {

    let station = props.station

    console.log(station);
  return (
    <div>
        <h2>Notice</h2>
        
        <h3>{station?'a new blog You are NOT gonna need it ! ':'wrong username or password'}</h3>
    </div>
  )
}
