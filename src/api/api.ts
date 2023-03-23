import axios from 'axios';
import {IBook, IResponseBooks} from 'common/types/IResponseBooks';
import {ISearchParams} from 'common/types';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes/',
});

const apiKey = {
  key: 'AIzaSyDdWpPRmjMkHM531WBVcQT-btfUii5LbgQ'
};

export const API = {
  getBooks(params: Partial<ISearchParams>) {
    return instance.get<IResponseBooks>('', {params: {...apiKey, ...params}});
  },
  getBook(id: string) {
    return instance.get<IBook>(id, {params: {...apiKey}});
  }
};