import { useState } from 'react';

const useFilter = () => {
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: Number.POSITIVE_INFINITY,
  });
  const [spaceCategoryFilter, setSpaceCategoryFilter] = useState([]);

  const initFilter = ({ productList }) => {
    //List 에서 unique한 지역명과 최소,최대 가격을 알아오는 로직
    const minPrice = 0;
    const maxPrice = Number.POSITIVE_INFINITY;
    const spaceCategoryList = [];
    setPriceFilter({ minPrice, maxPrice });
    setSpaceCategoryFilter(spaceCategoryList);
  };
  return { priceFilter, spaceCategoryFilter, initFilter };
};

export default useFilter;
