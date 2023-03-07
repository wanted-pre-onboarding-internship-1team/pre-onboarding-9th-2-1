import useProductList from '../../hooks/useProductList';
import { Product } from './Product';
import { Grid } from '@chakra-ui/react';

const ProductList = () => {
  const [productList] = useProductList();

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={8}>
      {productList?.map(product => (
        <Product product={product} key={product.idx} />
      ))}
    </Grid>
  );
};

export default ProductList;
