import { useProductValueContext } from '../../contexts/ProductContext';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';

const ProductList = () => {
  const addedList = useProductValueContext();

  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {addedList?.map(reserved => {
        return <ProductItem product={reserved} key={reserved.idx} />;
      })}
    </VStack>
  );
};

export default ProductList;
