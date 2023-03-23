import React, {ChangeEvent, KeyboardEvent} from 'react';
import {fetchBooks, setSearchValue} from "features/books";

import {useAppDispatch} from "common/hooks/useAppDispatch";
import s from './Search.module.scss'
import {Button} from '@chakra-ui/react'
import {useSelector} from "react-redux";
import {selectIsLoading, selectSearchValue} from "common/selectors";

export const Search = () => {
  const dispatch = useAppDispatch()

  const searchValue = useSelector(selectSearchValue)
  const isLoading = useSelector(selectIsLoading)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value))
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && searchValue) {
      dispatch(fetchBooks())
    }
  }
  const searchHandler = () => dispatch(fetchBooks())

  return (
    <label className={s.label}>
      <input className={s.search} value={searchValue} onChange={onChange} onKeyDown={onEnter} placeholder='Enter value...'/>
      <div className={s.button}>
        <Button
          isLoading={isLoading}
          colorScheme='blue'
          onClick={searchHandler}
          isDisabled={!searchValue}
        >
          Search
        </Button>
      </div>

    </label>)
};
