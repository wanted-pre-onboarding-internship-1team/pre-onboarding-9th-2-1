import { useState } from 'react';

const useFilter = () => {
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: Number.POSITIVE_INFINITY,
  });
  const [spaceCategoryFilter, setSpaceCategoryFilter] = useState([]);

  const initFilter = productList => {
    const minPrice = productList.reduce((min, curr) => {
      return min > curr.price ? curr.price : min;
    }, Number.POSITIVE_INFINITY);
    const maxPrice = productList.reduce((max, curr) => {
      return max > curr.price ? max : curr.price;
    }, 0);
    const spaceCategorySet = productList.reduce((spaces, curr) => {
      return spaces.add(curr.spaceCategory);
    }, new Set());
    setPriceFilter({ minPrice, maxPrice });
    setSpaceCategoryFilter([...spaceCategorySet]);
  };
  return { priceFilter, spaceCategoryFilter, initFilter };
};

export default useFilter;
