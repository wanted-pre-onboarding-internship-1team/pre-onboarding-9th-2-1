import { useReservedListContext } from '../../contexts/ReservedListContext';
import useTriggerRerender from '../../hooks/useTriggerRerender';
import { Button } from '@chakra-ui/react';

const ReserveButton = ({ product }) => {
  const { reserveList, addReserve, deleteReserve } = useReservedListContext();
  const triggerRerender = useTriggerRerender();

  return (
    <Button
      colorScheme='blue'
      mr={3}
      width='90%'
      onClick={() => {
        if (reserveList?.has(product.idx)) {
          deleteReserve(product.idx);
          triggerRerender();
          return;
        }
        addReserve(product.idx);
        triggerRerender();
      }}>
      {reserveList?.has(product.idx) ? '예약취소' : '예약하기'}
    </Button>
  );
};

export default ReserveButton;
