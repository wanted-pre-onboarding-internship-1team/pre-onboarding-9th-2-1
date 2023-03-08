import { getProduct } from '../apis/api';
import useProductList from './useProductList';
import { useEffect, useState } from 'react';

const InitializeMin = 0;
const InitializeMax = 50000;
export default function useFilterProduct() {
  const [originList, setOriginList] = useState([]);
  const [filteredList, setFilteredList] = useState([...originList]);
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
    setFilteredList([123]);
    console.log('submit');
  };

  useEffect(() => {
    getProduct().then(({ data }) => {
      setOriginList(data);
      setFilteredList(data);
    });
  }, []);

  return {
    filteredList,
    slideValue,
    area,
    onSlideChange,
    onInputChange,
    onSubmit,
  };
}

function filter(item, minVal, maxVal, area) {
  if (!(minVal < item.price && item.price < maxVal)) return false;
}

console.log('' == false);
