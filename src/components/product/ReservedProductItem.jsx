import { useProductActionContext } from './../../contexts/ProductContext';
import LazyImage from './../common/LazyImage';
import ProductDetail from './ProductDetail';
import {
  Center,
  Box,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  IconButton,
  Tag,
  useDisclosure,
  AspectRatio,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ReservedProductItem = ({ product }) => {
  const { idx, name, mainImage, price, spaceCategory, count } = product;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteProduct, increaseCount, decreaseCount } =
    useProductActionContext();

  const onClickHandler = e => {
    e.stopPropagation();
    deleteProduct(product);
  };

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        cursor='pointer'>
        <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
          <LazyImage onClick={onOpen} src={mainImage} alt={name} width='100%' />
        </AspectRatio>

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
            <Button
              onClick={() => {
                increaseCount(product);
              }}>
              +
            </Button>
            <Center
              w='40px'
              h='40px'
              bg='#a1a4cb'
              borderRadius={5}
              color='white'>
              <Box fontWeight='bold' fontSize='lg'>
                {count}
              </Box>
            </Center>
            <Button
              onClick={() => {
                decreaseCount(product);
              }}>
              -
            </Button>
            <IconButton
              onClick={onClickHandler}
              aria-label='삭제하기'
              icon={<AiFillDelete />}
            />
          </CardFooter>
        </Stack>
      </Card>

      <ProductDetail isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default ReservedProductItem;
