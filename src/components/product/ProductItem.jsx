import LazyImage from '../common/LazyImage';
import {
  ListItem,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

function ProductItem({ idx, name, mainImage, price, spaceCategory }) {
  return (
    <ListItem marginBottom='13px'>
      <Card
        _hover={{
          background: 'gray.50',
          cursor: 'pointer',
        }}
        direction='row'
        overflow='hidden'
        border='1px solid'
        borderColor='gray.300'>
        <Image src={mainImage} alt={name} width='200px' />
        <Stack>
          <CardBody>
            <Heading size='lg'>{`${idx}. ${name}`}</Heading>
            <Text fontSize='xl'>{spaceCategory}</Text>
          </CardBody>
          <CardFooter flexDirection='column'>
            <Text as='b'>{`${price.toLocaleString()} 원`}</Text>
            <Button colorScheme='green' maxW='5rem'>
              예약
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </ListItem>
  );
}

export default ProductItem;
