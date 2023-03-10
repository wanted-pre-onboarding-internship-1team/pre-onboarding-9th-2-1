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
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const ProductItem = ({ product }) => {
  const {
    idx,
    name,
    mainImage,
    price,
    spaceCategory,
    count,
    maximumPurchases,
  } = product;
  const { addProduct } = useProductActionContext();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHandler = e => {
    e.stopPropagation();
    addProduct(product);
    if (!count || count < maximumPurchases) {
      toast({
        title: '상품이 장바구니에 추가되었습니다!',
        duration: 2000,
        colorScheme: 'linkedin',
        isClosable: true,
      });
    } else {
      toast({
        title: '장바구니 담기 실패!',
        description: '최대 구매 가능 횟수를 초과하였습니다. ',
        status: 'error',
        duration: 2000,
        colorScheme: 'linkedin',

        isClosable: true,
      });
    }
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
              aria-label='예약하기'
              icon={<RiShoppingBag2Fill />}
            />
          </CardFooter>
        </Stack>
      </Card>

      <ProductDetail isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default ProductItem;
