import { useProductValueContext } from '../../contexts/ProductContext';
import ProductItem from './ProductItem';
import { VStack } from '@chakra-ui/react';

const ProductList = () => {
  const addedList = useProductValueContext();

  return (
    <VStack align='stretch' px={5}>
      {addedList?.map(reserved => {
        return <ProductItem product={reserved} key={reserved.idx} />;
      })}
    </VStack>
  );
};

export default ProductList;
