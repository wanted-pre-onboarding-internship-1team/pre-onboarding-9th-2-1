import useProductList from '../../hooks/useProductList';
import { Product } from './Product';

const ProductList = () => {
  const [productList] = useProductList();

  return (
    <ul>
      {productList?.map(product => (
        <Product product={product} key={product.idx} />
      ))}
    </ul>
  );
};

export default ProductList;
