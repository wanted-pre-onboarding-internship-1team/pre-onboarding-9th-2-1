import { useFilterActionContext } from '../../contexts/FilterProductContext';
import FilterBox from './FilterBox';
import FilterEventButton from './FilterEventButton';
import {
  Icon,
  useBoolean,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Box,
  PopoverFooter,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md';

function renderFilterIcon(flag) {
  if (!flag) {
    return <Icon boxSize={6} as={MdFilterAlt} cursor='pointer' />;
  }
  return <Icon boxSize={6} as={MdFilterAltOff} cursor='pointer' />;
}

function Filter() {
  const { spaceFilter, resetFilterProduct } = useFilterActionContext();
  const [flag, setFlag] = useBoolean();
  const [selectedSpace, setSelectedSpace] = useState([]);
  const submitFilter = useCallback(() => {
    spaceFilter(selectedSpace);
  }, [selectedSpace, spaceFilter]);

  const resetHandler = useCallback(() => {
    resetFilterProduct();
    setSelectedSpace([]);
  }, [resetFilterProduct]);
  return (
    <Box position='relative' float='right'>
      <Popover position='relative'>
        {({ onClose }) => (
          <>
            <PopoverTrigger>{renderFilterIcon(flag)}</PopoverTrigger>
            <PopoverContent w='100%' mt='10'>
              <PopoverBody>
                <FilterBox
                  selectedSpace={selectedSpace}
                  setSelectedSpace={setSelectedSpace}
                />
              </PopoverBody>
              <PopoverFooter>
                <FilterEventButton
                  onSubmit={submitFilter}
                  onClose={onClose}
                  setFlag={setFlag}
                  onReset={resetHandler}
                />
              </PopoverFooter>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Box>
  );
  //   if (!flag) {
  //     return (
  //       <Icon
  //         boxSize={6}
  //         as={MdFilterAlt}
  //         cursor='pointer'
  //         onClick={setFlag.on}
  //       />
  //     );
  //   }
  //   return (
  //     <React.Fragment>
  //       <Icon
  //         boxSize={6}
  //         as={MdFilterAltOff}
  //         cursor='pointer'
  //         onClick={setFlag.off}
  //       />
  //       <FilterBox />
  //     </React.Fragment>
  //   );
}

export default Filter;
