import useProductList from '../hooks/useProductList';
import React from 'react';

export default function Mainpage() {
  const [productList] = useProductList();

  return (
    <ul>
      {productList?.map(product => (
        <li>{product.name}</li>
      ))}
    </ul>
  );
}
