import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {selectBooks, selectTotalItems} from "common/selectors";
import {Container} from "common/components/container";
import {Book} from "common/components/book";
import {SimpleGrid} from "@chakra-ui/react";
import s from './Books.module.scss'

export const Books = memo(() => {
  const books = useSelector(selectBooks);
  const totalItems = useSelector(selectTotalItems)

  const booksMap = books.map(book => <Book
    key={book.id}
    title={book.volumeInfo.title}
    img={book.volumeInfo.imageLinks?.thumbnail}
    description={book.volumeInfo.description}
  />)

  return (
    <main className={s.books}>
      <Container>
        <div className={s.results}>results: {totalItems}</div>
        <SimpleGrid minChildWidth='250px' spacing='10'>
          {booksMap}
        </SimpleGrid>
      </Container>
    </main>
  );
});
