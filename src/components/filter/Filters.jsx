import CheckFilter from './CheckFilter';
import RangeFilter from './RangeFilter';
import { Button } from '@chakra-ui/button';
import { Box, VStack, Divider } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

const ProductFilters = ({ filter, setFilter }) => {
  const [checkValue, setCheckValue] = useState(filter.check);
  const [rangeValue, setRangeValue] = useState(filter.range);
  const btnOpenRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onClickHandler = () => {
    if (!checkValue.length && !Object.keys(rangeValue).length) {
      toast({
        title: `필터가 적용되지 않았습니다.`,
        status: 'info',
        variant: 'subtle',
        isClosable: true,
      });
    }

    const filter = { check: checkValue, range: rangeValue };
    localStorage.setItem('productFilter', JSON.stringify(filter));
    setFilter(filter);
    onClose();
  };

  return (
    <>
      <Button
        ref={btnOpenRef}
        colorScheme='linkedin'
        onClick={onOpen}
        mx='5'
        my='2'>
        상세 검색
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnOpenRef}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>상세 검색</DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<Divider borderColor='gray.200' />}
              spacing={4}
              align='stretch'>
              <Box mt='2'>
                <CheckFilter
                  checkValue={checkValue}
                  setCheckValue={setCheckValue}
                />
              </Box>

              <Box mt='6'>
                <RangeFilter
                  rangeValue={rangeValue}
                  setRangeValue={setRangeValue}
                />
              </Box>
            </VStack>

            <Button
              onClick={onClickHandler}
              colorScheme='linkedin'
              mt='6'
              w='100%'>
              조회하기
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProductFilters;
