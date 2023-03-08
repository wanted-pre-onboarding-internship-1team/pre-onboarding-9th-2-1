import useProductList from './useProductList';
import { useState } from 'react';

export default function useFilterProduct() {
  const PRODUCT_LIST = useProductList();
  const [filteredList, setFilteredList] = useState([]);

  return <div></div>;
}
