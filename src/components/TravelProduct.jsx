import CustomModal from './CustomModal';
import TravelProductInfo from './TravelProductInfo';
import { Box, Button } from '@chakra-ui/react';

const TravelProduct = ({ data }) => {
  const { name } = data;

  return (
    <Box border='1px' padding='0.625rem'>
      <TravelProductInfo data={data} detail={false} />
      <Button>예약</Button>
      <CustomModal title={name}>
        <TravelProductInfo data={data} detail={true} />
      </CustomModal>
    </Box>
  );
};

export default TravelProduct;
