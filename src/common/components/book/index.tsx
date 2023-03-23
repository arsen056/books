import React, {FC} from 'react';
import {Card, CardBody, Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {sliceDescription} from "common/utils/sliceDescription";
import defaultImg from 'common/assets/imageDefault.jpg'

type Props = {
  title: string,
  description: string
  img: string
  category?: string[]
}

export const Book: FC<Props> = ({title, img, description, category}) => {
  const shortDescription = sliceDescription(description)

  const image = img ? img : defaultImg

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
            <Text fontSize='md'>{shortDescription}</Text>
            <Text fontSize='md'>category: {category ? category[0] : ''}</Text>
          </Stack>
        </CardBody>
      </Card>
  );
};
