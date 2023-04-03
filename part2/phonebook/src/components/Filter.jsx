import React from 'react'

export const Filter = (props) => {

    const {filterDataHandle,showDataHandler} = props
    
  return (
    <form onSubmit={filterDataHandle} >
        <div>filter shown with<input onChange={showDataHandler}/></div>
      </form>
  )
}
