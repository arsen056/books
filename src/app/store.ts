import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {appReducer} from 'app';
import {booksReducer} from 'features/books';
import {bookPageReducer} from 'features/bookPage/slice';

const rootReducer = combineReducers({
  app: appReducer, books: booksReducer, bookPage: bookPageReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});