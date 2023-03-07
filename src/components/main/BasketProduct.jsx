import { useReservedListContext } from '../../contexts/ReservedListContext';
import {
  Button,
  Card,
  CardHeader,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const BasketProduct = ({ product }) => {
  const { deleteReserve } = useReservedListContext();

  return (
    <Card>
      <Text>#{product.idx}</Text>
      <VStack>
        <Stack>
          <Image src={product.mainImage} alt={product.name} />
          <Text>{product.name}</Text>
          <Text>{product.price} 원</Text>
        </Stack>

        <Button
          colorScheme='blue'
          onClick={() => {
            deleteReserve(product.idx);
          }}>
          장바구니 삭제
        </Button>
      </VStack>
    </Card>
  );
};

export default BasketProduct;
