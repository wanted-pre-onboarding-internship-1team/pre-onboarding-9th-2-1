import ProductName from '../common/ProductName';
import ProductPrice from '../common/ProductPrice';
import DeleteAlert from './DeleteAlert';
import { CardBody, Tag } from '@chakra-ui/react';

const ProductBody = ({ product }) => {
  const { name, price, spaceCategory } = product;

  return (
    <CardBody position='relative'>
      <DeleteAlert reservationItem={product} />
      <ProductName name={name} />
      <ProductPrice price={price} />
      <Tag>{spaceCategory}</Tag>
    </CardBody>
  );
};

export default ProductBody;
