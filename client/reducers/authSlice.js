import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import * as api from "../../services"


// get user from local storage
const user = JSON.parse(localStorage.getItem('movies-user'))

// our initial state
const initialState = {
    user : user ? user : null,
    status:'idle',
    message:''
}

// register user
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
      try {
        return await api.register(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)

// login user
export const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
      try {
        return await api.login(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)


// logout 
export const logout = createAsyncThunk('auth/logout' , 
     () => api.logout()
)

export const authSlice = createSlice(
    {
        name:'auth',
        initialState,
        reducers:{
            reset: (state) => {
                state.status='idle'
                state.message=''
            }
        }, 
        extraReducers: (builder) =>{
            builder
            .addCase(register.pending , (state)=>{
                state.status='loading'
            })
            .addCase(register.fulfilled , (state, action)=>{
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(register.rejected , (state, action)=>{
                state.status='failed'
                state.message = action.payload
                state.user=null
            })
            // login
            .addCase(login.pending , (state)=>{
                state.status='loading'
            })
            .addCase(login.fulfilled , (state, action)=>{
                state.status='succeeded'
                state.user = action.payload
            })
            .addCase(login.rejected , (state, action)=>{
                state.status='failed'
                state.message = action.payload
                state.user=null
            })
            // logout
            .addCase(logout.fulfilled , (state)=>{
                state.user=null
            })
        }
    }
)


export const {reset} = authSlice.actions
export default authSlice.reducer