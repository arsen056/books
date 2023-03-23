import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container} from 'common/components/container';
import {Image, Skeleton, Text, SkeletonText} from '@chakra-ui/react';
import {useAppDispatch} from 'common/hooks/useAppDispatch';
import {fetchBook} from 'features/bookPage/slice';
import {useSelector} from 'react-redux';
import {selectBook, selectIsLoading} from 'common/selectors';

import {checkArray} from 'common/utils/checkArray';
import {BackButton} from 'common/components/backButton';
import defaultImg from 'common/assets/imageDefault.jpg';

import s from './BookPage.module.scss';

export const BookPage = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const book = useSelector(selectBook);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (id) dispatch(fetchBook(id));
  }, []);

  const authors = checkArray('Authors', 'all', book.authors);
  const categories = checkArray('Categories', 'all', book.categories);
  const image = book.img ? book.img : defaultImg;

  return (
    <Container className={s.bookPage}>
      <BackButton/>
      <div className={s.bookPageFlex}>
        <Skeleton isLoaded={!isLoading}>
          <div className={s.imgWrapper}>
            <Image
              width={'100%'}
              height={'100%'}
              src={image}
              alt={book.title}/>
          </div>
        </Skeleton>

        <div className={s.info}>
          <Skeleton isLoaded={!isLoading} >
            <h2 className={s.title}>{book.title}</h2>
          </Skeleton>

          <Skeleton isLoaded={!isLoading}>
            <Text className={s.infoEl}>{authors}</Text>
          </Skeleton>

          <Skeleton isLoaded={!isLoading}>
            <Text className={s.infoEl}>{categories}</Text>
          </Skeleton>
        </div>
      </div>
      {isLoading
        ? <SkeletonText mt="10" noOfLines={8} spacing="5" skeletonHeight="4" />
        : <p className={s.description}>{book.description}</p>
      }
    </Container>
  );
};
