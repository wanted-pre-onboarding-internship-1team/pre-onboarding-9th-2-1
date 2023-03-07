import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function DetailProductItem() {
  const { selectedItem } = useTravelProductContext();
  if (!selectedItem) <></>;
  return (
    <Box
      w='100%'
      h='100%'
      p='0.8rem'
      borderRadius='0.8rem'
      boxShadow='xl'
      cursor='pointer'
      onClick={() => console.log(123)}>
      <Image
        borderRadius='0.8rem'
        height='60%'
        width='100%'
        src={selectedItem.mainImage}
      />
      <Stack mt='3' spacing='3'>
        <Heading
          size='md'
          overflow='hidden'
          textOverflow='ellipsis'
          whiteSpace='nowrap'>{`${selectedItem.idx}. ${selectedItem.name}`}</Heading>
        <HStack fontSize='1.2rem'>
          <Text width='50%'>{selectedItem.price}</Text>
          <Text width='50%'>{selectedItem.spaceCategory}</Text>
        </HStack>
        <Button colorScheme='teal' size='lg'>
          예약하기
        </Button>
      </Stack>
    </Box>
  );
}
