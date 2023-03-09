import { useProductActionContext } from '../../contexts/ProductContext';
import { Icon } from '@chakra-ui/react';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default function AddedItemDeleteIcon({ idx }) {
  const { deleteProduct } = useProductActionContext();
  return (
    <Icon
      as={MdDeleteForever}
      alignSelf='end'
      mt={1}
      mr={3}
      color='red'
      cursor='pointer'
      onClick={() => deleteProduct(idx)}
    />
  );
}
