import ShowProduct from '../components/ShowProduct';
import { fetchProductList } from '../store/productSlice';
import { Box, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Mainpage() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/data/mock_data.json').then(response => {
      if (response.data) {
        dispatch(fetchProductList(response.data));
      }
    });
  }, []);
  const productList = useSelector(state => state.product.productList);

  // const [productList, setProductList] = useState([]);

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
