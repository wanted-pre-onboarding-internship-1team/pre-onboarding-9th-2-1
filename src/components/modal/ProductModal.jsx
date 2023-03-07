import { useModalProductContext } from '../../contexts/ModalProductContext';
import { Product } from '../main/Product';

const ProductModal = () => {
  const { ModalProduct, setModalProduct } = useModalProductContext();

  if (!ModalProduct) {
    return <></>;
  }

  return (
    <div>
      <Product product={ModalProduct} />
      <button
        onClick={() => {
          setModalProduct(null);
        }}>
        닫기
      </button>
    </div>
  );
};

export default ProductModal;
