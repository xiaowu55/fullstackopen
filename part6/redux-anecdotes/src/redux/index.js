import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../redux/store'

export const store = configureStore({
  reducer:{
      anecdotes:noteReducer
  }
})
