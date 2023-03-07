import { useModalProductContext } from '../../contexts/ModalProductContext';
import ReserveButton from './ReserveButton';
import ReservedCheckBox from './ReservedCheckBox';

export const Product = ({ product }) => {
  const { setModalProduct } = useModalProductContext();

  // 장바구니는 작은 카드 크기의 리스트 scroll 형식으로 ?? (우측 nav bar)
  // 장바구니 담을 때 animation 도 있었음 좋겠당 ㅎㅎ

  return (
    <li>
      <div
        onClick={() => {
          setModalProduct(product);
        }}>
        <ReservedCheckBox product={product} />
        <span>{product.idx}</span>
        <img src={product.mainImage} alt={product.name} />
        <span>{product.name}</span>
        <span>{product.price} 원</span>
        <span>{product.spaceCategory}</span>
      </div>
      <ReserveButton product={product} />
    </li>
  );
};
