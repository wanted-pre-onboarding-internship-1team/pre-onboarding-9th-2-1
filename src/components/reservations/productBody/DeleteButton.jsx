import { useProductActionContext } from '../../../contexts/ProductContext';
import { IconButton } from '@chakra-ui/react';
import { RiDeleteBinFill } from 'react-icons/ri';

const DeleteButton = ({ product }) => {
  const { deleteProduct } = useProductActionContext();

  return (
    <IconButton
      w={5}
      position='absolute'
      top={10}
      right={6}
      minW={10}
      onClick={() => {
        deleteProduct(product);
      }}
      aria-label='삭제하기'
      icon={<RiDeleteBinFill />}
    />
  );
};

export default DeleteButton;
