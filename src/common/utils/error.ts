import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import {setError} from 'app';

export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch) => {
  const err = e as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message;

    dispatch(setError(error));
  } else {
    dispatch(setError(`Native error ${err.message}`));
  }
  dispatch(setError('failed'));
};