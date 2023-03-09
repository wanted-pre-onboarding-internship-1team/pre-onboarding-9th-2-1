import { Text } from '@chakra-ui/react';

const ProductName = ({ name }) => {
  return (
    <Text fontSize='md' noOfLines={1} pr={10}>
      {name}
    </Text>
  );
};

export default ProductName;
