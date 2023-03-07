import useTravelProducts from '../../hooks/useTravelProducts';
import { Grid, useMediaQuery } from '@chakra-ui/react';

export default function TravelProductList() {
  const [isMin1000, isMin700, isMax600] = useMediaQuery([
    '(min-width: 1000px)',
    '(min-width: 700px)',
    '(max-width: 600px)',
  ]);
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

function getGirdItemCount() {}
