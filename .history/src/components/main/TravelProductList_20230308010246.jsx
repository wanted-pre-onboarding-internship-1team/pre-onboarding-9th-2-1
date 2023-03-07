import useTravelProducts from '../../hooks/useTravelProducts';
import { Grid } from '@chakra-ui/react';

export default function TravelProductList() {
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      gridAutoRows='300px'
      gridTemplateColumns='repeat(3, 300px) repeat(4, 300px)'>
      1
    </Grid>
  );
}
