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

// 금액만 필터링
const isPriceFilter = ({ selectedSpace, priceFilter }) => {
  return selectedSpace.length === 0 && priceFilter.length !== 0;
};

// 공간만 필터링
const isSpaceFilter = ({ selectedSpace, priceFilter }) => {
  return selectedSpace.length !== 0 && priceFilter.length === 0;
};

// 공간과 금액 모두 필터링
const isMultiFilter = ({ selectedSpace, priceFilter }) => {
  return selectedSpace.length !== 0 && priceFilter.length !== 0;
};

// 아무 필터링도 설정하지 않고 적용버튼 눌렀을때
const isNotFilter = ({ selectedSpace, priceFilter }) => {
  return selectedSpace.length === 0 && priceFilter.length === 0;
};

function renderFilterIcon(flag) {
  if (!flag) {
    return (
      <Icon boxSize={6} cursor='pointer'>
        <MdFilterAlt />
      </Icon>
    );
  }
  return (
    <Icon boxSize={6} color='red' cursor='pointer'>
      <MdFilterAltOff />
    </Icon>
  );
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
    if (isPriceFilter({ selectedSpace, priceFilter }))
      priceFilterProduct(priceFilter);
    else if (isSpaceFilter({ selectedSpace, priceFilter }))
      spaceFilterProduct(selectedSpace);
    else if (isMultiFilter({ selectedSpace, priceFilter }))
      allFilterProduct({ selectedSpace, priceFilter });

    if (isNotFilter({ selectedSpace, priceFilter })) {
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
}

export default Filter;
