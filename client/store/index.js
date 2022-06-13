import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authSlice'
import userDataReducer from '../reducers/userDataSlice'


export const store = configureStore({
  reducer: {
      // reducers
    auth:authReducer,
    userData:userDataReducer
  },
})