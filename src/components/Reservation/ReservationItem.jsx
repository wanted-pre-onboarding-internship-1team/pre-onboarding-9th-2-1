import { useProductActionContext } from '../../contexts/ProductContext';
import { useProduct } from '../../hooks/useProduct';
import LazyImage from './../common/LazyImage';
import DeleteAlert from './DeleteAlert';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  IconButton,
  Tag,
  AspectRatio,
  Button,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function ReservationItem({ reservationItem }) {
  const { name, mainImage, maximumPurchases, price, spaceCategory, count } =
    reservationItem;
  const { increaseCount, decreaseCount } = useProductActionContext();

  // FIX ME
  const handleIncreaseCount = () => {
    increaseCount(reservationItem);
    window.location.reload();
  };

  const handleDecreaseCount = () => {
    decreaseCount(reservationItem);
    window.location.reload();
  };
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      cursor='pointer'>
      <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
        <LazyImage src={mainImage} alt={name} width='100%' />
      </AspectRatio>

      <Stack flex='1'>
        <CardBody position='relative'>
          <DeleteAlert reservationItem={reservationItem} />
          <Text fontSize='md' noOfLines={1} pr={10}>
            {name}
          </Text>
          <Text fontWeight='bold' fontSize='md' py='2'>
            {price.toLocaleString()}원{' '}
          </Text>
          <Tag>{spaceCategory}</Tag>
        </CardBody>

        <CardFooter justifyContent='flex-end'>
          <Text fontSize='sm' py='2'>
            (최대 구매 가능 개수: {maximumPurchases}개)
          </Text>
          <Spacer />
          <IconButton
            onClick={handleDecreaseCount}
            aria-label='minusBtn'
            icon={<AiOutlineMinus />}
          />
          <Button colorScheme='whiteAlpha' color='black' cursor='default'>
            {count}
          </Button>
          {count >= maximumPurchases ? (
            <IconButton
              cursor='no-drop'
              aria-label='plusBtn'
              icon={<AiOutlinePlus />}
            />
          ) : (
            <IconButton
              onClick={handleIncreaseCount}
              colorScheme='linkedin'
              aria-label='plusBtn'
              icon={<AiOutlinePlus />}
            />
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
}
