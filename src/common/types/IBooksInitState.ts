import {IResponseBooks} from "common/types/IResponseBooks";
import {ISearchParams} from "common/types/ISearchParams";

export interface IBooksInitState extends IResponseBooks{
  searchParams: ISearchParams
}