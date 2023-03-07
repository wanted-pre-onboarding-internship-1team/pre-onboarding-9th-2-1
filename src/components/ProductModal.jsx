import {
  Box,
  Card,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function ProductModal({ product, isOpen, onClose }) {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = product;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay alignItems='center' />
      <ModalContent maxWidth={600} padding='10px'>
        <ModalHeader paddingBottom={3}>
          {idx}. {name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              alt='모달 이미지'
              src={mainImage}
            />

            <Stack>
              <Box paddingLeft='10px'>
                <Heading size='md' pb='10px'>
                  ₩ {price.toLocaleString()} / {spaceCategory}
                </Heading>
                <Text fontSize='13px'>
                  개인 최대 구매 횟수 : {maximumPurchases}
                </Text>
                <Text fontSize='13px' py={1}>
                  {registrationDate}
                </Text>
                <Text py='2'>{description}</Text>
              </Box>
            </Stack>
          </Card>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
