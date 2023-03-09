import LazyImage from '../components/common/LazyImage';
import {
  useProductActionContext,
  useProductValueContext,
} from '../contexts/ProductContext';
import {
  Divider,
  Card,
  AspectRatio,
  Stack,
  CardBody,
  Text,
  Tag,
  CardFooter,
  IconButton,
  Container,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Box,
} from '@chakra-ui/react';
import { RiDeleteBinFill } from 'react-icons/ri';

export default function Reservations() {
  const addedList = useProductValueContext();
  const { deleteProduct, updateCount } = useProductActionContext();

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <VStack
        divider={<Divider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        p={5}>
        {addedList?.map(reserved => {
          const {
            idx,
            name,
            mainImage,
            price,
            spaceCategory,
            count,
            maximumPurchases,
          } = reserved;
          return (
            <Card
              key={idx}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              cursor='pointer'>
              <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
                <LazyImage src={mainImage} alt={name} width='100%' />
              </AspectRatio>
              <Stack flex='1'>
                <CardBody position='relative'>
                  <Text
                    decoration='underline'
                    position='absolute'
                    top={5}
                    right={6}
                    minW={10}
                    textAlign='center'>
                    {idx}
                  </Text>
                  <IconButton
                    w={5}
                    position='absolute'
                    top={10}
                    right={6}
                    minW={10}
                    onClick={() => {
                      deleteProduct(reserved);
                    }}
                    aria-label='삭제하기'
                    icon={<RiDeleteBinFill />}
                  />
                  <Text fontSize='md' noOfLines={1} pr={10}>
                    {name}
                  </Text>
                  <Text fontWeight='bold' fontSize='md' py='2'>
                    {price.toLocaleString()}원
                  </Text>
                  <Tag>{spaceCategory}</Tag>
                </CardBody>
                <NumberInput
                  onChange={count => {
                    updateCount(reserved, count);
                  }}
                  defaultValue={count}
                  min={0}
                  max={maximumPurchases}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Card>
          );
        })}
      </VStack>
      <Box align='stretch'>
        총 구매 가격 :{' '}
        <Text>
          {addedList
            ?.reduce((prev, currProduct) => {
              console.log('product');
              console.log(currProduct.count * currProduct.price + prev);
              return currProduct.count * currProduct.price + prev;
            }, 0)
            .toLocaleString()}{' '}
          원
        </Text>
      </Box>
    </Container>
  );
}
