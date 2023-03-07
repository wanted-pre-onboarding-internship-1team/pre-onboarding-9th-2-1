import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useEffect, useRef } from 'react';

export default function DetailProductItem() {
  const { selectedItem, selectItem } = useTravelProductContext();
  const ref = useRef(null);
  console.log(selectedItem);
  const onClose = useCallback(
    e => {
      console.log('444');

      if (selectedItem === null) return;

      console.log(ref.current?.contains(e.target));
      if (
        e.target !== null &&
        e.target !== ref.current &&
        !ref.current?.contains(e.target)
      ) {
        selectItem(null);
        console.log('닫음');
      }
    },
    [ref, selectItem, selectedItem]
  );
  useEffect(() => {
    document.addEventListener('click', onClose);
    return () => {
      console.log('언마운트');
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
      bg='rgba(114, 114, 114, 0.508)'>
      <Box ref={ref} bg='white' p='1rem' borderRadius='1rem'>
        <Button p='0'>X</Button>
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
            <Text width='50%'>{selectedItem.price}</Text>
            <Text width='50%'>{selectedItem.spaceCategory}</Text>
          </HStack>
          <HStack fontSize='1.2rem'>
            <Text width='50%'>{selectedItem.maximumPurchases}</Text>
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
{
  /* <Image
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
          <Text width='50%'>{selectedItem.price}</Text>
          <Text width='50%'>{selectedItem.spaceCategory}</Text>
        </HStack>
        <Button colorScheme='teal' size='lg'>
          예약하기
        </Button>
      </Stack> */
}
