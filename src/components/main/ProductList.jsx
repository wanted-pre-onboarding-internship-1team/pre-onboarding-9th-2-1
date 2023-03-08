import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Center,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ProductList({ products, addReservedItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  // const [reservedItem, setReservedItem] = useState([]);

  const handleOpenModal = product => {
    setModalData(product);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Center>
        <SimpleGrid columns={[1, null, 3, null, 4]} spacing='40px'>
          {products.map(function (product, i) {
            return (
              <ProductItem
                handleOpenModal={handleOpenModal}
                addReservedItem={addReservedItem}
                product={product}
                key={product.name + i}
              />
            );
          })}
        </SimpleGrid>
      </Center>
      {modalData && (
        <ProductModal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          modalData={modalData}
        />
      )}
    </>
  );
}
