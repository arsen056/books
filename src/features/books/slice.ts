import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IResponseBooks} from "common/types/IResponseBooks";

const initialState: IResponseBooks = {
  kind: '',
  totalItems: 0,
  items: []
}

const slice = createSlice({
  name: 'books/slice',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IResponseBooks>) => {
      return action.payload
    }
  }
})

export const booksReducer = slice.reducer