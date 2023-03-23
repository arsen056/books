import React from 'react';
import {Progress} from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import {selectIsLoading} from 'common/selectors';

export const ProgressBar = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div style={{position: 'fixed', left: 0, top: 0, width: '100%'}}>
      {isLoading && <Progress size="sm" isIndeterminate/>}
    </div>
  );
};
