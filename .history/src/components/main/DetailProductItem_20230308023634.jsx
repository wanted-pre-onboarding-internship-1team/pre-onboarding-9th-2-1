import { useTravelProductContext } from '../../context/TravelProductContext';

export default function DetailProductItem() {
  const { selectedItem } = useTravelProductContext();
  return (
    <Box
      w='100%'
      h='100%'
      p='0.8rem'
      borderRadius='0.8rem'
      boxShadow='xl'
      cursor='pointer'
      onClick={() => console.log(123)}>
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
