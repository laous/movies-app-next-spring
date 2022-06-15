import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from '../reducers/userDataSlice'


export const store = configureStore({
  reducer: {
      // reducers
    userData:userDataReducer
  },
})