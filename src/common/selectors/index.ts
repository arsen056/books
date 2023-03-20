import {RootStateType} from "app/store";

export const selectSearchValue = (state: RootStateType): string => state.books.searchValue