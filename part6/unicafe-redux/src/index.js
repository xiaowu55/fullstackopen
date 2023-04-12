import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)


const App = () => {
  const change = (event) => {
    switch(event){
      case 'good':
        store.dispatch({type: 'GOOD'})
        break

      case 'ok':
        store.dispatch({type:'OK'})
        break

      case 'bad':
        store.dispatch({type:'BAD'})
        break

      default:
        break
  
  }
  }

  return (
    <div>
      <button onClick={(e)=>change('good')}>good</button> 
      <button onClick={(e)=>change('ok')}>ok</button> 
      <button onClick={(e)=>change('bad')}>bad</button>
      <button>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
