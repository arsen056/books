import React, {ChangeEvent, memo} from 'react';
import {Container} from "common/components/container";
import {Search} from "common/components/search";
import s from './Header.module.scss'
import {Select} from "@chakra-ui/react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setCategory} from "features/books";

const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']

export const Header = memo(() => {
  const dispatch = useAppDispatch()

  const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategory(`subject+${e.target.value}`))
  }

  return (
    <header className={s.header}>
      <Container>
        <h1>Google book search</h1>
        <Search/>
        <Select bg={'white'} color={'black'} onChange={changeCategory}>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </Select>
      </Container>
    </header>
  );
});
