import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {fetchBooks, setSearchValue} from 'features/books';
import {useAppDispatch} from 'common/hooks/useAppDispatch';
import s from 'features/search/Search.module.scss';
import {Button} from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import {selectCategory, selectId, selectIsLoading, selectOrderBy, selectSearchValue} from 'common/selectors';
import {useNavigate} from 'react-router-dom';

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const id = useSelector(selectId);

  const searchValue = useSelector(selectSearchValue);
  const orderBy = useSelector(selectOrderBy);
  const category = useSelector(selectCategory);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (value && searchValue === value) searchHandler();
  }, [orderBy, category]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && searchValue !== value) {
      searchHandler();
    }
  };
  const searchHandler = () => {
    dispatch(setSearchValue(value));
    dispatch(fetchBooks());

    if (id) navigate(-1);
  };

  return (
    <label className={s.label}>
      <input className={s.search} value={value} onChange={onChange} onKeyDown={onEnter} placeholder="Enter value..."/>
      <div className={s.button}>
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          onClick={searchHandler}
          isDisabled={!value || searchValue === value}
        >
          Search
        </Button>
      </div>
    </label>);
};
