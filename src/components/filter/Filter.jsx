import {
  Box,
  Button,
  Divider,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

export default function Filter({ TABS, currentTab, setCurrentTab }) {
  return (
    <>
      <Divider />
      <Box marginTop={3} marginRight='20px'>
        <Box>
          <UnorderedList>
            {TABS.map(tab => {
              const isCurrent = currentTab === tab.id;
              return (
                <ListItem
                  display='inline-block'
                  marginLeft={1}
                  listStyleType='none'
                  key={tab.id}>
                  <Button
                    p={2}
                    backgroundColor={
                      isCurrent
                        ? `var(--chakra-colors-gray-500)`
                        : 'transparent'
                    }
                    fontSize='sm'
                    color={
                      isCurrent
                        ? `var(--chakra-colors-white)`
                        : `var(--chakra-colors-black)`
                    }
                    _hover={{
                      backgroundColor: `var(--chakra-colors-gray-300)`,
                    }}
                    value={tab.id}
                    onClick={() => setCurrentTab(isCurrent ? '' : tab.id)}>
                    {tab.title}
                  </Button>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Box>
        {TABS.find(({ id }) => id === currentTab)?.content}
      </Box>
    </>
  );
}
