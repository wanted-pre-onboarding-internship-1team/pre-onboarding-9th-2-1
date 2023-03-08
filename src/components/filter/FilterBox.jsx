import PriceFilter from './PriceFilter';
import SpaceFilter from './SpaceFilter';
import React from 'react';

function FilterBox({
  selectedSpace,
  setSelectedSpace,
  priceFilter,
  setPriceFilter,
}) {
  return (
    <>
      <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
      <SpaceFilter
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
      />
    </>
  );
}

export default FilterBox;
