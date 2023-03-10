import { Grid, GridItem, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={`"left header right"`}
      templateColumns='repeat(3, minmax(50px, auto))'
      gap={6}
      alignItems='center'
      justifyContent='space-between'
      width='500px'
      margin='auto'
      p={3}>
      <GridItem area='left'>
        <Link onClick={() => navigate(-1)}>
          <Icon as={BsChevronLeft} boxSize='6' />
        </Link>
      </GridItem>
      <GridItem area='header'>
        <Heading as='h1' textAlign='center' whiteSpace='nowrap' fontSize='2xl'>
          week2 과제
        </Heading>
      </GridItem>
      <GridItem area='right' textAlign='right'>
        <Link to='/reservations'>
          <Icon gridArea='unset' as={BsCart2} boxSize='6' />
          {/* <Box w='20px' h='20px' borderRadius='50%' backgroundColor='tomato' /> */}
        </Link>
        <Link onClick={() => navigate(+1)}>
          <Icon as={BsChevronRight} boxSize='6' ml='20px' />
        </Link>
      </GridItem>
    </Grid>
  );
};

export default Header;
