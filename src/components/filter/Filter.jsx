import Price from './Price';
import Space from './Space';
import {
  Box,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';

export default function Filter() {
  return (
    <>
      <Divider />
      <Box mt='20px'>
        <Tabs>
          <TabList>
            <Tab>가격별</Tab>
            <Tab>공간별</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Price />
            </TabPanel>
            <TabPanel>
              <Space />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
