import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

import { µPanelMemes } from './types';
import { usePanelMemes } from '@/features/memes/hooks';
import { Panel } from '@/components/Panel';
import { RegularText } from '@/components/Typography';
import { useRouter } from 'next/router';
import { useResponsiveContext } from '@/features/responsive';

import { CaretLeft, CaretRight } from '@/assets/icons';

export const PanelMemes: React.FC<µPanelMemes.Props> = ({
  memes,
  ...props
}) => {
  const router = useRouter();
  const panelMemes = usePanelMemes({ activeMeme: router.query.slug as string });
  const { collapsible } = useResponsiveContext();

  return (
    <Panel pos="relative" {...props}>
      <Flex
        position="absolute"
        fontSize="25px"
        height="35px"
        right="-26px"
        alignItems="center"
        zIndex="10"
        top="120px"
        background="white"
        cursor="pointer"
        borderBottomRightRadius="10px"
        borderTopRightRadius="10px"
        border="1px solid"
        borderColor="gray.300"
        borderLeft="0"
        boxShadow="0 2px 5px rgba(0,0,0,0.1)"
        onClick={collapsible.methods.toggleCollapsed}
      >
        {collapsible.state.collapsed ? <CaretRight /> : <CaretLeft />}
      </Flex>
      <Flex flexDir="column" width="100%" position="relative">
        {!collapsible.state.collapsed &&
          memes.map(MEME => {
            return (
              <NextLink href={`/memes/${MEME.slug}`} key={MEME.slug}>
                <Grid
                  p="4"
                  cursor="pointer"
                  onClick={() => panelMemes.methods.setActiveMeme(MEME.slug)}
                  gridTemplateAreas={`
                  "img title"
                  "img date"
                `}
                  gridTemplateColumns={'70px 1fr'}
                  gridTemplateRows={'30px 30px'}
                  bg={
                    panelMemes.state.activeMeme === MEME.slug
                      ? 'gray.200'
                      : 'initial'
                  }
                >
                  <GridItem
                    gridArea="img"
                    filter={
                      panelMemes.state.activeMeme === MEME.slug
                        ? 'initial'
                        : 'grayscale(1) blur(1px)'
                    }
                  >
                    <NextImage
                      src={MEME.image.url}
                      alt="yo"
                      height="60px"
                      width="60px"
                    />
                  </GridItem>
                  <GridItem gridArea="title" overflow="hidden">
                    <RegularText
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    >
                      {MEME.title}
                    </RegularText>
                  </GridItem>
                  <GridItem gridArea="date">
                    <RegularText>{MEME.date.label}</RegularText>
                  </GridItem>
                </Grid>
              </NextLink>
            );
          })}
      </Flex>
    </Panel>
  );
};
