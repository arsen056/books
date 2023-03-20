import { Input } from '@chakra-ui/react';
import React, {ChangeEvent, useEffect, useState} from 'react';
import { setSearchValue } from "features/books";
import { useDebounce } from "common/hooks/useDebounce";

export const Search = () => {
  const [value, setValue] = useState<string>('')

  const searchValue = useDebounce<string>(value);

  useEffect(() => {
    setSearchValue(searchValue)
  }, [searchValue])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return <Input value={value} onChange={onChange} placeholder='Search...' />
};
