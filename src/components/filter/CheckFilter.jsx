import { Text, Stack, Flex } from '@chakra-ui/layout';
import { Checkbox, CheckboxGroup, Button } from '@chakra-ui/react';
import React from 'react';

const CheckFilter = () => {
  const checkList = ['강원', '서울', '부산', '대구', '제주'];

  return (
    <>
      <Flex justifyContent='space-between' mb='2'>
        <Text fontSize='md' mb='2' fontWeight='bold'>
          위치
        </Text>

        <Button size='xs'>필터 적용 해제</Button>
      </Flex>

      <CheckboxGroup colorScheme='linkedin'>
        <Stack direction='row' flexWrap='wrap' gap='2'>
          {checkList &&
            checkList.map((item, idx) => (
              <Checkbox value={item} key={idx} ml={idx === 0 && '2'}>
                {item}
              </Checkbox>
            ))}
        </Stack>
      </CheckboxGroup>
    </>
  );
};

export default CheckFilter;
