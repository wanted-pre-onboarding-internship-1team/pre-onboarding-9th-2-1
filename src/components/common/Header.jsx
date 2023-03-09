import { onSavePrice, onSaveContry } from '../../store/store';
import {
  Grid,
  GridItem,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ noBackBtn, rightComp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterPrice, setFilterPrice] = useState({
    minimumprice: '',
    maximumprice: '',
  });
  const [filterContry, setFilterContry] = useState({
    contry: '',
  });

  const onClickHandler = () => {
    navigate(-1);
  };

  const onChangePrice = (event, price) => {
    const { name, value } = event.target;
    if (price === 'minimum') {
      setFilterPrice({ ...filterPrice, [name]: value });
    }
    if (price === 'maximum') {
      setFilterPrice({ ...filterPrice, [name]: value });
    }
  };

  const onChangeContry = event => {
    setFilterContry({ ...filterContry, contry: event });
  };

  const onSuccessfilter = () => {
    dispatch(onSavePrice(filterPrice));
    dispatch(onSaveContry(filterContry));
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
      <Menu>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme='blue'>
            Filter
          </MenuButton>
          <MenuList minWidth='240px'>
            <Text mb='8px'>최소 금액 : </Text>
            <Input
              placeholder='Here is a sample placeholder'
              size='sm'
              name='minimumprice'
              onChange={event => {
                onChangePrice(event, 'minimum');
              }}
            />
            <Text mb='8px'>최대 금액 : </Text>
            <Input
              placeholder='Here is a sample placeholder'
              size='sm'
              name='maximumprice'
              onChange={event => {
                onChangePrice(event, 'maximum');
              }}
            />
            <MenuDivider />
            <MenuOptionGroup
              title='Country'
              type='checkbox'
              name='contry'
              onChange={onChangeContry}>
              <MenuItemOption value='서울'>서울</MenuItemOption>
              <MenuItemOption value='강원'>강원</MenuItemOption>
              <MenuItemOption value='대구'>대구</MenuItemOption>
              <MenuItemOption value='부산'>부산</MenuItemOption>
              <MenuItemOption value='제주'>제주</MenuItemOption>
            </MenuOptionGroup>
            <Button
              onClick={() => {
                onSuccessfilter();
              }}>
              확인
            </Button>
          </MenuList>
        </Menu>
      </Menu>
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
