import { Tag, HStack, TagLabel, TagRightIcon } from '@chakra-ui/react';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function PriceFilterList({ priceFilter }) {
  return (
    <HStack>
      {priceFilter?.map((range, index) => (
        <Tag
          key={index}
          size='xs'
          fontSize={12}
          p={2}
          _hover={{
            cursor: 'pointer',
            color: 'red',
            outline: '1px solid red',
          }}>
          <TagLabel>{`${range.min}~${range.max}`}</TagLabel>
          <TagRightIcon as={MdDeleteForever} />
        </Tag>
      ))}
    </HStack>
  );
}

export default PriceFilterList;
