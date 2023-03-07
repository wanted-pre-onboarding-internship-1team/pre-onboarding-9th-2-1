import useTravelProducts from '../../hooks/useTravelProducts';
import TravelProductItem from './TravelProductItem';
import { Grid } from '@chakra-ui/react';

export default function TravelProductList() {
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      width='100%'
      justifyContent='center'
      gridAutoRows='375px'
      gap='1rem'
      gridTemplateColumns={{
        base: 'repeat(1, 100%)',
        sm: 'repeat(2, 300px)',
        md: 'repeat(3, 300px)',
        xl: 'repeat(4, 300px)',
      }}>
      {data.map(item => (
        <TravelProductItem key={item.idx} {...item} />
      ))}
    </Grid>
  );
}
// const breakpoints = {
//   sm: '30em',
//   md: '48em',
//   lg: '62em',
//   xl: '80em',
//   '2xl': '96em',
// }
