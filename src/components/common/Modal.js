import {
  Box,
  Image,
  Button,
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Modals({ onCloseModal }) {
  let info = useSelector(state => {
    return state.detailInfo;
  });

  return (
    <>
      <Box
        w='100%'
        h='100%'
        position='fixed'
        left='0'
        top='0'
        backgroundColor='black'
        opacity='0.1'
        zIndex='20'
        onClick={() => {
          onCloseModal();
        }}
      />
      <Card
        width={410}
        m='1'
        border='1px'
        borderColor='#7b9acc'
        backgroundColor='#FCF6F5'
        position='fixed'
        top='30%'
        left='40%'
        zIndex='21'
        transform='translate(-10%,-10%)'>
        <CardBody>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'>
            <Text>No. {info.idx} </Text>
            <Text> {info.registrationDate}</Text>
          </Box>
          <Image src={info.mainImage} borderRadius='lg' mt='5' />
          <Stack mt='6' spacing='2'>
            <Heading size='md'> {info.name}</Heading>
            <Text>지역 : {info.spaceCategory}</Text>
            <Text color='blue.600' fontSize='2xl'>
              {info.price}원
            </Text>
            <Text> {info.description}</Text>

            <Text>최대 구매 개수 : {info.maximumPurchases}</Text>

            <Button
              onClick={() => {
                onCloseModal();
              }}>
              닫기
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
