import { useProductActionContext } from './../../contexts/ProductContext';
import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Tr,
  IconButton,
  Text,
  AspectRatio,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const ProductDetail = ({ isOpen, onClose, product }) => {
  const {
    idx,
    name,
    mainImage,
    price,
    maximumPurchases,
    description,
    registrationDate,
    count,
  } = product;
  const { addProduct } = useProductActionContext();
  const toast = useToast();

  const onClickHandler = () => {
    addProduct(product);
    if (!count || count < maximumPurchases) {
      toast({
        title: '상품이 장바구니에 추가되었습니다!',
        duration: 2000,
        colorScheme: 'linkedin',
        isClosable: true,
      });
    } else {
      toast({
        title: '장바구니 담기 실패!',
        description: '최대 구매 가능 횟수를 초과하였습니다. ',
        status: 'error',
        duration: 2000,
        colorScheme: 'linkedin',

        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent overflow='hidden'>
        <ModalCloseButton
          backgroundColor='white'
          borderRadius='full'
          zIndex={10}
        />

        <AspectRatio w='100%' ratio={1}>
          <Image src={mainImage} objectFit='cover' width='100%' />
        </AspectRatio>

        <ModalHeader>{name}</ModalHeader>

        <ModalBody>
          <TableContainer>
            <Table size='sm' whiteSpace='normal' wordBreak='keep-all'>
              <Tbody>
                <Tr>
                  <Th>상품 번호</Th>
                  <Td isNumeric>{idx}</Td>
                </Tr>
                <Tr>
                  <Th>가격</Th>
                  <Td isNumeric>{price.toLocaleString()}</Td>
                </Tr>
                <Tr>
                  <Th whiteSpace='nowrap'>최대 구매 가능 개수</Th>
                  <Td isNumeric>{maximumPurchases.toLocaleString()}</Td>
                </Tr>
                <Tr>
                  <Th>설명</Th>
                  <Td isNumeric>{description}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>

        <ModalFooter justifyContent='space-between'>
          <Text color='blackAlpha.600' fontSize='sm'>
            {registrationDate}
          </Text>
          <IconButton
            onClick={onClickHandler}
            aria-label='장바구니에 넣기'
            icon={<RiShoppingBag2Fill />}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetail;
