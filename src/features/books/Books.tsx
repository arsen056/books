import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {selectBooks} from "common/selectors";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {Container} from "common/components/container";
import {Book} from "common/components/book";
import {SimpleGrid} from "@chakra-ui/react";
import s from './Books.module.scss'

export const Books = memo(() => {
  const dispatch = useAppDispatch();
  const books = useSelector(selectBooks);

  const booksMap = books.map(book => <Book
    key={book.id}
    title={book.volumeInfo.title}
    img={book.volumeInfo.imageLinks?.thumbnail}
    description={book.volumeInfo.description}
  />)

  return (
    <main className={s.books}>
      <Container>
        <SimpleGrid minChildWidth='250px' spacing='10'>
          {booksMap}
        </SimpleGrid>
      </Container>
    </main>
  );
});
