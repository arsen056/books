import {RootStateType} from 'app/store';
import {IBook} from 'common/types';
import {IBookPage} from 'common/types/IBookPage';

export const selectSearchValue = (state: RootStateType): string => state.books.searchParams.searchValue;
export const selectBooks = (state: RootStateType): IBook[] => state.books.items;
export const selectTotalItems = (state: RootStateType): number => state.books.totalItems;
export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading;
export const selectError = (state: RootStateType): string => state.app.error;
export const selectCategory = (state: RootStateType): string => state.books.searchParams.category;
export const selectOrderBy = (state: RootStateType): 'relevance' | 'newest' => state.books.searchParams.orderBy;

export const selectBook = (state: RootStateType): IBookPage => state.bookPage;
export const selectId = (state: RootStateType): string => state.bookPage.id;

