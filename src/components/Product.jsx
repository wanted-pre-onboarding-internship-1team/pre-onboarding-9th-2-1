import ProductModal from './ProductModal';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

export default function Product({ product, handleReservation }) {
  const { idx, name, mainImage, price, spaceCategory } = product;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        width='sm'
        maxW='md'
        display='inline-block'
        margin='30px'
        borderWidth='40px'>
        <CardBody onClick={onOpen}>
          <Image
            src={mainImage}
            alt='상품이미지'
            borderRadius='lg'
            width='sm'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>
              {idx}. {name}
            </Heading>
            <Text>{spaceCategory}</Text>
            <Text color='blue.600' fontSize='2xl'>
              ₩ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button
              variant='solid'
              colorScheme='blue'
              onClick={() => {
                handleReservation(idx);
              }}>
              예약
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <ProductModal product={product} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
