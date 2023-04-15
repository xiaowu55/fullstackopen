import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../redux/store'
import notificationReducer from '../redux/notification'

export const store = configureStore({
  reducer:{
      anecdotes:noteReducer,
      notifications:notificationReducer,
  }
})
