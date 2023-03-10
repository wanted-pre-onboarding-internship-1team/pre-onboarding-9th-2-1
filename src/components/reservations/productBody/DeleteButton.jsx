import { useProductActionContext } from '../../../contexts/ProductContext';
import { Button } from '@chakra-ui/button';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsTrash } from 'react-icons/bs';

const DeleteButton = ({ product }) => {
  const { deleteProduct } = useProductActionContext();
  const cancelRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHandler = () => {
    deleteProduct(product);
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
        onClose={onclose}
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
};

export default DeleteButton;
