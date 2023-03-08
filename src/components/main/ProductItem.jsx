import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Center,
  Badge,
} from '@chakra-ui/react';

export default function Products({
  product,
  addReservedItem,
  handleOpenModal,
}) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <div
          onClick={() => {
            handleOpenModal(product);
          }}>
          <Center>
            <Image
              src={product.mainImage}
              alt={product.name}
              borderRadius='lg'
            />
          </Center>
          <Stack mt='6' px='6' spacing='3'>
            <Box>
              <Badge borderRadius='full' px='2' colorScheme='twitter'>
                상품번호: {product.idx}
              </Badge>
            </Box>
            <Box>
              <Heading size='md'>{product.name}</Heading>
              <Text color='gray'> #{product.spaceCategory}</Text>
              <Text color='twitter.400' fontSize='2xl'>
                {product.price.toLocaleString('ko-KR')}원
              </Text>
            </Box>
          </Stack>
        </div>
        <Stack mt='2' px='6' spacing='3'>
          <Button
            variant='solid'
            colorScheme='twitter'
            onClick={() => addReservedItem(product)}>
            예약
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
