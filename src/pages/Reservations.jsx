import { deleteCartItem, increaseQty, decreaseQty } from '../store/cartSlice';
import {
  AddIcon,
  MinusIcon,
  DeleteIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  IconButton,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Reservations = () => {
  const cartList = useSelector(state => state.cart.cartList);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let result = 0;
    cartList.map(item => {
      return (result += item.price * item.reserveQty);
    });
    setTotalPrice(result);
  }, [cartList]);

  const renderProductPrice = (price, qty) => {
    let result = price * qty;
    return result;
  };

  return (
    <Box margin='50px auto' width='900px'>
      <NavLink to='/main'>
        <IconButton icon={<ArrowBackIcon />} />
      </NavLink>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>상품명</Th>
              <Th>수량</Th>
              <Th></Th>
              <Th isNumeric>상품금액</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartList.map(item => {
              return (
                <Tr key={item.idx}>
                  <Td>{item.name}</Td>

                  <Td>
                    {item.reserveQty} &#47;&nbsp;
                    {item.maximumPurchases}
                  </Td>
                  <Td>
                    <IconButton
                      icon={<AddIcon />}
                      onClick={() => {
                        dispatch(increaseQty(item.idx));
                      }}
                    />
                    <IconButton
                      icon={<MinusIcon />}
                      onClick={() => {
                        dispatch(decreaseQty(item.idx));
                      }}
                    />
                  </Td>

                  <Td isNumeric>
                    {renderProductPrice(
                      item.price,
                      item.reserveQty
                    ).toLocaleString('ko-KR')}
                  </Td>
                  <Td>
                    <IconButton
                      icon={<DeleteIcon />}
                      onClick={() => {
                        dispatch(deleteCartItem(item.idx));
                      }}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th />
              <Th />
              <Th fontSize='large'>총 상품금액</Th>
              <Th isNumeric fontSize='large'>
                {totalPrice.toLocaleString('ko-KR')}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reservations;
