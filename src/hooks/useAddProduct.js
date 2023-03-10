import {
  useProductActionContext,
  useProductValueContext,
} from '../contexts/ProductContext';
import { useToast } from '@chakra-ui/react';

const useAddProduct = product => {
  const { addProduct } = useProductActionContext();
  const addedList = useProductValueContext();

  const toast = useToast();

  const onClickHandler = e => {
    e.stopPropagation();
    addProduct(product);

    const { idx, maximumPurchases } = product;
    const count = addedList?.find(item => item.idx === idx)?.count ?? 0;

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

  return onClickHandler;
};

export default useAddProduct;
