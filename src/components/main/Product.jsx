import { useReservedListContext } from '../../contexts/ReservedListContext';
import useTriggerRerender from '../../hooks/useTriggerRerender';

export const Product = ({ product }) => {
  const { reserveList, addReserve, deleteReserve } = useReservedListContext();

  //예약상태(체크박스, 예약버튼) 리렌더링에 이용
  //   const [toggle, setToggle] = useState(false);
  //   const triggerRerender = () => {
  //     setToggle(!toggle);
  //   };

  const triggerRerender = useTriggerRerender();
  // 장바구니는 작은 카드 크기의 리스트 scroll 형식으로 ?? (우측 nav bar)
  // c.f. 여기에도 todolist best practice 처럼 필터 기능 넣으면 어떨까 ㅎㅎㅎ

  return (
    <li>
      <div>
        <input
          type='checkbox'
          checked={reserveList?.has(product.idx)}
          readOnly
        />
        <span>{product.idx}</span>
        <img src={product.mainImage} alt={product.name} />
        <span>{product.name}</span>
        <span>{product.price} 원</span>
        <span>{product.spaceCategory}</span>
      </div>
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
    </li>
  );
};
