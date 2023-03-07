import { Box, Button, Image, Text } from '@chakra-ui/react';
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
      <Box
        w={520}
        h={450}
        backgroundColor='white'
        position='fixed'
        top='30%'
        left='40%'
        zIndex='21'
        transform='translate(-10%,-10%)'>
        <Text>상품번호 : {info.idx}</Text>
        <Text>이름 : {info.name}</Text>
        <Image src={info.mainImage} />
        <Text>상품설명 : {info.description}</Text>
        <Text>지역 : {info.spaceCategory}</Text>
        <Text>가격 : {info.price}</Text>
        <Text>최대 구매 수 : {info.maximumPurchases}</Text>
        <Text>등록 날짜 : {info.registrationDate}</Text>
        <Button
          onClick={() => {
            onCloseModal();
          }}>
          닫기
        </Button>
      </Box>
    </>
  );
}
