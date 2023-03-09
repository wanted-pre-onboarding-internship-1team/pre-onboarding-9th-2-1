import { increaseQty } from '../store/cartSlice';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Reservations = () => {
  const cartList = useSelector(state => state.cart.cartList);
  const dispatch = useDispatch();

  return (
    <Box margin='50px auto' width='900px'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>상품정보</Th>
              <Th>수량</Th>
              <Th isNumeric>상품금액</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartList.map(item => {
              return (
                <Tr key={item.idx}>
                  <Td>{item.name}</Td>
                  <Tr>
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
                      <IconButton icon={<MinusIcon />} />
                    </Td>
                  </Tr>

                  <Td isNumeric>
                    {(item.price * item.reserveQty).toLocaleString('ko-KR')}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th />
              <Th>총 상품금액</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reservations;
