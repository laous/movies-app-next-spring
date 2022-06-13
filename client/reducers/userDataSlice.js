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
watchlist : {
    list: [],
    status: 'idle',
    message:''
},
  status: 'idle', // idle | loading | succeeded | failed
    
}

// get all watched movies by user from database
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

export const getFavoriteMovies = createAsyncThunk(
    'books/getFavoriteMovies',
    async (movies,  thunkAPI) => {
      try {
        return await api.getFavoriteMovies(user.userId)
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

export const getWatchlist = createAsyncThunk(
  'books/getWatchlist',
  async (movies,  thunkAPI) => {
    try {
      return await api.getWatchList(user.userId)
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
          },
          addToFavorites : (state,action) => {
            state.favoriteMovies.list.push(action.payload)
          },
          removeFromFavorites : (state,action) => {
            const movies =  state.favoriteMovies.list.filter(item => item.id !== action.payload.id) 
            state.favoriteMovies.list = movies
          },
          addToWatchlist : (state,action) => {
            state.watchlist.list.push(action.payload)
          },
          removeFromWatchlist : (state,action) => {
            const movies =  state.watchList.list.filter(item => item.id !== action.payload.id) 
            state.watchlist.list = movies
          }
        }, 
        extraReducers: (builder) =>{
            builder
            //watched movies
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
            })
            // favorites
            .addCase(getFavoriteMovies.pending , (state)=>{
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
            // watchlist
            .addCase(getWatchlist.pending , (state)=>{
              state.watchlist.status='loading'
          })
          .addCase(getWatchlist.fulfilled , (state, action)=>{
              state.watchlist.status = 'succeeded'
              state.watchlist.list = action.payload.data
          })
          .addCase(getWatchlist.rejected , (state, action)=>{
              state.watchlist.status='failed'
              state.watchlist.message = action.payload
              state.watchlist.list=[]
          })
        }
    }
)


export const watchedMovies = state => state.user.watchedMovies
export const {markMovieAsWatched,unwatchMovie,addToFavorites,removeFromFavorites , addToWatchlist , removeFromWatchlist} =userDataSlice.actions
export default userDataSlice.reducer