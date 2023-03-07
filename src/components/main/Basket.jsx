import { useReservedListContext } from '../../contexts/ReservedListContext';
import useProductList from '../../hooks/useProductList';
import BasketProduct from './BasketProduct';

const Basket = () => {
  // TODO : react-query 적용하는게 맞지 않을까??
  const [productList] = useProductList();

  const { reserveList } = useReservedListContext();

  return (
    <ul>
      {productList
        ?.filter(product => {
          return reserveList?.has(product.idx);
        })
        .map(product => (
          <BasketProduct product={product} key={product.idx} />
        ))}
    </ul>
  );
};

export default Basket;
