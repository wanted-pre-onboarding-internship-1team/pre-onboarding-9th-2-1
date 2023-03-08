import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ShowProductDetail = props => {
  const { productData, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Card>
            <CardHeader>
              <Heading size='md'>
                {productData.idx}
                &#46; &#91;{productData.spaceCategory}
                &#93;{productData.name}
              </Heading>
            </CardHeader>
          </Card>
        </ModalHeader>

        <ModalBody>
          <Card>
            <CardBody>
              <Image
                src={productData.mainImage}
                alt='mainImage'
                borderRadius='lg'
                margin='0 auto'
              />
              <Stack mt='6' spacing='3'>
                <Text fontSize='xl'>{productData.description}</Text>
                <Text color='blue.600' fontSize='lg'>
                  ₩ {productData.price.toLocaleString('ko-KR')}
                </Text>
                <Text fontSize='xs'>
                  최대 구매 가능 : {productData.maximumPurchases}
                </Text>
                <Text fontSize='xs'>{productData.registrationDate}</Text>
              </Stack>
            </CardBody>
          </Card>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShowProductDetail;
