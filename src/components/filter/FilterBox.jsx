import PriceFilter from './PriceFilter';
import SpaceFilter from './SpaceFilter';
import React from 'react';

function FilterBox({ selectedSpace, setSelectedSpace }) {
  return (
    <>
      <PriceFilter />
      <SpaceFilter
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
      />
    </>
  );
}

export default FilterBox;
