import { addCartItem } from '../store/cartSlice';
import ShowProductDetail from './ShowProductDetail';
import {
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShowProduct = ({ productData }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cartList = useSelector(state => state.cart.cartList);
  const [isReserved, setIsReserved] = useState(false);

  const onReservation = () => {
    alert('장바구니 담기완료!');
    dispatch(addCartItem(productData));
    setIsReserved(true);
  };

  useEffect(() => {
    const isReserved = cartList.some(item => {
      return item.idx === productData.idx;
    });
    setIsReserved(isReserved);
  }, []);

  const renderReservationBtn = isReserved ? (
    <Button variant='solid' colorScheme='blue' isDisabled={true}>
      예약하기
    </Button>
  ) : (
    <Button variant='solid' colorScheme='blue' onClick={onReservation}>
      예약하기
    </Button>
  );

  return (
    <Flex align='center' flex='0 1 33%' padding='5px'>
      <Card maxW='sm'>
        <CardHeader>
          <Heading size='md'>
            {productData.idx}
            &#46; &#91;{productData.spaceCategory}
            &#93;{productData.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Image
            src={productData.mainImage}
            alt='mainImage'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Text>{productData.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ₩ {productData.price.toLocaleString('ko-KR')}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            {renderReservationBtn}
            <Button variant='solid' colorScheme='green' onClick={onOpen}>
              자세히 보기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <ShowProductDetail
        productData={productData}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default ShowProduct;
