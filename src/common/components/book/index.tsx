import React, {FC} from 'react';
import {Card, CardBody, Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {sliceDescription} from "common/utils/sliceDescription";
import defaultImg from 'common/assets/imageDefault.jpg'

type Props = {
  title: string,
  description: string
  img: string
  categories?: string[]
  authors?: string[]
}

export const Book: FC<Props> = ({title, img, description, categories, authors}) => {
  const shortDescription = sliceDescription(description)

  const image = img ? img : defaultImg
  const authorsString = authors?.map(a => `${a}`).join(', ')
  const category = categories ? `Category: ${categories[0]}` : ''

  return (
      <Card maxW='sm'>
        <CardBody>
          <Center>
            <Image
              src={image}
              alt='Book img'
              borderRadius='lg'
            />
          </Center>

          <Stack mt='6' spacing='3'>
            <Heading size='sm'>{title}</Heading>
            <Text fontSize='md'>{authorsString && `Authors: ${authorsString}`}</Text>
            <Text fontSize='md'>{category}</Text>
            <Text fontSize='md'>{shortDescription}</Text>
          </Stack>
        </CardBody>
      </Card>
  );
};
