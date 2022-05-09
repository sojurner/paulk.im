import * as React from 'react';
import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { useResponsiveContext } from '@/features/responsive';

import { Appbar } from '@/components/Appbar';
import { Sidebar } from '@/components/Sidebar';
import { Footerbar } from '@/components/Footerbar';

import { µLayout } from '.';
import { PlaylistControl } from '@/features/playlist';

export const DesktopLayout: React.FC<µLayout.Props> = props => {
  const contentBG = useColorModeValue('white', 'gray.800');

  return (
    <>
      <Grid
        className="layout-root"
        overflow="hidden"
        minH="100vh"
        minW="100vw"
        flexDir="row"
        position="relative"
        backgroundColor="whiteAlpha.100"
        gridTemplateAreas={[
          `"sidebar sidebar sidebar"
            "content content content"
            "footer footer footer"`,
          `"sidebar content content"
            "footer footer footer"`,
        ]}
        gridTemplateColumns={['1fr 1fr 1fr', '60px auto auto']}
        gridTemplateRows={['40px auto 30px', 'auto 30px']}
      >
        <GridItem gridArea="sidebar">
          <Sidebar flexDir={{ sm: 'row', md: 'column' }} />
        </GridItem>
        <GridItem gridArea="content" background={contentBG}>
          <Grid
            gridTemplateAreas={[
              `"body body"`,
              `"appbar appbar"
                "body body"`,
            ]}
            gridTemplateColumns={`auto auto`}
            gridTemplateRows={['calc(100vh - 75px)', '45px calc(100vh - 75px)']}
          >
            <Appbar display={['none', 'flex']} gridArea="appbar" />
            {props.children}
          </Grid>
        </GridItem>

        <GridItem gridArea="footer" zIndex="docked">
          <Footerbar position={'fixed'} height="30px" bottom={0} />
        </GridItem>
        <PlaylistControl />
      </Grid>
    </>
  );
};
