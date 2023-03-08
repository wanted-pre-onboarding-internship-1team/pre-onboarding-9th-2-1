import { useFilterValueContext } from '../../contexts/FilterProductContext';
import { HStack, Tag } from '@chakra-ui/react';
import React from 'react';

function SpaceFilter() {
  const uniqueSpace = [
    ...new Set(
      localStorage.getItem('originProductList') &&
        JSON.parse(localStorage.getItem('originProductList')).map(
          product => product.spaceCategory
        )
    ),
  ];
  return (
    <HStack>
      {uniqueSpace.map(space => (
        <Tag key={space} cursor='pointer' color='gray'>
          {space}
        </Tag>
      ))}
    </HStack>
  );
}

export default SpaceFilter;
