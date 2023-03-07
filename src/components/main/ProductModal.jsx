import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Center,
  Image,
  Box,
  Badge,
  Text,
  Spacer,
} from '@chakra-ui/react';

export default function ProductModal({ isOpen, modalData, closeModal }) {
  return (
    <Modal onClose={closeModal} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mt='6' px='6' spacing='3'>
        <Center>
          <Image src={modalData.mainImage} alt={modalData.name} mt='6' mb='6' />
        </Center>
        <Box display='flex' alignItems='baseline' mx='6'>
          <Badge borderRadius='full' px='2' colorScheme='twitter'>
            상품번호: {modalData.idx}
          </Badge>
          <Spacer />
          <Text color='gray'> {modalData.registrationDate}</Text>
        </Box>

        <ModalHeader pb='0'>{modalData.name}</ModalHeader>
        <Text color='gray' px='6'>
          {' '}
          #{modalData.spaceCategory}
        </Text>
        <ModalCloseButton />
        <ModalBody>
          {modalData.description}{' '}
          <Text color='twitter.400' fontSize='2xl' mt='3'>
            {modalData.price}원
          </Text>
          <Text> (1인 최대 구매수량: {modalData.maximumPurchases}매) </Text>
        </ModalBody>
        <ModalFooter>
          <Button variant='outline' colorScheme='twitter' onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
