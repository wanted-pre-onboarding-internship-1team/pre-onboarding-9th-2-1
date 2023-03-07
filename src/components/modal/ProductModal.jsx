import { useModalProductContext } from '../../contexts/ModalProductContext';
import { ModalProduct } from '../main/ModalProduct';

const ProductModal = () => {
  const { modalProduct, setModalProduct } = useModalProductContext();

  if (!modalProduct) {
    return <></>;
  }

  return (
    <div>
      <ModalProduct product={modalProduct} />
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
