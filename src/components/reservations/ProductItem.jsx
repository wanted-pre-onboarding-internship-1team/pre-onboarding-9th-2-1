import { useProductActionContext } from '../../contexts/ProductContext';
import LazyImage from '../common/LazyImage';
import {
  Card,
  AspectRatio,
  Stack,
  CardBody,
  Text,
  Tag,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { RiDeleteBinFill } from 'react-icons/ri';

const ProductItem = ({ product }) => {
  const { deleteProduct, updateCount } = useProductActionContext();

  const {
    idx,
    name,
    mainImage,
    price,
    spaceCategory,
    count,
    maximumPurchases,
  } = product;
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
              deleteProduct(product);
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
            updateCount(product, count);
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
};

export default ProductItem;
