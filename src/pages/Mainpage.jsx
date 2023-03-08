import ShowProduct from '../components/ShowProduct';
import { Box, Button } from '@chakra-ui/react';
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
    <Box margin='50px auto' width='900px'>
      <Button>Filter</Button>
      <Box display='flex' flexWrap='wrap'>
        {productList.map(item => {
          return <ShowProduct productData={item} key={item.idx} />;
        })}
      </Box>
    </Box>
  );
}
