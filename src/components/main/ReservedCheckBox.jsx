import { useReservedListContext } from '../../contexts/ReservedListContext';

const ReservedCheckBox = ({ product }) => {
  const { reserveList } = useReservedListContext();

  return (
    <input type='checkbox' checked={reserveList?.has(product.idx)} readOnly />
  );
};

export default ReservedCheckBox;
