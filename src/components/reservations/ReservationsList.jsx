import ReservationsItem from './ReservationsItem';
import { Divider, VStack } from '@chakra-ui/react';

export default function ReservationsList({
  productList,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
}) {
  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {productList?.map(item => (
        <ReservationsItem
          key={item.idx + item.description}
          product={item}
          increaseProduct={increaseProduct}
          decreaseProduct={decreaseProduct}
          deleteProduct={deleteProduct}
        />
      ))}
    </VStack>
  );
}
