import { useProductFilterActionContext } from '../../contexts/ProductFilterContext';
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const SPACES = [
  { id: 1, name: '서울' },
  { id: 2, name: '인천' },
  { id: 3, name: '대구' },
  { id: 4, name: '강원' },
  { id: 5, name: '부산' },
  { id: 6, name: '제주' },
  { id: 7, name: '전라' },
];

export default function Space() {
  const [selectSpace, setSelectSpace] = useState([]);
  const { filterBySpace } = useProductFilterActionContext();

  const handleCheckbox = e => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectSpace(prev => [...prev, value]);
    } else {
      setSelectSpace(prev => prev.filter(space => space !== value));
    }
  };

  return (
    <Box mt='30px' mb='30px'>
      <Box mb='10px'>
        <CheckboxGroup colorScheme='gray'>
          <Stack spacing='30px' direction={['column', 'row']}>
            {SPACES.map(space => {
              return (
                <Checkbox
                  isChecked={selectSpace.includes(space.name)}
                  key={space.id}
                  value={space.name}
                  onChange={handleCheckbox}>
                  {space.name}
                </Checkbox>
              );
            })}
          </Stack>
        </CheckboxGroup>
      </Box>
      <Center>
        <Button
          marginTop='10px'
          size='sm'
          onClick={() => filterBySpace(selectSpace)}>
          적용
        </Button>
      </Center>
    </Box>
  );
}
