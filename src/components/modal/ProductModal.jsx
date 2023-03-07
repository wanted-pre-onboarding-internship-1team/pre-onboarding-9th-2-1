import { useModalProductContext } from '../../contexts/ModalProductContext';
import { ModalProduct } from '../main/ModalProduct';
import ReservedCheckBox from '../main/ReservedCheckBox';
import {
  Button,
  Center,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from '@chakra-ui/react';

const ProductModal = () => {
  const { modalProduct, setModalProduct } = useModalProductContext();

  if (!modalProduct) {
    return <></>;
  }

  const onClose = () => {
    setModalProduct(null);
  };

  return (
    <Modal isOpen={!!modalProduct} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>
            <Flex>
              #{modalProduct.idx}
              <Spacer />
              <ReservedCheckBox product={modalProduct} />
            </Flex>
          </ModalHeader>
          <Divider />
          <ModalBody>
            <ModalProduct product={modalProduct} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default ProductModal;
