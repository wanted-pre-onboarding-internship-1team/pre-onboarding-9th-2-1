import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Mainpage() {
  useEffect(() => {
    axios.get('/data/mock_data.json').then(response => {
      if (response.data) {
        setProductList(response.data);
      }
    });
  });

  const [prodictList, setProductList] = useState([]);

  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      박스임
    </Box>
  );
}
