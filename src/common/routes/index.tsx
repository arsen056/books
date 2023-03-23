import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {BookPage} from 'features/bookPage/BookPage';
import {Books} from 'features/books';

export const Routs = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Books />}/>
      <Route path={'/:id'} element={<BookPage />}/>
    </Routes>
  );
};