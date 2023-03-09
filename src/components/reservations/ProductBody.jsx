import ProductName from '../common/ProductName';
import ProductNumber from '../common/ProductNumber';
import ProductPrice from '../common/ProductPrice';
import DeleteButton from './productBody/DeleteButton';
import { CardBody, Tag } from '@chakra-ui/react';

const ProductBody = ({ product }) => {
  const { idx, name, price, spaceCategory } = product;

  return (
    <CardBody position='relative'>
      <ProductNumber idx={idx} />
      <DeleteButton product={product} />
      <ProductName name={name} />
      <ProductPrice price={price} />
      <Tag>{spaceCategory}</Tag>
    </CardBody>
  );
};

export default ProductBody;
