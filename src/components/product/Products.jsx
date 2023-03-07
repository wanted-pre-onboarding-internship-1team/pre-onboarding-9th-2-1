import fetchProducts from '../../util/apis/fetchProducts';
import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setItems] = useState([]);
  useEffect(() => {
    fetchProducts().then(response => {
      setItems(response);
    });
  }, []);
  return <div>main</div>;
}

export default Products;
