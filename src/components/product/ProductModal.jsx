import Modal from '../common/Modal';
import { Center, Image, Text, Flex, Button } from '@chakra-ui/react';
import React from 'react';

function ProductModal({
  onClose,
  idx,
  name,
  mainImage,
  description,
  spaceCategory,
  price,
  maximumPurchases,
  registrationDate,
}) {
  return (
    <Modal onClose={onClose}>
      <Flex direction='column' padding='4'>
        <Text
          fontSize='sm'
          as='b'
          textAlign='right'>{`상품 등록일: ${registrationDate}`}</Text>
        <Image
          src={mainImage}
          alt={name}
          height='200px'
          objectFit='fill'
          minWidth='300px'
        />
        <Center flexDirection='column'>
          <Flex direction='row' alignItems='center'>
            <Text fontSize='xl' as='b'>
              {`${idx}. ${name}`}
            </Text>
            <Text marginLeft='3' fontSize='xs'>
              {spaceCategory}
            </Text>
          </Flex>

          <Text>{description}</Text>
          <Text>{`${price.toLocaleString()} 원`}</Text>
          <Text>{`최대 상품 개수 : ${maximumPurchases}`}</Text>
        </Center>
        <Button colorScheme='red' onClick={onClose}>
          닫기
        </Button>
      </Flex>
    </Modal>
  );
}

export default ProductModal;
