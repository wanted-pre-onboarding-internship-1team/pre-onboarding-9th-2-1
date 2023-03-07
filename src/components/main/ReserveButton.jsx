import { useReservedListContext } from '../../contexts/ReservedListContext';
import useTriggerRerender from '../../hooks/useTriggerRerender';

const ReserveButton = ({ product }) => {
  const { reserveList, addReserve, deleteReserve } = useReservedListContext();
  const triggerRerender = useTriggerRerender();

  return (
    <button
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
    </button>
  );
};

export default ReserveButton;
