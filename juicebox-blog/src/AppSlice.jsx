import { createSlice } from '@reduxjs/toolkit'

export const AppSlice = createSlice({
  name: 'allPosts',
  initialState: {
    value: []
  },
  reducers: {
    increment: state => {
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default AppSlice.reducer