import LazyImage from '../common/LazyImage';
import { AspectRatio } from '@chakra-ui/react';

const ThumbNailImage = ({ product }) => {
  const { name, mainImage } = product;

  return (
    <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
      <LazyImage src={mainImage} alt={name} width='100%' />
    </AspectRatio>
  );
};

export default ThumbNailImage;
