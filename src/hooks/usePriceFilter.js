import {
  useFilterContext,
  useSelectedFilterContext,
} from '../contexts/FilterContext';
import { useState } from 'react';

const usePriceFilter = () => {
  const { priceFilter } = useFilterContext();
  const { selectPriceFilter } = useSelectedFilterContext();
  const [minPrice, setMinPrice] = useState(priceFilter.minPrice);
  const [maxPrice, setMaxPrice] = useState(priceFilter.maxPrice);
  const handleMinChange = event => setMinPrice(event.target.value);
  const handleMaxChange = event => setMaxPrice(event.target.value);

  const handleSetPrice = () => {
    if (minPrice < priceFilter.minPrice || maxPrice > priceFilter.maxPrice) {
      alert(
        `${priceFilter.minPrice?.toLocaleString()} ~ ${priceFilter.maxPrice?.toLocaleString()} 사이의 값만 입력 가능합니다.`
      );
      return;
    }
    selectPriceFilter({ minPrice, maxPrice });
  };

  const minPricePlaceHolrder = priceFilter.minPrice?.toLocaleString();
  const maxPricePlaceHolrder = priceFilter.maxPrice?.toLocaleString();
  return {
    minPricePlaceHolrder,
    maxPricePlaceHolrder,
    handleMinChange,
    handleMaxChange,
    handleSetPrice,
  };
};

export default usePriceFilter;
