import React, {memo} from 'react';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {IconButton} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

export const BackButton = memo(() => {
  const navigate = useNavigate();

  const back = () => navigate(-1);

  return (
    <IconButton
      my={10}
      size="lg"
      colorScheme="blue"
      aria-label="Back"
      icon={<ArrowBackIcon boxSize={6}/>}
      onClick={back}
    />
  );
});
