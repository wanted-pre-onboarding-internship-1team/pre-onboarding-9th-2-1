import ReserveButton from './ReserveButton';
import ReservedCheckBox from './ReservedCheckBox';

export const ModalProduct = ({ product }) => {
  return (
    <li>
      <div>
        <ReservedCheckBox product={product} />
        <span>{product.idx}</span>
        <img src={product.mainImage} alt={product.name} />
        <span>{product.name}</span>
        <span>{product.price} 원</span>
        <span>{product.spaceCategory}</span>
        <span>{product.description}</span>
        <span>{product.maximumPurchases}</span>
        <span>{product.registrationDate}</span>
      </div>
      <ReserveButton product={product} />
    </li>
  );
};
