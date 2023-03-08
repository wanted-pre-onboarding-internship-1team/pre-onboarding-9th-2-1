import useProductList from './useProductList';
import { useEffect, useState } from 'react';

const InitializeMin = 0;
const InitializeMax = 50000;
export default function useFilterProduct() {
  const [originList, setOriginList] = useEffect([]);
  console.log(PRODUCT_LIST);
  const [filteredList, setFilteredList] = useState([...PRODUCT_LIST]);
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
    getProduct().then(({ data }) => setProductList(data));
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
