import { Grid, GridItem, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ noBackBtn, rightComp }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <Grid
      templateAreas={`"left header right"`}
      templateColumns='repeat(3, minmax(50px, auto))'
      gap={6}
      alignItems='center'
      justifyContent='space-between'
      p={3}>
      {noBackBtn && (
        <GridItem area='left'>
          <Link onClick={onClickHandler} display>
            <Icon as={BsChevronLeft} boxSize='6' />
          </Link>
        </GridItem>
      )}
      <GridItem area='header'>
        <Heading as='h1' textAlign='center' whiteSpace='nowrap' fontSize='2xl'>
          week2 과제
        </Heading>
      </GridItem>
      <GridItem area='right' textAlign='right'>
        {rightComp}
      </GridItem>
    </Grid>
  );
};

export default Header;
