import LazyImage from '../common/LazyImage';
import { useReservationContext } from '../reservation/ReservationContext';
import ProductModal from './ProductModal';
import {
  ListItem,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

function ProductItem(props) {
  const { addReservation } = useReservationContext();
  const [isShownModal, setIsShownModal] = useState(false);
  const itemClickHandler = useCallback(() => {
    setIsShownModal(true);
  }, []);

  const btnClickHandler = useCallback(
    e => {
      addReservation(props);
      e.stopPropagation();
    },
    [addReservation, props]
  );
  return (
    <ListItem marginBottom='13px'>
      {isShownModal && (
        <ProductModal onClose={() => setIsShownModal(false)} {...props} />
      )}
      <Card
        onClick={itemClickHandler}
        _hover={{
          background: 'gray.50',
          cursor: 'pointer',
        }}
        direction='row'
        overflow='hidden'
        border='1px solid'
        borderColor='gray.300'>
        <LazyImage src={props?.mainImage} alt={props?.name} width='200px' />
        <Stack>
          <CardBody>
            <Heading size='lg'>{`${props?.idx} ${props?.name}`}</Heading>
            <Text fontSize='xl'>{props?.spaceCategory}</Text>
          </CardBody>
          <CardFooter flexDirection='column'>
            <Text as='b'>{`${props?.price.toLocaleString()} 원`}</Text>
            <Button colorScheme='green' maxW='5rem' onClick={btnClickHandler}>
              예약
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </ListItem>
  );
}

export default ProductItem;
