import {
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const ShowProduct = ({ productData }) => {
  return (
    <Flex align='center' flex='0 1 33%' padding='5px'>
      <Card maxW='sm'>
        <CardHeader>
          <Heading size='md'>
            {productData.idx}
            &#46; &#91;{productData.spaceCategory}
            &#93;{productData.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Image
            src={productData.mainImage}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Text>{productData.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              {productData.price.toLocaleString('ko-KR')}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              예약하기
            </Button>
            <Button variant='solid' colorScheme='green'>
              자세히 보기
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default ShowProduct;
