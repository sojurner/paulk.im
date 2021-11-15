import * as React from 'react';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
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
      backgroundColor="whitesmoke"
      gridTemplateAreas={`
        "sidebar content content"
        "footer footer footer"
      `}
      gridTemplateColumns={'80px auto auto'}
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
          gridTemplateColumns="320px auto auto"
          gridTemplateRows="35px calc(100vh - 65px)"
        >
          {props.children}
        </Grid>
      </GridItem>
      {/* <Box width="100vw" position="fixed" left="0" bottom="0">
        <iframe
          id={'sc-iframe'}
          width="100%"
          height="100px"
          scrolling="no"
          frameBorder="no"
          src={`https://w.soundcloud.com/player?url=https://soundcloud.com/paul-kim-590010884/sets/orchestra&sharing=false&buying=false&share=false&show_user=false&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false`}
        ></iframe>
      </Box> */}
      <GridItem gridArea="footer">
        <Footerbar />
      </GridItem>
    </Grid>
  );
};

export const MobileLayout: React.FC = props => {
  return <Box {...props} />;
};
