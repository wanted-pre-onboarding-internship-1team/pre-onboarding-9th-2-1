import useProductList from './useProductList';
import { useState } from 'react';

const InitializeMin = 0;
const InitializeMax = 50000;
export default function useFilterProduct() {
  const PRODUCT_LIST = useProductList();
  const [filteredList, setFilteredList] = useState([]);
  const [slideValue, setSlideValue] = useState([InitializeMin, InitializeMax]);
  const [area, setArea] = useState('');
  return {};
}
