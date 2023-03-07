import ReserveButton from './ReserveButton';
import {
  Text,
  Heading,
  Stack,
  VStack,
  Image,
  HStack,
  Spacer,
} from '@chakra-ui/react';

export const ModalProduct = ({ product }) => {
  return (
    <VStack>
      <Image src={product.mainImage} alt={product.name} width='90%' />
      <Stack width='90%'>
        <Heading as='h2' size='lg'>
          상품명 : {product.name}
        </Heading>
        <Text>{product.description}</Text>
        <Text>지역 : {product.spaceCategory}</Text>
        <HStack>
          <Text>가격 : </Text>
          <Text fontWeight='700'>{product.price.toLocaleString()}</Text>
          <Text> 원</Text>
        </HStack>
        <HStack>
          <Text>구매 가능 : {product.maximumPurchases} 개</Text>
          <Spacer />
          <Text fontSize='sm' color='gray.500'>
            상품 등록일 : {product.registrationDate}
          </Text>
        </HStack>
      </Stack>
      <ReserveButton product={product} />
    </VStack>
  );
};
