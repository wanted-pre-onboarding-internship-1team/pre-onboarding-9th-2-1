import { PRODUCT_LIST_URL } from '../const/url';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get(PRODUCT_LIST_URL).then(data => {
      if (data?.data?.length > 0) {
        setProductList(data.data);
      }
    });
  }, []);
  return [productList];
};

export default useProductList;
