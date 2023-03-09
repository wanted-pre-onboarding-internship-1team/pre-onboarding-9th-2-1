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
} from '@chakra-ui/react';
import React, { useRef } from 'react';

const ProductFilters = () => {
  const btnOpenRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <CheckFilter />
              </Box>

              <Box mt='6'>
                <RangeFilter />
              </Box>
            </VStack>

            <Button colorScheme='linkedin' mt='6' w='100%'>
              조회하기
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProductFilters;
