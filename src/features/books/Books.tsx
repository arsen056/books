import React, {memo, useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectBooks, selectIsLoading} from "common/selectors";
import {Container} from "common/components/container";
import {Book} from "common/components/book";
import {Button, Center, SimpleGrid} from "@chakra-ui/react";
import s from './Books.module.scss'
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {fetchBooks} from "features/books/slice";
import {PromptQuery} from "common/components/promptQuery";

export const Books = memo(() => {
  const dispatch = useAppDispatch()
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading)

  const booksMap = books.map(book => <Book
    key={book.id}
    title={book.volumeInfo.title}
    img={book.volumeInfo.imageLinks?.thumbnail}
    description={book.volumeInfo.description}
    category={book.volumeInfo.categories}
  />)

  const showMore = () => dispatch(fetchBooks())

  return (
      <main className={s.books}>
        {books.length ?
          <Container>
            <div className={s.results}>results on the page: {books.length}</div>
            <SimpleGrid minChildWidth='250px' spacing='10'>
              {booksMap}
            </SimpleGrid>

            <Center m={5}>
              <Button
                isLoading={isLoading}
                loadingText='Loading'
                onClick={showMore}
                colorScheme='teal'
                variant='solid'>
                Show more
              </Button>
            </Center>
          </Container>
          : <PromptQuery/>}
      </main>
  );
});

