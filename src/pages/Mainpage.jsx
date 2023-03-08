import ShowProduct from '../components/ShowProduct';
import { Box, Show } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Mainpage() {
  useEffect(() => {
    axios.get('/data/mock_data.json').then(response => {
      console.log(response);
      if (response.data) {
        setProductList(response.data);
      }
    });
  }, []);

  const [productList, setProductList] = useState([]);

  return (
    <Box margin='0 auto' display='flex' flexWrap='wrap' width='900px'>
      {productList.map(item => {
        return <ShowProduct productData={item} key={item.idx} />;
      })}
    </Box>
  );
}
