import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const hostname = process.env.NEXT_PUBLIC_SITE_URL

const initialState = {
  list: [],
  status:'idle', // idle | loading | failed
  message:'' // error message
}  
// get all memories from database
// export const getAllMemories = createAsyncThunk(
//   'memories/getAllMemories',
//   async (memories,  thunkAPI) => {
//     try {
//       return await axios.get(hostname+'/api/memories/')
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )
// export const memoriesSlice = createSlice({
//   name: 'memories',
//   initialState,
//   reducers: {
//       add : (state, action) => {
//           state.list = action.payload
//       }
//   },
//   extraReducers:
//     (builder) =>{
//       builder
//       .addCase(getAllMemories.pending , (state)=>{
//           state.status='loading'
//       })
//       .addCase(getAllMemories.fulfilled , (state, action)=>{
//           state.status = 'succeeded'
//           state.list = action.payload.data
//       })
//       .addCase(getAllMemories.rejected , (state, action)=>{
//           state.status='failed'
//           state.message = action.payload
//           state.list=[]
//       })

//   }
// })

// // Action creators are generated for each case reducer function
// export const { add } = memoriesSlice.actions

// export default memoriesSlice.reducer