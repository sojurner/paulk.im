import * as React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Sidebar } from '../Sidebar';
import { Footerbar } from '../Footerbar';
import { useResponsiveContext } from '@/features/responsive';

export const DesktopLayout: React.FC = props => {
  const { collapsible, mediaQueries } = useResponsiveContext();

  return (
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
          gridTemplateRows={`35px calc(100vh - ${
            !mediaQueries.state.isLargerThan500 ? '105px' : '65px'
          })`}
        >
          {props.children}
        </Grid>
      </GridItem>

      <GridItem gridArea="footer">
        <Footerbar />
      </GridItem>
    </Grid>
  );
};
