import fetchProducts from '../../util/apis/fetchProducts';
import ProductList from './ProductList';
import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setItems] = useState([]);
  useEffect(() => {
    fetchProducts().then(response => {
      setItems(response);
    });
  }, []);

  return <ProductList products={products} />;
}

export default Products;
