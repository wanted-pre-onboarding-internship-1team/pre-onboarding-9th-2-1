import { Button } from '@chakra-ui/button';
import { Center, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductBlank = () => {
  const navigate = useNavigate();

  return (
    <Center flexDirection='column' gap='16px' height={700}>
      <Heading size='lg'>예약된 상품이 없습니다.</Heading>
      <br />
      <Button colorScheme='linkedin' onClick={() => navigate('/')}>
        상품 보러가기
      </Button>
    </Center>
  );
};

export default ProductBlank;
