import GoMainButton from '../components/reservations/GoMainButton';
import ProductItem from '../components/reservations/ProductItem';
import { useProductValueContext } from '../contexts/ProductContext';
import { Divider, Text, Container, VStack, Box } from '@chakra-ui/react';

export default function Reservations() {
  const addedList = useProductValueContext();
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <GoMainButton />
      <VStack
        divider={<Divider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        p={5}>
        {addedList?.map(reserved => {
          return <ProductItem product={reserved} key={reserved.idx} />;
        })}
      </VStack>
      <Box align='stretch'>
        총 구매 가격 :{' '}
        <Text>
          {addedList
            ?.reduce((prev, currProduct) => {
              return currProduct.count * currProduct.price + prev;
            }, 0)
            .toLocaleString()}{' '}
          원
        </Text>
      </Box>
    </Container>
  );
}
