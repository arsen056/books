import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IResponseBooks} from "common/types/IResponseBooks";
import {ISearchParams} from "common/types/ISearchParams";

const initialState: IResponseBooks & ISearchParams = {
  kind: '',
  totalItems: 0,
  items: [],
  searchValue: ''
}

const slice = createSlice({
  name: 'books/slice',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IResponseBooks>) => {
      state.kind = action.payload.kind
      state.totalItems = action.payload.totalItems
      state.items = action.payload.items
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    }
  }
})

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async (_, {dispatch, getState}) => {


    try {

    } catch (e) {

    }

  }
)

export const booksReducer = slice.reducer
export const {setSearchValue} = slice.actions