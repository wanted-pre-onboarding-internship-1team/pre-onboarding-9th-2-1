import { getProduct } from '../apis/api';
import { useFilter } from './useFilter';
import { useEffect, useRef } from 'react';

const useProductList = filter => {
  const productList = useRef([]);
  const [filtered, { multiFilter }] = useFilter(filter);

  const applyFilter = productList => {
    multiFilter(productList);
  };

  useEffect(() => {
    getProduct()
      .then(({ data }) => (productList.current = data))
      .then(productList => applyFilter(productList, filter));
  }, []);

  useEffect(() => {
    if (!productList.current.length) return;

    applyFilter(productList.current, filter);
  }, [filter]);

  return filtered;
};

export default useProductList;
