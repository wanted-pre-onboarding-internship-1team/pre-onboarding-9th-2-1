import { Text } from '@chakra-ui/react';

const ProductPrice = ({ price }) => {
  return (
    <Text fontWeight='bold' fontSize='md' py='2'>
      {price.toLocaleString()}원
    </Text>
  );
};

export default ProductPrice;
