import useTravelProducts from '../../hooks/useTravelProducts';
import { Grid } from '@chakra-ui/react';

export default function TravelProductList() {
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      gridAutoRows='200px'
      gridTemplateColumns='repeat(3, 200px)'>
      1
    </Grid>
  );
}
