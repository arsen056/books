import React, {ChangeEvent} from 'react';
import {Select} from '@chakra-ui/react';
import {useAppDispatch} from 'common/hooks/useAppDispatch';
import {setCategory, setOrderBy} from 'features/books';

import s from './Sorts.module.scss';

const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const optionsOrderBy: Array<'relevance' | 'newest'> = ['relevance', 'newest'];

export const Sorts = () => {
  const dispatch = useAppDispatch();

  const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      dispatch(setCategory(''));
      return;
    }
    dispatch(setCategory(`subject+${e.target.value}+`));
  };

  const changeOrderBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const value  = e.target.value as 'relevance' | 'newest';
    dispatch(setOrderBy(value));
  };

  return (
    <div className={s.sorts}>
      <Select bg={'white'} color={'black'} onChange={changeCategory}>
        {options.map(o => o === 'all' ? <option key={o} value={''}>{o}</option> : <option key={o} value={o}>{o}</option>)}
      </Select>
      <Select bg={'white'} color={'black'} onChange={changeOrderBy}>
        {optionsOrderBy.map(o => <option key={o} value={o}>{o}</option>)}
      </Select>
    </div>
  );
};
