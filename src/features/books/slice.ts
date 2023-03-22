import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBook, IResponseBooks, ISearchParams} from "common/types";
import {API} from "api/api";
import {RootStateType, setError, setIsLoading} from "app";

const initialState: IResponseBooks & ISearchParams = {
  kind: '',
  totalItems: 0,
  items: [],
  searchValue: '',
  startIndex: 20
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
      state.startIndex = 0
    },
    showMore: (state, action: PayloadAction<IBook[]>) => {
      state.items.push(...action.payload)
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload
    }
  }
})

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async (_, {dispatch, getState}) => {

    const state = getState() as RootStateType
    const searchParam = state.books.searchValue
    const startIndex = state.books.startIndex

    try {
      dispatch(setIsLoading(true))
      const res = await API.getBooks({q: `${searchParam}`, startIndex, maxResults: 20})

      if (!res.data.totalItems) {
        dispatch(setIsLoading(false))
        dispatch(setError('Enter the correct value'))
        return
      }

      if (!startIndex) {
        dispatch(setBooks(res.data))
      } else {
        dispatch(showMore(res.data.items))
      }

      dispatch(setStartIndex(startIndex + 20))
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setIsLoading(false))
    }
    dispatch(setIsLoading(false))
  }
)

export const booksReducer = slice.reducer
export const {setSearchValue, setBooks, showMore, setStartIndex} = slice.actions