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
  return <Icon boxSize={6} as={MdFilterAltOff} color='red' cursor='pointer' />;
}

function Filter() {
  const {
    spaceFilterProduct,
    resetFilterProduct,
    priceFilterProduct,
    allFilterProduct,
  } = useFilterActionContext();
  const [flag, setFlag] = useBoolean();
  const [selectedSpace, setSelectedSpace] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);

  const submitFilter = useCallback(() => {
    if (selectedSpace.length === 0 && priceFilter.length !== 0)
      priceFilterProduct(priceFilter);
    else if (selectedSpace.length !== 0 && priceFilter.length === 0)
      spaceFilterProduct(selectedSpace);
    else if (selectedSpace.length !== 0 && priceFilter.length !== 0) {
      allFilterProduct({ selectedSpace, priceFilter });
    }
    if (selectedSpace.length === 0 && priceFilter.length === 0) {
      resetFilterProduct();
      setFlag.off();
    } else setFlag.on();
  }, [
    allFilterProduct,
    priceFilter,
    priceFilterProduct,
    resetFilterProduct,
    selectedSpace,
    setFlag,
    spaceFilterProduct,
  ]);

  const resetHandler = useCallback(() => {
    resetFilterProduct();
    setSelectedSpace([]);
    setPriceFilter([]);
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
                  priceFilter={priceFilter}
                  setPriceFilter={setPriceFilter}
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
