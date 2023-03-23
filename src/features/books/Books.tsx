import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import {selectBooks, selectIsLoading, selectTotalItems} from 'common/selectors';
import {Container} from 'common/components/container';
import {Book} from 'common/components/book';
import {Button, Center, SimpleGrid} from '@chakra-ui/react';

import {useAppDispatch} from 'common/hooks/useAppDispatch';
import {fetchBooks} from 'features/books/slice';
import {PromptQuery} from 'common/components/promptQuery';

import s from './Books.module.scss';

export const Books = memo(() => {
  const dispatch = useAppDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const results = useSelector(selectTotalItems);

  const booksMap = books.map(book => <Book
    key={book.id}
    id={book.id}
    title={book.volumeInfo.title}
    img={book.volumeInfo.imageLinks?.thumbnail}
    description={book.volumeInfo.description}
    categories={book.volumeInfo.categories}
    authors={book.volumeInfo.authors}
  />);

  const showMore = () => dispatch(fetchBooks());

  return (
    <>
      <main className={s.books}>
        {books.length ?
          <Container>
            <div className={s.results}>Found results: {results}</div>
            <SimpleGrid minChildWidth="250px" spacing="10">
              {booksMap}
            </SimpleGrid>

            <Center m={5}>
              <Button
                isLoading={isLoading}
                loadingText="Loading"
                onClick={showMore}
                colorScheme="teal"
                variant="solid">
                Show more
              </Button>
            </Center>
          </Container>
          : <PromptQuery/>}
      </main>
    </>

  );
});

