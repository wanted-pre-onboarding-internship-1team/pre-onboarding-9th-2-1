import { HStack, Tag } from '@chakra-ui/react';
import React from 'react';

function SpaceFilter({ selectedSpace, setSelectedSpace }) {
  const uniqueSpace = [
    ...new Set(
      localStorage.getItem('originProductList') &&
        JSON.parse(localStorage.getItem('originProductList')).map(
          product => product.spaceCategory
        )
    ),
  ];

  const handleSpaceClick = spaceCategory => {
    if (selectedSpace.includes(spaceCategory)) {
      setSelectedSpace(prev => prev.filter(space => space !== spaceCategory));
    } else {
      setSelectedSpace(prev => [...prev, spaceCategory]);
    }
  };

  const isSelected = spaceCategory => {
    return selectedSpace.includes(spaceCategory);
  };

  return (
    <HStack>
      {uniqueSpace.map(space => (
        <Tag
          key={space}
          cursor='pointer'
          color={isSelected(space) ? 'red' : 'gray'}
          onClick={() => handleSpaceClick(space)}>
          {space}
        </Tag>
      ))}
    </HStack>
  );
}

export default SpaceFilter;
