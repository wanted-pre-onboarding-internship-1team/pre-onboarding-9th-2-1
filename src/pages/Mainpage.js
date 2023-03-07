import { ReadData } from '../apis/api';
import Modal from '../components/common/Modal';
import Potal from '../components/common/Portal';
import { changeinfo, addProduct } from '../store/store';
import {
  Box,
  Image,
  Button,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Mainpage() {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();

  // 장바구니 정보
  let cart = useSelector(state => {
    return state.cart;
  });

  // Modal Close
  const onCloseModal = () => {
    setModalState(!modalState);
  };

  // Modal Open
  const onOpenModal = () => {
    setModalState(!modalState);
  };

  // read API Data
  const { data: isData } = useQuery(['todos'], ReadData);

  return (
    <>
      <Box display='flex' alignContent='center' justifyContent='center'>
        <Button w='300' colorScheme='blue' mt='50'>
          장바구니 + {cart.length - 1}
        </Button>
      </Box>
      <Box
        display='flex'
        flexDirection='row'
        alignContent='center'
        justifyContent='center'
        flexWrap='wrap'
        w={1700}
        ml='20'>
        {isData &&
          isData.map(data => {
            return (
              <>
                <Card
                  width={402}
                  m='1'
                  border='1px'
                  borderColor='#7b9acc'
                  backgroundColor='#FCF6F5'>
                  <CardBody
                    cursor='pointer'
                    onClick={() => {
                      onOpenModal();
                      dispatch(
                        changeinfo({
                          idx: data.idx,
                          name: data.name,
                          mainImage: data.mainImage,
                          description: data.description,
                          spaceCategory: data.spaceCategory,
                          price: data.price,
                          maximumPurchases: data.maximumPurchases,
                          registrationDate: data.registrationDate,
                        })
                      );
                    }}>
                    No. {data.idx}
                    <Image src={data.mainImage} borderRadius='lg' />
                    <Stack mt='6' spacing='2'>
                      <Heading size='md'> {data.name}</Heading>
                      <Text>지역 : {data.spaceCategory}</Text>
                      <Text color='blue.600' fontSize='2xl'>
                        {data.price}원
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <Button
                      w='300'
                      variant='solid'
                      colorScheme='blue'
                      onClick={() => {
                        dispatch(addProduct(data));
                      }}>
                      예약하기
                    </Button>
                  </CardFooter>
                </Card>

                <Potal>
                  {modalState && <Modal onCloseModal={onCloseModal} />}
                </Potal>
              </>
            );
          })}
      </Box>
    </>
  );
}
