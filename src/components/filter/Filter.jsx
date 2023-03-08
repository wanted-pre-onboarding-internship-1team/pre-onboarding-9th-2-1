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
  Button,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md';

function renderFilterIcon(flag) {
  if (!flag) {
    return <Icon boxSize={6} as={MdFilterAlt} cursor='pointer' />;
  }
  return <Icon boxSize={6} as={MdFilterAltOff} cursor='pointer' />;
}

function Filter() {
  const [flag, setFlag] = useBoolean();
  return (
    <Box position='relative' float='right'>
      <Popover position='relative'>
        {({ onClose }) => (
          <>
            <PopoverTrigger>{renderFilterIcon(flag)}</PopoverTrigger>
            <PopoverContent w='100%' mt='10'>
              <PopoverBody>
                <FilterBox />
              </PopoverBody>
              <PopoverFooter>
                <FilterEventButton onClose={onClose} setFlag={setFlag} />
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
