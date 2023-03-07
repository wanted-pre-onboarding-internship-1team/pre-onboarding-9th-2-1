import { Image, Badge, Box } from '@chakra-ui/react';
import React from 'react';

const TravelProductInfo = ({ data, detail }) => {
  const {
    idx,
    name,
    mainImage,
    description,
    spaceCategory,
    price,
    maximumPurchases,
    registrationDate,
  } = data;

  return (
    <Box>
      <Box>{idx}</Box>
      <Box>{name}</Box>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image
          width='100%'
          margin='0'
          padding='0'
          src={mainImage}
          alt={description}
          objectFit='cover'
        />

        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {spaceCategory}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'>
              등록일 {registrationDate} &bull; 최대구매수량
              {maximumPurchases}
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}>
            {description}
          </Box>

          <Box>
            {price}
            <Box as='span' color='gray.600' fontSize='sm'>
              / 원
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TravelProductInfo;
