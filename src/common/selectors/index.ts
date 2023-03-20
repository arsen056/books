import {RootStateType} from "app/store";
import {Items} from "common/types";

export const selectSearchValue = (state: RootStateType): string => state.books.searchValue
export const selectBooks = (state: RootStateType): Items[] => state.books.items
export const selectIsLoading = (state: RootStateType): boolean => state.app.isLoading
export const selectError = (state: RootStateType): string => state.app.error