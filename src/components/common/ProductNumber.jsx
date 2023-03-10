import { Text } from '@chakra-ui/react';

const ProductNumber = ({ idx }) => {
  return (
    <Text
      decoration='underline'
      position='absolute'
      top={5}
      right={6}
      minW={10}
      textAlign='center'>
      {idx}
    </Text>
  );
};

export default ProductNumber;
