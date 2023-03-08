import { getProduct } from '../apis/api';
import { useEffect, useState } from 'react';

export default function useProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct().then(({ data }) => setProductList(data));
  }, []);

  return { productList };
}
