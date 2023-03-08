import {
  Box,
  Button,
  Divider,
  Flex,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Filter() {
  const [filters, setFilters] = useState([
    { id: 0, title: '가격순', isSelected: false },
    { id: 1, title: '공간순', isSelected: false },
  ]);

  const handleButton = e => {
    const { value } = e.target;
    let findIndex = filters.findIndex(({ id }) => id === parseInt(value));
    let prevFilters = [...filters];
    prevFilters[findIndex].isSelected = !filters[findIndex].isSelected;
    setFilters(prevFilters);
  };

  return (
    <>
      <Divider />
      <Flex
        flexDir='row-reverse'
        alignItems='center'
        justifyContent='space-between'
        marginTop={3}
        marginRight='20px'>
        <Box>
          <UnorderedList>
            {filters.map(filter => {
              return (
                <ListItem
                  display='inline-block'
                  marginLeft={1}
                  listStyleType='none'
                  key={filter.id}>
                  <Button
                    p={2}
                    backgroundColor='transparent'
                    fontSize='sm'
                    color={
                      filter.isSelected
                        ? `var(--chakra-colors-blue-400)`
                        : `var(--chakra-colors-black)`
                    }
                    _hover={{
                      backgroundColor: `var(--chakra-colors-gray-100)`,
                    }}
                    value={filter.id}
                    onClick={handleButton}>
                    {filter.title}
                  </Button>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
      </Flex>
    </>
  );
}
