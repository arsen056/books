import {RootStateType} from "app/store";
import {IBook} from "common/types";

export const selectSearchValue = (state: RootStateType): string => state.books.searchValue
export const selectBooks = (state: RootStateType): IBook[] => state.books.items
export const selectTotalItems = (state: RootStateType): number => state.books.totalItems
export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading
export const selectError = (state: RootStateType): string => state.app.error
