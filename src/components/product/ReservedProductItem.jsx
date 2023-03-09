import { useProductActionContext } from './../../contexts/ProductContext';
import LazyImage from './../common/LazyImage';
import ProductDetail from './ProductDetail';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  IconButton,
  Tag,
  useDisclosure,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ReservedProductItem = ({ product }) => {
  const { idx, name, mainImage, price, spaceCategory } = product;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteProduct } = useProductActionContext();

  const onClickHandler = e => {
    e.stopPropagation();
    deleteProduct(product);
  };

  return (
    <>
      <Card
        onClick={onOpen}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        cursor='pointer'>
        <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
          <LazyImage src={mainImage} alt={name} width='100%' />
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
