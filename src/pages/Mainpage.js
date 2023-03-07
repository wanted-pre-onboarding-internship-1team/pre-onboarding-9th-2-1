import { ReadData } from '../apis/api';
import Modal from '../components/common/Modal';
import Potal from '../components/common/Portal';
import { changeinfo, addProduct } from '../store/store';
import { Box, Image, Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Mainpage() {
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();

  // 장바구니 정보
  let cart = useSelector(state => {
    return state.cart;
  });

  // Modal Close
  const onCloseModal = () => {
    setModalState(!modalState);
  };

  // Modal Open
  const onOpenModal = () => {
    setModalState(!modalState);
  };

  // read API Data
  const { data: isData } = useQuery(['todos'], ReadData);

  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap' w={1800}>
      {isData &&
        isData.map(data => {
          return (
            <>
              <Box
                onClick={() => {
                  onOpenModal();
                  dispatch(
                    changeinfo({
                      idx: data.idx,
                      name: data.name,
                      mainImage: data.mainImage,
                      description: data.description,
                      spaceCategory: data.spaceCategory,
                      price: data.price,
                      maximumPurchases: data.maximumPurchases,
                      registrationDate: data.registrationDate,
                    })
                  );
                }}
                w={350}
                h={400}
                cursor='pointer'
                backgroundColor='#FCF6F5'
                key={data.index}
                margin={10}>
                <Box>상품번호 : {data.idx}</Box>
                <Box>이름 : {data.name}</Box>
                <Image src={data.mainImage} />
                <Box>가격 : {data.price}</Box>
                <Box>지역 : {data.spaceCategory}</Box>
                <Button
                  cursor='pointer'
                  onClick={() => {
                    dispatch(addProduct(data));
                  }}>
                  예약하기
                </Button>
              </Box>

              <Potal>
                {modalState && <Modal onCloseModal={onCloseModal} />}
              </Potal>
            </>
          );
        })}
      <Button w={100} h={100} cursor='pointer'>
        장바구니 + {cart.length - 1}
      </Button>
    </Box>
  );
}
