import { useState } from 'react';

export default function useReservation() {
  const [reservationList, setReservationList] = useState([]);
	const handleAddProduct = item => {
		if (reservationList.find(i) = i.idx === item.idx) return alert('이미 제품을 담으셨습니다.');
		reservationList.push(item);
	};
  return;
}
