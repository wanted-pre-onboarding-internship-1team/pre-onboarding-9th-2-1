import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export default function TravelProductItem(data) {
  const { idx, name, spaceCategory, price, mainImage } = data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectItem } = useTravelProductContext();
  return (
    <Box
      w='100%'
      h='100%'
      p='0.8rem'
      borderRadius='0.8rem'
      boxShadow='xl'
      cursor='pointer'
      onClick={() => {
        onOpen();
        selectItem({ data, isOpen, onClose });
      }}>
      <Image borderRadius='0.8rem' height='60%' width='100%' src={mainImage} />
      <Stack mt='3' spacing='3'>
        <Heading
          size='md'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'>{`${idx}. ${name}`}</Heading>
        <HStack fontSize='1.2rem'>
          <Text width='50%'>{price}</Text>
          <Text width='50%'>{spaceCategory}</Text>
        </HStack>
        <Button colorScheme='teal' size='lg'>
          예약하기
        </Button>
      </Stack>
    </Box>
  );
}
