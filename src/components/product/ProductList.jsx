import { getProduct } from './../../apis/api';
import { useFilter } from './../../hooks/useFilter';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

const ProductList = ({ filter }) => {
  const productList = useRef([]);
  const [filtered, { multiFilter }] = useFilter(filter);
  const [showAlert, setShowAlert] = useState(false);

  const applyFilter = productList => {
    multiFilter(productList);
  };

  useEffect(() => {
    getProduct()
      .then(({ data }) => (productList.current = data))
      .then(productList => applyFilter(productList, filter));
  }, []);

  useEffect(() => {
    if (!productList.current.length) return;

    applyFilter(productList.current, filter);
  }, [filter]);

  return (
    <>
      {showAlert && (
        <Alert status='error'>
          <Box display='flex'>
            <AlertIcon />
            <Box>
              <AlertTitle>Your browser is outdated!</AlertTitle>
              <AlertDescription>
                Your Chakra experience may be degraded.
              </AlertDescription>
            </Box>
          </Box>
        </Alert>
      )}
      <VStack
        divider={<Divider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        p={5}>
        {filtered &&
          filtered.map(product => (
            <ProductItem
              key={product.idx}
              product={product}
              setShowAlert={setShowAlert}
            />
          ))}
      </VStack>
    </>
  );
};

export default ProductList;
