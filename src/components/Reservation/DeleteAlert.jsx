import { useProductActionContext } from '../../contexts/ProductContext';
import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialog,
  AlertDialogOverlay,
} from '@chakra-ui/modal';
import { useRef } from 'react';
import { BsTrash } from 'react-icons/bs';

export default function DeleteAlert({ reservationItem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { deleteProduct } = useProductActionContext();

  const onClickHandler = () => {
    deleteProduct(reservationItem);
    window.location.reload();
  };

  return (
    <>
      <IconButton
        aria-label='minusBtn'
        onClick={onOpen}
        icon={<BsTrash />}
        position='absolute'
        top={5}
        right={6}
        minW={10}
        colorScheme='red'
        textAlign='center'
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              예약 상품 삭제
            </AlertDialogHeader>

            <AlertDialogBody>
              상품을 장바구니에서 삭제하시겠습니까?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                취소
              </Button>
              <Button
                colorScheme='red'
                onClick={() => {
                  onClickHandler();
                  onClose();
                }}
                ml={3}>
                삭제
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
