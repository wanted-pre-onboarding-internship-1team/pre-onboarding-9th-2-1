import useProductList from '../hooks/useProductList';
import React from 'react';

export default function Mainpage() {
  const [productList] = useProductList();

  return (
    <ul>
      {productList?.map(product => (
        <li key={product.idx}>
          <div>
            <span>{product.idx}</span>
            <img src={product.mainImage} alt={product.name} />
            <span>{product.name}</span>
            <span>{product.price} 원</span>
            <span>{product.spaceCategory}</span>
          </div>
          <button>예약하기</button>
        </li>
      ))}
    </ul>
  );
}
