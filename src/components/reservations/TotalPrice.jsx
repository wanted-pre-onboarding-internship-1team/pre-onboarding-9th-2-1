import { useProductValueContext } from '../../contexts/ProductContext';
import { Card, CardFooter, Spacer, Text } from '@chakra-ui/react';

const TotalPrice = () => {
  const addedList = useProductValueContext();

  return (
    <Card variant='outline' mx={5} mt={5} mb={2}>
      <CardFooter px='5' py='3'>
        <Text fontWeight='semibold' fontSize='lg'>
          총 구매 가격 :{' '}
        </Text>
        <Spacer />
        <Text fontWeight='bold' fontSize='xl'>
          {addedList
            ?.reduce((prev, currProduct) => {
              return currProduct.count * currProduct.price + prev;
            }, 0)
            .toLocaleString()}{' '}
          원
        </Text>
      </CardFooter>
    </Card>
  );
};

export default TotalPrice;
