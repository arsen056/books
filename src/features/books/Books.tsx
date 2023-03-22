import React, {memo} from 'react';
import {useSelector} from "react-redux";
import {selectBooks, selectTotalItems} from "common/selectors";
import {Container} from "common/components/container";
import {Book} from "common/components/book";
import {Button, SimpleGrid} from "@chakra-ui/react";
import s from './Books.module.scss'
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBooks} from "features/books/slice";

export const Books = memo(() => {
  const dispatch = useAppDispatch()
  const books = useSelector(selectBooks);

  const booksMap = books.map(book => <Book
    key={book.id}
    title={book.volumeInfo.title}
    img={book.volumeInfo.imageLinks?.thumbnail}
    description={book.volumeInfo.description}
  />)

  const showMore = () => {
    dispatch(fetchBooks())
  }

  return (
    <main className={s.books}>
      <Container>
        <div className={s.results}>results on the page: {books.length}</div>
        <SimpleGrid minChildWidth='250px' spacing='10'>
          {booksMap}
        </SimpleGrid>
        <Button onClick={showMore} colorScheme='teal' variant='solid'>
          Show more
        </Button>
      </Container>
    </main>
  );
});
