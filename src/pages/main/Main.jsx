import Product from '../../components/Product';
import { Box, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function Main() {
  const [productList, setProductList] = useState([]);
  // const reservationList = [];

  const handleReservation = reservationId => {
    // reservationList = [...reservationList, productList.find({idx} => idx === )
  };

  useEffect(() => {
    fetch('/data/mock_data.json')
      .then(response => response.json())
      .then(result => {
        setProductList(result);
      });
  }, []);

  return (
    <Box paddingTop='80px' paddingBottom='100px'>
      <Box marginLeft='60px' marginRight='60px'>
        {productList.map(product => {
          return (
            <Product
              product={product}
              handleReservation={handleReservation}
              key={product.idx}
            />
          );
        })}
      </Box>
    </Box>
  );
}
