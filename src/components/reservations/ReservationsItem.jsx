import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  HStack,
  IconButton,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function ReservationsItem({
  product,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
}) {
  const { name, price, mainImage, currentCount, spaceCategory } = product;
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      cursor='pointer'>
      <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
        <Image src={mainImage} alt={name} width='100%' />
      </AspectRatio>

      <Stack flex='1'>
        <CardBody position='relative'>
          <Text
            position='absolute'
            top={5}
            right={6}
            minW={10}
            textAlign='center'
            onClick={() => deleteProduct(product)}>
            &times;
          </Text>
          <Text fontSize='md' noOfLines={1} pr={10}>
            {name}
          </Text>
          <Text fontWeight='bold' fontSize='md' py='2'>
            {'개당 가격: ' + price.toLocaleString()}원
          </Text>
          <Tag>{spaceCategory}</Tag>
        </CardBody>

        <CardFooter justifyContent='space-between' alignItems='center'>
          <HStack>
            <IconButton
              aria-label='빼기'
              icon={<AiOutlineMinus />}
              onClick={() => decreaseProduct(product)}
            />
            <div>{currentCount}</div>
            <IconButton
              aria-label='더하기'
              icon={<AiOutlinePlus />}
              onClick={() => increaseProduct(product)}
            />
          </HStack>
          <Text fontWeight='bold' fontSize='md'>
            {(currentCount * price).toLocaleString()}원
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  );
}
