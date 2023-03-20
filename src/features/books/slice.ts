import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IResponseBooks, ISearchParams} from "common/types";
import {API} from "api/api";
import {RootStateType, setError, setIsLoading} from "app";

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

    const state = getState() as RootStateType
    const searchParam = state.books.searchValue

    try {
      dispatch(setIsLoading(true))
      const res = await API.getBooks({q: searchParam, maxResults: 30})

      if (!res.data.totalItems) {
        dispatch(setIsLoading(false))
        dispatch(setError('Enter the correct value'))
        return
      }

      dispatch(setBooks(res.data))
    } catch (e) {
      console.log(e)
    }
    dispatch(setIsLoading(false))
  }
)

export const booksReducer = slice.reducer
export const {setSearchValue, setBooks} = slice.actions