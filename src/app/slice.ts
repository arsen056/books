import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: '' ,
}

const slice = createSlice({
  name: 'app/slice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const appReducer = slice.reducer
