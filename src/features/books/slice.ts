import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBook, IResponseBooks} from 'common/types';
import {API} from 'api/api';
import {RootStateType, setError, setIsLoading} from 'app';
import {IBooksInitState} from 'common/types/IBooksInitState';
import {errorUtils} from 'common/utils/error';
import {AxiosError} from 'axios';

const initialState: IBooksInitState = {
  kind: '',
  totalItems: 0,
  items: [],
  searchParams: {
    q: '',
    searchValue: '',
    startIndex: 0,
    maxResults: 20,
    category: '',
    orderBy: 'relevance'
  }
};

const slice = createSlice({
  name: 'books/slice',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IResponseBooks>) => {
      state.kind = action.payload.kind;
      state.totalItems = action.payload.totalItems;
      state.items = action.payload.items;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchParams.searchValue = action.payload;
      state.searchParams.startIndex = 0;
    },
    showMore: (state, action: PayloadAction<IBook[]>) => {
      state.items.push(...action.payload);
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.searchParams.startIndex = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.searchParams.category = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<'relevance' | 'newest'>) => {
      state.searchParams.orderBy = action.payload;
      state.searchParams.startIndex = 0;
    },
  }
});

export const fetchBooks = createAsyncThunk(
  'books/fetch',
  async (_, {dispatch, getState}) => {
    const state = getState() as RootStateType;

    const {q, searchValue, category, startIndex, ...rest} = state.books.searchParams;

    try {
      dispatch(setIsLoading(true));
      const res = await API.getBooks({q: `${category}${searchValue}`, startIndex, ...rest});

      if (!res.data.totalItems) {
        dispatch(setIsLoading(false));
        dispatch(setError('Enter the correct value'));
        return;
      }

      if (!startIndex) {
        dispatch(setBooks(res.data));
      } else {
        dispatch(showMore(res.data.items));
      }

      dispatch(setStartIndex(startIndex + 20));
    } catch (err) {
      errorUtils(err as Error | AxiosError<{ error: string }>, dispatch);
    } finally {
      dispatch(setIsLoading(false));
    }
    dispatch(setIsLoading(false));
  }
);

export const booksReducer = slice.reducer;
export const {setSearchValue, setBooks, showMore, setStartIndex, setCategory, setOrderBy} = slice.actions;