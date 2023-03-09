import { useProductActionContext } from '../../contexts/ProductContext';
import { CardBody, Text, Tag, IconButton } from '@chakra-ui/react';
import { RiDeleteBinFill } from 'react-icons/ri';

const ProductBody = ({ product }) => {
  const { idx, name, price, spaceCategory } = product;
  const { deleteProduct } = useProductActionContext();

  return (
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
  );
};

export default ProductBody;
