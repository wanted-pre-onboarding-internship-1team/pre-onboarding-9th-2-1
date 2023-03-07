import useTravelProducts from '../../hooks/useTravelProducts';
import { Grid, useMediaQuery } from '@chakra-ui/react';

export default function TravelProductList() {
  const [isMin1000, isMin700, isMax600] = useMediaQuery([
    '(min-width: 1000px)',
    '(min-width: 700px)',
    '(max-width: 500px)',
  ]);
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      gridAutoRows='300px'
      gridTemplateColumns={getGirdItemCount()}>
      1
    </Grid>
  );
}

function getGirdItemCount(isMin1000, isMin700, isMax600) {
  if (isMin1000) return 'repeat(4, 300px)';
  if (isMin700) return 'repeat(3, 300px)';
  if (isMax600) return 'repeat(1, 100%)';
  return 'repeat(3, 300px)';
}
