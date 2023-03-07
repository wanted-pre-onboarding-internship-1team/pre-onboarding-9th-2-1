import getProducts from '../apis/TravelService';
import TravelProduct from './TravelProduct';
import React, { useEffect, useState } from 'react';

const TravelProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);
  return (
    <>
      <div>travelProductList</div>
      <div>
        {products.map(product => {
          return <TravelProduct key={product.idx} data={product} />;
        })}
      </div>
    </>
  );
};

export default TravelProductList;
