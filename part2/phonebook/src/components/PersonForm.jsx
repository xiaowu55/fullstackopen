import React from 'react'

export const PersonForm = (props) => {

    const {onInputNameHandle,onInputNummberHandle,onSubmitHandle} = props

  return (
    <form >
        <div>
        name: <input onChange={onInputNameHandle}/>
        </div>
        <div>
        nummber: <input onChange={onInputNummberHandle}/>
        </div>
        <div>
        <button type="submit" onClick={onSubmitHandle}>add</button>
        </div>
    </form>
  )
}
