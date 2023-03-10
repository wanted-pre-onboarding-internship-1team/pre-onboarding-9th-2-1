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
  Icon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function ProductList() {
  const navigate = useNavigate();
  const toast = useToast();
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
  const onSetCount = (id, command, maximum, count) => {
    let list = [];
    switch (command) {
      case '+':
        if (maximum > count) {
          list = productList.map(data => {
            if (data.idx === id) {
              return { ...data, count: data.count + 1 };
            } else {
              return data;
            }
          });
        } else if (maximum <= count) {
          list = productList.map(data => {
            if (data.idx === id) {
              return { ...data, count: data.count };
            } else {
              return data;
            }
          });
          toast({
            title: 'Error',
            description: '최대 수량 이상을 담을 수 없습니다.',
            status: 'success',
            duration: 1000,
            isClosable: true,
          });
        }
        break;
      case '-':
        if (count > 0) {
          list = productList.map(data => {
            if (data.idx === id) {
              return { ...data, count: data.count - 1 };
            } else {
              return data;
            }
          });
        } else if (count <= 0) {
          list = productList.map(data => {
            if (data.idx === id) {
              return { ...data, count: data.count };
            } else {
              return data;
            }
          });
          toast({
            title: 'Error',
            description: '수량을 0개 이하로 선택할 수 없습니다.',
            duration: 1000,
            isClosable: true,
          });
        }
        break;
      default:
        break;
    }
    if (command === '+' && maximum > count) {
      list = productList.map(data => {
        if (data.idx === id) {
          return { ...data, count: data.count + 1 };
        } else {
          return data;
        }
      });
    } else if (command === '-' && maximum < count) {
      list = productList.map(data => {
        if (data.idx === id) {
          return { ...data, count: data.count - 1 };
        } else {
          return data;
        }
      });
    } else {
    }
    setProductList(list);
  };

  // 상품 삭제
  const onDeleteProduct = id => {
    let list = [];
    list = productList.filter(data => data.idx !== id);
    setProductList(list);
  };

  // 뒤로가기
  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Box display='flex' flexDirection='row' m='3'>
        <Icon
          as={BsChevronLeft}
          boxSize='6'
          display='flex'
          alignContent='center'
          justifyContent='center'
          mt='3'
          mr='3'
          cursor='pointer'
          onClick={() => {
            onClickHandler();
          }}
        />
        <Text
          display='flex'
          alignContent='center'
          justifyContent='center'
          fontSize='30'
          fontWeight='900'
          cursor='default'>
          상품목록
        </Text>
      </Box>
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
                value={data.count}
                min={0}
                ml='15'>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    onClick={() =>
                      onSetCount(
                        data.idx,
                        '+',
                        data.maximumPurchases,
                        data.count
                      )
                    }
                  />
                  <NumberDecrementStepper
                    onClick={() =>
                      onSetCount(
                        data.idx,
                        '-',
                        data.maximumPurchases,
                        data.count
                      )
                    }
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
