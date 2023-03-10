import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Image,
  Heading,
  Button,
  Box,
  Container,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let list = JSON.parse(localStorage.getItem('products')) ?? [];
    setProductList(list);
  }, []);

  // total price
  useEffect(() => {
    let total = 0;
    if (productList.length !== 0) {
      for (let i = 0; i < productList.length; i++) {
        total += Number(productList[i].price) * Number(productList[i].count);
      }
    }
    setTotalPrice(total);
  }, [productList]);

  // 수량 변경
  const onSetCount = (id, command) => {
    let list = [];
    let total = 0;
    if (command === '+') {
      list = productList.map(data => {
        if (data.idx === id) {
          return { ...data, count: data.count + 1 };
        } else {
          return data;
        }
      });
    } else if (command === '-') {
      list = productList.map(data => {
        if (data.idx === id) {
          return { ...data, count: data.count - 1 };
        } else {
          return data;
        }
      });
    }
    setProductList(list);

    for (let i = 0; i < productList.length; i++) {
      total = total + Number(productList.price) * Number(productList.count);
    }
    setTotalPrice(total);
  };

  // 상품 삭제
  const onDeleteProduct = id => {
    let list = [];
    list = productList.filter(data => data.idx !== id);
    setProductList(list);
  };

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Text
        display='flex'
        alignContent='center'
        justifyContent='center'
        fontSize='30'
        fontWeight='900'
        m='5'>
        장바구니
      </Text>
      {productList?.map(data => (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          w={600}
          h={245}
          m='1'
          key={data.idx}>
          <Image
            objectFit='cover'
            maxW={{ base: '50%', sm: '200px' }}
            src={data.mainImage}
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{data.name}</Heading>

              <Text py='2'>{data.price}원</Text>
            </CardBody>
            <Box>
              <Text
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                ml='15'>
                수량
              </Text>
              <NumberInput
                size='sm'
                maxW={20}
                defaultValue={data.count}
                min={0}
                ml='15'>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    onClick={() => onSetCount(data.idx, '+')}
                  />
                  <NumberDecrementStepper
                    onClick={() => onSetCount(data.idx, '-')}
                  />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <CardFooter>
              <Button
                variant='solid'
                colorScheme='blue'
                onClick={() => onDeleteProduct(data.idx)}>
                삭제하기
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
      <Box />
      <Card>
        <CardBody display='flex' alignContent='center' justifyContent='center'>
          <Text>총 결제액 수 : {totalPrice}</Text>
        </CardBody>
      </Card>
    </Container>
  );
}
