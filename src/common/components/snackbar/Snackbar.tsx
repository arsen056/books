import React, {useEffect} from 'react';
import s from './Snackbar.module.css'
import {Alert, AlertIcon } from "@chakra-ui/react";
import {useAppDispatch} from "common/hooks/useAppDispatch";
import {setError} from "app";
import {useSelector} from "react-redux";
import {selectError} from "common/selectors";

export const Snackbar = () => {
  const dispatch = useAppDispatch()
  const error = useSelector(selectError)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setError(''))
    }, 4000)
    return () => {
      clearTimeout(timer)
    }
  },[error])

  return (
    <div>
      {error
        ? <div className={s.snackbar}>
        <Alert status='warning'>
          <AlertIcon />
          {error}
        </Alert>
        </div>
        : ''
      }
    </div>
  );
};
