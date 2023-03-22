import React, {FC} from 'react';
import s from './Book.module.scss'
import {Card, CardBody, Center, Heading, Image, Stack, Text} from "@chakra-ui/react";

type Props = {
  title?: string,
  description: string
  img?: string
}

export const Book: FC<Props> = ({title, img, description}) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Center>
          <Image
            src={img}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
        </Center>

        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
