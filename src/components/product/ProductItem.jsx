import ProductDetail from './ProductDetail';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  IconButton,
  Tag,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const ProductItem = ({ product }) => {
  const { idx, name, mainImage, price, spaceCategory } = product;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        onClick={onOpen}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        cursor='pointer'>
        <Image
          objectFit='cover'
          ratio={1}
          maxW={{ base: '100%', sm: '200px' }}
          borderRadius='lg'
          src={mainImage}
          alt={name}
        />

        <Stack flex='1'>
          <CardBody position='relative'>
            <Text
              decoration='underline'
              position='absolute'
              top={5}
              right={6}
              minW={10}
              textAlign='center'>
              {idx}
            </Text>
            <Text fontSize='md' noOfLines={1} pr={10}>
              {name}
            </Text>
            <Text fontWeight='bold' fontSize='md' py='2'>
              {price.toLocaleString()}원
            </Text>
            <Tag>{spaceCategory}</Tag>
          </CardBody>

          <CardFooter justifyContent='flex-end'>
            <IconButton aria-label='예약하기' icon={<RiShoppingBag2Fill />} />
          </CardFooter>
        </Stack>
      </Card>

      <ProductDetail isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default ProductItem;
