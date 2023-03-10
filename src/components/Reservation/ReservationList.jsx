import { useProduct } from '../../hooks/useProduct';
import ReservationItem from './ReservationItem';
import ReservationSummary from './ReservationSummary';
import { Divider, VStack, Center, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

export default function ReservationList() {
  const navigate = useNavigate();
  const [storageList] = useProduct();

  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {storageList.length === 0 ? (
        <Center flexDirection='column' gap='16px' height={700}>
          <Heading size='lg'>예약된 상품이 없습니다.</Heading>
          <br />
          <Button colorScheme='linkedin' onClick={() => navigate('/')}>
            상품 보러가기
          </Button>
        </Center>
      ) : (
        <>
          <ReservationSummary reservationList={storageList} />
          {storageList &&
            storageList.map(reservationItem => (
              <ReservationItem
                key={reservationItem.idx}
                reservationItem={reservationItem}
              />
            ))}
        </>
      )}
    </VStack>
  );
}
