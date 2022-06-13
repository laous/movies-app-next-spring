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
          markMovieAsWatched : (state,action) => {
            state.watchedMovies.list.push(action.payload)
          },
          unwatchMovie : (state,action) => {
            const movies =  state.watchedMovies.list.filter(item => item.id !== action.payload.id) 
            state.watchedMovies.list = movies
          }
        }, 
        extraReducers: (builder) =>{
            builder
            .addCase(getWatchedMovies.pending , (state)=>{
                state.watchedMovies.status='loading'
            })
            .addCase(getWatchedMovies.fulfilled , (state, action)=>{
                state.watchedMovies.status = 'succeeded'
                state.watchedMovies.list = action.payload.data
            })
            .addCase(getWatchedMovies.rejected , (state, action)=>{
                state.watchedMovies.status='failed'
                state.watchedMovies.message = action.payload
                state.watchedMovies.list=[]
            })            .addCase(getFavoriteMovies.pending , (state)=>{
                state.favoriteMovies.status='loading'
            })
            .addCase(getFavoriteMovies.fulfilled , (state, action)=>{
                state.favoriteMovies.status = 'succeeded'
                state.favoriteMovies.list = action.payload.data
            })
            .addCase(getFavoriteMovies.rejected , (state, action)=>{
                state.favoriteMovies.status='failed'
                state.favoriteMovies.message = action.payload
                state.favoriteMovies.list=[]
            })
        }
    }
)


export const watchedMovies = state => state.user.watchedMovies
export const {markBookAsReadRedux,unreadBookRedux} =userDataSlice.actions
export default userDataSlice.reducer