import React, {FC} from 'react';
import {Card, CardBody, Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {sliceDescription} from "common/utils/sliceDescription";

type Props = {
  title: string,
  description: string
  img: string
}

export const Book: FC<Props> = ({title, img, description}) => {

  const shortDescription = sliceDescription(description)

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
          <Heading size='sm'>{title}</Heading>
          <Text fontSize='md'>{shortDescription}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
