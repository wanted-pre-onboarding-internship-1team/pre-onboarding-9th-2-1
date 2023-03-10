import { Text, Card, CardFooter, Spacer } from '@chakra-ui/react';

export default function ReservationSummary({ reservationList }) {
  return (
    <Card variant='outline'>
      <CardFooter px='5' py='3'>
        <Text fontWeight='semibold' fontSize='lg'>
          총 합계 금액
        </Text>
        <Spacer />
        <Text fontWeight='bold' fontSize='xl'>
          {reservationList
            .reduce((acc, cur) => acc + cur.price * cur.count, 0)
            .toLocaleString()}
          원
        </Text>
      </CardFooter>
    </Card>
  );
}
