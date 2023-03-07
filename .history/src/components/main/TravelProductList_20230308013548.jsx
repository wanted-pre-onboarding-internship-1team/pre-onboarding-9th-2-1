import useTravelProducts from '../../hooks/useTravelProducts';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

export default function TravelProductList() {
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      width='100%'
      gridAutoRows='300px'
      gridTemplateColumns={{
        base: 'repeat(1, 100%)',
        sm: 'repeat(2, 300px)',
        md: 'repeat(3, 300px)',
        lg: 'repeat(4, 300px)',
      }}>
      <Box bg='red.200' w='100%' h='100%'>
        This is a box
      </Box>
      {/* {data.map(item => {
        console.log(item);
        return;
      })} */}
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
