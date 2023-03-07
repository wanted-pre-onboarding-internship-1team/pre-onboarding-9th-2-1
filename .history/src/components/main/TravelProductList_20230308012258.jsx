import useTravelProducts from '../../hooks/useTravelProducts';
import {
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
  const [isMin1000, isMin700, isMax600] = useMediaQuery([
    '(min-width: 1200px)',
    '(min-width: 700px)',
    '(max-width: 500px)',
  ]);
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      gridAutoRows='300px'
      gridTemplateColumns={getGirdItemCount(isMin1000, isMin700, isMax600)}>
      <Box bg='red.200' w={[300, 400, 500]}>
        This is a box
      </Box>
      {/* {data.map(item => {
        console.log(item);
        return;
      })} */}
    </Grid>
  );
}

function getGirdItemCount(isMin1200, isMin700, isMax600) {
  if (isMin1200) return 'repeat(4, 300px)';
  if (isMin700) return 'repeat(3, 300px)';
  if (isMax600) return 'repeat(1, 100%)';
  return 'repeat(3, 300px)';
}
