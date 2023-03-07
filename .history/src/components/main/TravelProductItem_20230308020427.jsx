import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

export default function TravelProductItem(data) {
  const { idx, name, spaceCategory, price, mainImage } = data;

  return (
    <Box w='100%' h='100%' p='0.8rem' borderRadius='0.8rem' boxShadow='xl'>
      <Image
        borderRadius='0.8rem'
        height='60%'
        width='100%'
        src='https://picsum.photos/id/18/300/300'
      />
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
