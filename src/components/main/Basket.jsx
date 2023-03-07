import { useReservedListContext } from '../../contexts/ReservedListContext';
import useProductList from '../../hooks/useProductList';
import BasketProduct from './BasketProduct';
import { VStack, Text, Stack, Divider } from '@chakra-ui/react';

const Basket = () => {
  // TODO : react-query 적용하는게 맞지 않을까??
  const [productList] = useProductList();

  const { reserveList } = useReservedListContext();

  return (
    <Stack>
      <Text>장바구니</Text>
      <Divider />
      <VStack w='150px' h='100vh' overflow='scroll' gap={8}>
        {productList
          ?.filter(product => {
            return reserveList?.has(product.idx);
          })
          .map(product => (
            <BasketProduct product={product} key={product.idx} />
          ))}
      </VStack>
    </Stack>
  );
};

export default Basket;
