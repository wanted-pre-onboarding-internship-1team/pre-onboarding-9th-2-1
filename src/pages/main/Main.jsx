import Product from '../../components/Product';
import { Box } from '@chakra-ui/react';
import axios from 'axios';
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
    axios
      .get('/data/mock_data.json')
      .then(response => {
        setProductList(response.data);
      })
      .catch(error => {
        console.log(error);
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
