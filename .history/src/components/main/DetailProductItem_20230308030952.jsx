import { useTravelProductContext } from '../../context/TravelProductContext';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Modal,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export default function DetailProductItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedItem } = useTravelProductContext();
  console.log(selectedItem);
  //if (!selectedItem) return;
  return (
    <Modal zIndex='10000' onClose={onClose} isOpen={isOpen} isCentered>
      wefwaefawef afe wf ew fwaf waef weafwe fewa fewafe wafew fewa fewa fwe
    </Modal>
  );
}
