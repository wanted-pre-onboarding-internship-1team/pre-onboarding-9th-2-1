import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useCallback, useEffect, useRef } from 'react';

export default function DetailProductItem() {
  const { selectedItem, selectItem, handleAddProduct } =
    useTravelProductContext();
  const ref = useRef(null);

  const onClose = useCallback(
    e => {
      if (selectedItem === null) return;
      if (
        e.target !== null &&
        e.target !== ref.current &&
        e.target.dataset.type === 'modal'
      ) {
        selectItem(null);
      }
    },
    [ref, selectItem, selectedItem]
  );
  useEffect(() => {
    document.addEventListener('click', onClose);
    return () => {
      document.removeEventListener('click', onClose);
    };
  }, [onClose]);

  if (!selectedItem) return;
  return (
    <Box
      position='fixed'
      zIndex='10000'
      top='0'
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100vw'
      height='100vh'
      bg='rgba(114, 114, 114, 0.508)'
      data-type='modal'>
      <Box
        ref={ref}
        bg='white'
        p='1rem'
        borderRadius='1rem'
        position='relative'>
        <Image
          borderRadius='0.8rem'
          height='500px'
          width='100%'
          src={selectedItem.mainImage}
        />
        <Stack mt='3' spacing='3'>
          <Heading
            size='md'
            overflow='hidden'
            textOverflow='ellipsis'
            whiteSpace='nowrap'>{`${selectedItem.idx}. ${selectedItem.name}`}</Heading>
          <Container height='100%' p='0'>
            {selectedItem.description}
          </Container>
          <HStack fontSize='1.2rem'>
            <Text width='50%'>{selectedItem.price} 원</Text>
            <Text width='50%'>{selectedItem.spaceCategory}</Text>
          </HStack>
          <HStack fontSize='1.2rem'>
            <Text width='50%'>{`최대 구매 갯수: ${selectedItem.maximumPurchases}`}</Text>
            <Text width='50%'>{selectedItem.registrationDate}</Text>
          </HStack>
          <Button colorScheme='teal' size='lg'>
            예약하기
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
