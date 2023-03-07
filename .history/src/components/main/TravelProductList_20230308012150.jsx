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
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='mg'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
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
