import useProductList from './useProductList';
import { useState } from 'react';

const InitializeMin = 0;
const InitializeMax = 50000;
export default function useFilterProduct() {
  const PRODUCT_LIST = useProductList();
  const [filteredList, setFilteredList] = useState([]);
  const [slideValue, setSlideValue] = useState([InitializeMin, InitializeMax]);
  const [area, setArea] = useState('');

  const onSlideChange = val => {
    setSlideValue(val);
  };

  const onInputChange = e => {
    setArea(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return {
    filteredList,
    slideValue,
    area,
    onSlideChange,
    onInputChange,
    onSubmit,
  };
}
