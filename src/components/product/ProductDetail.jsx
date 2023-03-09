import ProductBtn from './ProductBtn';
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
  Text,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';

const ProductDetail = ({ isOpen, onClose, product }) => {
  const {
    idx,
    name,
    mainImage,
    price,
    maximumPurchases,
    description,
    registrationDate,
  } = product;

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
          <ProductBtn product={product} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetail;
