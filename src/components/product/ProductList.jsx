import useProductList from '../../hooks/useProductList';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';

const ProductList = ({ filter }) => {
  const filteredList = useProductList(filter);
  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {filteredList?.map(product => (
        <ProductItem key={product.idx} product={product} />
      ))}
    </VStack>
  );
};

export default ProductList;
