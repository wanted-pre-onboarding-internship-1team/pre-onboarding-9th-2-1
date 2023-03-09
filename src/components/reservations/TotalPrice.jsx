import { useProductValueContext } from '../../contexts/ProductContext';
import { Box, Text } from '@chakra-ui/react';

const TotalPrice = () => {
  const addedList = useProductValueContext();

  return (
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
  );
};

export default TotalPrice;
