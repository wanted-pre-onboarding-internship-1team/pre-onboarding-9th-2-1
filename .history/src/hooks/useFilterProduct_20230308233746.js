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

    console.log(
      originList.filter(item =>
        filter(item, slideValue[0], slideValue[1], area)
      )
    );
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
  console.log(item.area, area);
  if (!(minVal <= item.price && item.price <= maxVal)) return false;
  //가격 비교 후 area가 빈칸이면 ture
  if (area === '') return true;
  if (area !== item.area) return false;
  return true;
}

console.log('' == false);
