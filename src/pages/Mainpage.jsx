import ShowFilter from '../components/ShowFilter';
import ShowProduct from '../components/ShowProduct';
import { fetchProductList } from '../store/productSlice';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Mainpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/data/mock_data.json').then(response => {
      if (response.data) {
        dispatch(fetchProductList(response.data));
      }
    });
  }, []);

  const productListToShow = useSelector(
    state => state.product.productListToShow
  );

  return (
    <Box margin='50px auto' width='900px'>
      <Button onClick={onOpen}>Filter</Button>
      <Button float='right'>
        <NavLink to='/reservations'>장바구니</NavLink>
      </Button>

      <ShowFilter isOpen={isOpen} onClose={onClose} />
      <Box display='flex' flexWrap='wrap'>
        {productListToShow.map(item => {
          return <ShowProduct productData={item} key={item.idx} />;
        })}
      </Box>
    </Box>
  );
}
