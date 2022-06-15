import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../services";

// get user from local storage
let user = null;
if (typeof window !== "undefined") {
  user = JSON.parse(localStorage.getItem("movies-user"));
}

// our initial state
const initialState2 = {
  user: user ? user : null,
  status: "idle",// idle | loading | succeeded | failed
  message: "", 
  watchedMovies: {
    list: [],
    status: "idle",
    message: "",
  },
  ratedMovies: {
    list: [],
    status: "idle",
    message: "",
  },
  favoriteMovies: {
    list: [],
    status: "idle",
    message: "",
  },
  watchlist: {
    list: [],
    status: "idle",
    message: "",
  },
};

// register user
export const register = createAsyncThunk(
  "userData/register",
  async (user, thunkAPI) => {
    try {
      return await api.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// login user
export const login = createAsyncThunk("userData/login", async (user, thunkAPI) => {
  try {
    return await api.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// logout
export const logout = createAsyncThunk("userData/logout", () => api.logout());

// get all watched movies by user from database
export const getWatchedMovies = createAsyncThunk(
  "userData/getWatchedMovies",
  async (movies, thunkAPI) => {
    try {
      return await api.getWatchedMovies(Number(user?.userId));
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFavoriteMovies = createAsyncThunk(
  "userData/getFavoriteMovies",
  async (movies, thunkAPI) => {
    try {
      return await api.getFavoriteMovies(Number(user?.userId));
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getWatchlist = createAsyncThunk(
  "userData/getWatchlist",
  async (movies, thunkAPI) => {
    try {
      return await api.getWatchList(Number(user?.userId));
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userDataSlice = createSlice({
  name: "userData",
  initialState:initialState2,
  reducers: {
    resetUserData: (state) => {
      console.log("State: ",state)
      state.watchedMovies.list = []
      state.watchedMovies.status = 'idle'
      state.favoriteMovies.list = []
      state.favoriteMovies.status = 'idle'
      state.watchlist.list = []
      state.watchlist.status = 'idle'
      // return initialState2

    },
    markMovieAsWatched: (state, action) => {
      state.watchedMovies.list.push(action.payload);
    },
    unwatchMovie: (state, action) => {
      const movies = state.watchedMovies.list.filter(
        (item) => item.id !== action.payload.id
      );
      state.watchedMovies.list = movies;
    },
    addToFavorites: (state, action) => {
      state.favoriteMovies.list.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const movies = state.favoriteMovies.list.filter(
        (item) => item.id !== action.payload.id
      );
      state.favoriteMovies.list = movies;
    },
    addToWatchlist: (state, action) => {
      state.watchlist.list.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      const movies = state.watchlist.list.filter(
        (item) => item.id !== action.payload.id
      );
      state.watchlist.list = movies;
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
        state.user = null;
      })
      // login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload;
        state.user = null;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      //watched movies
      .addCase(getWatchedMovies.pending, (state) => {
        state.watchedMovies.status = "loading";
      })
      .addCase(getWatchedMovies.fulfilled, (state, action) => {
        state.watchedMovies.status = "succeeded";
        state.watchedMovies.list = action.payload.data;
      })
      .addCase(getWatchedMovies.rejected, (state, action) => {
        state.watchedMovies.status = "failed";
        state.watchedMovies.message = action.payload;
        state.watchedMovies.list = [];
      })
      // favorites
      .addCase(getFavoriteMovies.pending, (state) => {
        state.favoriteMovies.status = "loading";
      })
      .addCase(getFavoriteMovies.fulfilled, (state, action) => {
        state.favoriteMovies.status = "succeeded";
        state.favoriteMovies.list = action.payload.data;
      })
      .addCase(getFavoriteMovies.rejected, (state, action) => {
        state.favoriteMovies.status = "failed";
        state.favoriteMovies.message = action.payload;
        state.favoriteMovies.list = [];
      })
      // watchlist
      .addCase(getWatchlist.pending, (state) => {
        state.watchlist.status = "loading";
      })
      .addCase(getWatchlist.fulfilled, (state, action) => {
        state.watchlist.status = "succeeded";
        state.watchlist.list = action.payload.data;
      })
      .addCase(getWatchlist.rejected, (state, action) => {
        state.watchlist.status = "failed";
        state.watchlist.message = action.payload;
        state.watchlist.list = [];
      });
  },
});

export const {
  resetUserData,
  markMovieAsWatched,
  unwatchMovie,
  addToFavorites,
  removeFromFavorites,
  addToWatchlist,
  removeFromWatchlist,
} = userDataSlice.actions;
export default userDataSlice.reducer;
