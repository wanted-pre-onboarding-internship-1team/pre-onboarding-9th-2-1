import ProductModal from './ProductModal';
import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Center,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Products({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = product => {
    setModalData(product);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Center>
        <SimpleGrid columns={[1, null, 3, null, 4]} spacing='40px'>
          {products.map(function (product, i) {
            return (
              <Card maxW='sm' key={product.name + i}>
                <CardBody
                  onClick={() => {
                    handleOpenModal(product);
                  }}>
                  <Center>
                    <Image
                      src={product.mainImage}
                      alt={product.name}
                      borderRadius='lg'
                    />
                  </Center>
                  <Stack mt='6' px='6' spacing='3'>
                    <Box>
                      <Badge borderRadius='full' px='2' colorScheme='twitter'>
                        상품번호: {product.idx}
                      </Badge>
                    </Box>
                    <Box>
                      <Heading size='md'>{product.name}</Heading>
                      <Text color='gray'> #{product.spaceCategory}</Text>
                      <Text color='twitter.400' fontSize='2xl'>
                        {product.price.toLocaleString('ko-KR')}원
                      </Text>
                    </Box>
                    <Button variant='solid' colorScheme='twitter'>
                      예약
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Center>
      {modalData && (
        <ProductModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          modalData={modalData}
        />
      )}
    </>
  );
}
