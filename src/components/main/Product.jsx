import { useModalProductContext } from '../../contexts/ModalProductContext';
import ReserveButton from './ReserveButton';
import ReservedCheckBox from './ReservedCheckBox';
import {
  Box,
  Card,
  CardHeader,
  Flex,
  GridItem,
  Image,
  Spacer,
  Text,
  HStack,
  Heading,
  VStack,
  Stack,
} from '@chakra-ui/react';

export const Product = ({ product }) => {
  const { setModalProduct } = useModalProductContext();

  // 장바구니는 작은 카드 크기의 리스트 scroll 형식으로 ?? (우측 nav bar)
  // 장바구니 담을 때 animation 도 있었음 좋겠당 ㅎㅎ

  return (
    <GridItem>
      <Card
        onClick={e => {
          setModalProduct(product);
        }}
        h='full'>
        <CardHeader>
          <Flex>
            <Text>#{product.idx}</Text>
            <Spacer />
            <ReservedCheckBox product={product} />
          </Flex>
        </CardHeader>
        <VStack>
          <Image src={product.mainImage} alt={product.name} />
          <Stack p={3}>
            <Heading as='h2' size='sm'>
              상품명 : {product.name}
            </Heading>
            <Text>지역 : {product.spaceCategory}</Text>
            <HStack>
              <Text>가격 : </Text>
              <Text fontWeight='700'>{product.price.toLocaleString()}</Text>
              <Text> 원</Text>
            </HStack>
          </Stack>
          <ReserveButton product={product} />
        </VStack>
      </Card>
    </GridItem>
  );
};
