import * as React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Sidebar } from '../Sidebar';
import { Footerbar } from '../Footerbar';

export const DesktopLayout: React.FC = props => {
  return (
    <Grid
      className="layout-root"
      minH="100vh"
      minW="100vw"
      flexDir="row"
      position="relative"
      backgroundColor="whiteAlpha.100"
      gridTemplateAreas={`
        "sidebar content content"
        "footer footer footer"
      `}
      gridTemplateColumns={'60px auto auto'}
      gridTemplateRows={'auto 30px'}
    >
      <GridItem gridArea="sidebar">
        <Sidebar />
      </GridItem>
      <GridItem gridArea="content">
        <Grid
          gridArea="content"
          gridTemplateAreas={`
            "panel appbar appbar"
            "panel body body"
          `}
          gridTemplateColumns={'320px auto auto'}
          gridTemplateRows="35px calc(100vh - 65px)"
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

export const MobileLayout: React.FC = props => {
  return <Box {...props} />;
};
