import {IBook} from 'common/types';

export const uniqBooks = (books: IBook[]): IBook[] => {
  const table = {} as any;
  return books.filter(b => (!table[b.id] && (table[b.id] = 1)));
};