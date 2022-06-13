import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import * as api from "../services"


// get user from local storage
let user = null
if (typeof window !== 'undefined') {
 user = JSON.parse(localStorage.getItem('movies-user'))
}


// our initial state
const initialState = {
  user:user,
  watchedMovies:{
    list: [],
    status: 'idle',
    message:''
  },
  ratedMovies : {
      list: [],
      status: 'idle',
      message:''
  },
  favoriteMovies : {
    list: [],
    status: 'idle',
    message:''
},
watchList : {
    list: [],
    status: 'idle',
    message:''
},
  status: 'idle', // idle | loading | succeeded | failed
    
}

// get all books from database
export const getWatchedMovies = createAsyncThunk(
    'books/getWatchedMovies',
    async (movies,  thunkAPI) => {
      try {
        return await api.getWatchedMovies(user.userId)
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


export const userDataSlice = createSlice(
    {
        name:'user',
        initialState,
        reducers:{
          markBookAsReadRedux : (state,action) => {
            state.readBooks.list.push(action.payload)
          },
          unreadBookRedux : (state,action) => {
            const filtredBooks =  state.readBooks.list.filter(item => item.id !== action.payload.id) 
            state.readBooks.list = filtredBooks
          }
        }, 
        extraReducers: (builder) =>{
            builder
            .addCase(getWatchedMovies.pending , (state)=>{
                state.watchedMovies.status='loading'
            })
            .addCase(getWatchedMovies.fulfilled , (state, action)=>{
                state.watchedMovies.status = 'succeeded'
                state.watchedMovies.list = action.payload.data.reading
            })
            .addCase(getWatchedMovies.rejected , (state, action)=>{
                state.watchedMovies.status='failed'
                state.watchedMovies.message = action.payload
                state.watchedMovies.list=[]
            })
           
        }
    }
)


export const selectReadBooks = state => state.user
export const {markBookAsReadRedux,unreadBookRedux} =userSlice.actions
export default userDataSlice.reducer