import { useReservedListContext } from '../../contexts/ReservedListContext';

const BasketProduct = ({ product }) => {
  const { deleteReserve } = useReservedListContext();

  return (
    <li>
      <div>
        <span>{product.idx}</span>
        <img src={product.mainImage} alt={product.name} />
        <span>{product.name}</span>
        <span>{product.price} 원</span>
        <span>{product.spaceCategory}</span>
      </div>
      <button
        onClick={() => {
          deleteReserve(product.idx);
        }}>
        X
      </button>
    </li>
  );
};

export default BasketProduct;
