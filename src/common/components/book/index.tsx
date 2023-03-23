import React, {FC} from 'react';
import {Card, CardBody, Center, Image, Stack, Text} from '@chakra-ui/react';
import {sliceDescription} from 'common/utils/sliceDescription';
import defaultImg from 'common/assets/imageDefault.jpg';
import {Link} from 'react-router-dom';
import {checkArray} from 'common/utils/checkArray';

type Props = {
  id: string
  title: string,
  description: string
  img: string
  categories?: string[]
  authors?: string[]
}

export const Book: FC<Props> = ({id, title, img, description, categories, authors}) => {
  const shortDescription = sliceDescription(description);

  const image = img ? img : defaultImg;
  const authorsString = checkArray('Authors', 'all', authors);
  const category = checkArray('Category', 'one', categories);

  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image
            src={image}
            alt="Book img"
            borderRadius="lg"
          />
        </Center>

        <Stack mt="6" spacing="3">
          <Link to={id}>{title}</Link>
          <Text fontSize="md">{authorsString}</Text>
          <Text fontSize="md">{category}</Text>
          <Text fontSize="md">{shortDescription}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
