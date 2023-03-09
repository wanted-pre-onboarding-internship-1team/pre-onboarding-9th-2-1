import CountChangeArea from './CountChangeArea';
import ProductBody from './ProductBody';
import ThumbNailImage from './ThumbNailImage';
import { Card, Stack } from '@chakra-ui/react';

const ProductItem = ({ product }) => {
  const { idx } = product;
  return (
    <Card
      key={idx}
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      cursor='pointer'>
      <ThumbNailImage product={product} />
      <Stack flex='1'>
        <ProductBody product={product} />
        <CountChangeArea product={product} />
      </Stack>
    </Card>
  );
};

export default ProductItem;
