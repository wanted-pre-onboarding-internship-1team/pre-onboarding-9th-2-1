import PriceFilter from './pricefilter/PriceFilter';
import SpaceFilter from './spacefilter/SpaceFilter';
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
