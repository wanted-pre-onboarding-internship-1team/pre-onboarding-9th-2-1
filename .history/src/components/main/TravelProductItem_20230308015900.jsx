export default function TravelProductItem(data) {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = data;

  return (
    <Box w='100%' h='100%' p='0.8rem' borderRadius='0.8rem' boxShadow='xl'>
      <Image
        borderRadius='0.8rem'
        height='60%'
        width='100%'
        src='https://picsum.photos/id/18/300/300'
      />
      <Stack mt='3' spacing='3'>
        <Heading size='md'>1. Living room Sofa</Heading>
        <HStack fontSize='1.2rem'>
          <Text width='50%'>123</Text>
          <Text width='50%'>123</Text>
        </HStack>
        <Button colorScheme='teal' size='lg'>
          Button
        </Button>
      </Stack>
    </Box>
  );
}
