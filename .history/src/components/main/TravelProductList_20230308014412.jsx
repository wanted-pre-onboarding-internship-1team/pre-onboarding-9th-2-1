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

// {
// 	"idx": 2,
// 	"name": "AA 아쿠아리움 상어 밥주기 이용권",
// 	"mainImage": "https://picsum.photos/id/18/300/300",
// 	"description": "AA 아쿠아리움 상어 밥주기에 대한 내용입니다.",
// 	"spaceCategory": "서울",
// 	"price": 10000,
// 	"maximumPurchases": 2,
// 	"registrationDate": "2023.01.02 11:07:00"
// },
export default function TravelProductList() {
  const data = useTravelProducts();

  return (
    <Grid
      height='100%'
      width='100%'
      justifyContent='center'
      gridAutoRows='400px'
      gridTemplateColumns={{
        base: 'repeat(1, 100%)',
        sm: 'repeat(2, 300px)',
        md: 'repeat(3, 300px)',
        xl: 'repeat(4, 300px)',
      }}>
      <Box bg='red.200' w='100%' h='100%' p='0.8rem' borderRadius='0.8rem'>
        <Image
          borderRadius='0.8rem'
          height='50%'
          width='100%'
          src='https://picsum.photos/id/18/300/300'
        />
        <Heading size='md'>Living room Sofa</Heading>
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
