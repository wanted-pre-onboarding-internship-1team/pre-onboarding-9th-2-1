import { useReservedListContext } from '../../contexts/ReservedListContext';
import { useState } from 'react';

export const Product = ({ product }) => {
  const { reserveList, addReserve, deleteReserve } = useReservedListContext();

  //예약상태(체크박스, 예약버튼) 리렌더링에 이용
  const [toggle, setToggle] = useState(false);

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
            setToggle(!toggle);
            return;
          }
          addReserve(product.idx);
          setToggle(!toggle);
        }}>
        {reserveList?.has(product.idx) ? '예약취소' : '예약하기'}
      </button>
    </li>
  );
};
