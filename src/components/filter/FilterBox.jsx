import SpaceFilter from './SpaceFilter';
import React from 'react';

function FilterBox({ selectedSpace, setSelectedSpace }) {
  return (
    <SpaceFilter
      selectedSpace={selectedSpace}
      setSelectedSpace={setSelectedSpace}
    />
  );
}

export default FilterBox;
