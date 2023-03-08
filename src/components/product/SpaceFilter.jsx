import { CheckboxGroup, Stack, Checkbox, Text, Spacer } from '@chakra-ui/react';

export default function SpaceFilter({ handleSelectSpace }) {
  const spaceList = ['서울', '부산', '대구', '강원', '제주'];

  return (
    <CheckboxGroup colorScheme='gray'>
      <Stack direction='row' spacing='5'>
        <Text fontSize='lg' fontWeight='bold'>
          지역
        </Text>
        <Spacer />
        {spaceList.map((space, i) => (
          <Checkbox
            key={i}
            value={space}
            onChange={handleSelectSpace}
            fontWeight='semibold'>
            {space}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
}
