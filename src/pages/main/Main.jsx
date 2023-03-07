import Product from '../../components/Product';
import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function Main() {
  const [productList, setProductList] = useState([]);
  let reservationList = [];

  const handleReservation = reservationId => {
    alert('예약완료🎉');
    reservationList = [
      ...reservationList,
      productList.find(({ idx }) => idx === reservationId),
    ].sort((a, b) => {
      if (a.idx > b.idx) {
        return 1;
      }
      if (a.idx < b.idx) {
        return -1;
      }
      return 0;
    });
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
