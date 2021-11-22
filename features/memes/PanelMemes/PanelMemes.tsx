import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Flex, Grid, GridItem } from '@chakra-ui/react';

import { µPanelMemes } from './types';
import { usePanelMemes } from '@/features/memes/hooks';
import { Panel } from '@/components/Panel';
import { RegularText } from '@/components/Typography';
import { useRouter } from 'next/router';

export const PanelMemes: React.FC<µPanelMemes.Props> = ({ memes }) => {
  const router = useRouter();
  const panelMemes = usePanelMemes({ activeMeme: router.query.slug as string });

  return (
    <Panel>
      <Flex flexDir="column">
        {memes.map(MEME => {
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
                  <RegularText>{MEME.date}</RegularText>
                </GridItem>
              </Grid>
            </NextLink>
          );
        })}
      </Flex>
    </Panel>
  );
};
