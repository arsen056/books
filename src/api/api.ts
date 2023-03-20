import axios from "axios";
import {IResponseBooks} from "common/types/IResponseBooks";

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
})

const apiKey = {
  key: 'AIzaSyDdWpPRmjMkHM531WBVcQT-btfUii5LbgQ'
}

export const API = {
  getBooks(params: any) {
    return instance.get<IResponseBooks>('volumes', {params: {...apiKey, ...params}})
  }
}