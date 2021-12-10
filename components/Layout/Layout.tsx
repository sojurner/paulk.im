import * as React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';
import { SearchRoot, useSearchContext } from '@/features/search';
import { ExplorerPanel } from '@/features/explorer';

import { Appbar } from '@/components/Appbar';
import { Sidebar } from '@/components/Sidebar';
import { Footerbar } from '@/components/Footerbar';

import { µLayout } from '.';

export const DesktopLayout: React.FC<µLayout.Types.Props> = props => {
  const { collapsible, mediaQueries } = useResponsiveContext();

  const { searchToggle } = useSearchContext();
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
        <GridItem gridArea="content">
          <Grid
            gridTemplateAreas={`
            "panel appbar appbar"
            "panel body body"
          `}
            gridTemplateColumns={`${
              collapsible.state.collapsed ? '0px' : '320px'
            } auto auto`}
            gridTemplateRows={`45px calc(100vh - ${
              !mediaQueries.state.isLargerThan500 ? '115px' : '75px'
            })`}
          >
            <Appbar gridArea="appbar" />
            <ExplorerPanel gridArea="panel" />
            {props.children}
          </Grid>
        </GridItem>

        <GridItem gridArea="footer">
          <Footerbar />
        </GridItem>
      </Grid>
      {searchToggle.state.showSearch && <SearchRoot />}
    </>
  );
};
