import React, {memo} from 'react';
import {Center, Spinner} from '@chakra-ui/react';

export const CircularSpinner = memo(() => {
  return (
    <Center m={5}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
});
