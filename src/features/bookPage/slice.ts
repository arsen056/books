import {IBookPage} from 'common/types/IBookPage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setIsLoading} from 'app';
import {API} from 'api/api';
import {IBook} from 'common/types';
import {errorUtils} from 'common/utils/error';
import {AxiosError} from 'axios';

const initialState: IBookPage = {
  id: '',
  title: '',
  img: '',
  categories: [],
  authors: [],
  description: ''
};

const slice = createSlice({
  name: 'books/slice',
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<IBook>) => {
      state.id = action.payload.id;
      state.title = action.payload.volumeInfo.title;
      state.img = action.payload.volumeInfo.imageLinks?.thumbnail;
      state.categories = action.payload.volumeInfo.categories;
      state.authors = action.payload.volumeInfo.authors;
      state.description = action.payload.volumeInfo.description;
    },
  }
});

export const fetchBook = createAsyncThunk(
  'book/fetch',
  async (id: string, {dispatch}) => {
    try {
      dispatch(setIsLoading(true));
      const res = await API.getBook(id);
      dispatch(setBook(res.data));
    } catch (err) {
      errorUtils(err as Error | AxiosError<{ error: string }>, dispatch);
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);
export const bookPageReducer = slice.reducer;
export const {setBook} = slice.actions;