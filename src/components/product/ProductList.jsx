import ProductItem from './ProductItem';
import { UnorderedList } from '@chakra-ui/react';
import React from 'react';

function ProductList({ products }) {
  return (
    <UnorderedList listStyleType='none'>
      {products.map(product => (
        <ProductItem key={product.idx} {...product} />
      ))}
    </UnorderedList>
  );
}

export default ProductList;
