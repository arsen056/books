import React, {ChangeEvent, useEffect, useState} from 'react';
import {fetchBooks, setSearchValue} from "features/books";
import { useDebounce } from "common/hooks/useDebounce";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import s from './Search.module.scss'

export const Search = () => {

  const dispatch = useAppDispatch()

  const [value, setValue] = useState<string>('')

  const searchValue = useDebounce<string>(value.trim());

  useEffect(() => {
    dispatch(setSearchValue(searchValue))
    if (searchValue) dispatch(fetchBooks())
  }, [searchValue])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return <input className={s.search} value={value} onChange={onChange} placeholder='Enter value...' />
};
