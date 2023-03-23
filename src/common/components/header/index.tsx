import React, {ChangeEvent, memo} from 'react';
import {Container} from "common/components/container";
import {Search} from "common/components/search";
import s from './Header.module.scss'
import {Select} from "@chakra-ui/react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setCategory, setOrderBy} from "features/books";

const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
const optionsOrderBy: Array<'relevance' | 'newest'> = ['relevance', 'newest']

export const Header = memo(() => {
  const dispatch = useAppDispatch()

  const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(`subject+${e.target.value}`))
  }

  const changeOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const value  = e.target.value as 'relevance' | 'newest'
    dispatch(setOrderBy(value))
  }

  return (
    <header className={s.header}>
      <Container>
        <h1>Google book search</h1>
        <Search/>
        <Select bg={'white'} color={'black'} onChange={changeCategory}>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </Select>
        <Select bg={'white'} color={'black'} onChange={changeOrderBy}>
          {optionsOrderBy.map(o => <option key={o} value={o}>{o}</option>)}
        </Select>
      </Container>
    </header>
  );
});
