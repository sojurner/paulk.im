import React from 'react';
import {
  VStack,
  Box,
  Flex,
  HStack,
  FlexProps,
  Tag,
  useColorMode,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';
import Prism from 'prismjs';

import { LatestTIL } from '../LatestTIL';
import { SubTitle } from '@/components/Typography';
import { IconWrapper, IdeaIcon } from '@/components/Icon';
import { useRouter } from 'next/router';
import { useFavoritesContext } from '@/features/favorites';

export const TilTag: React.FC<FlexProps & { tils: Models.TIL[] }> = ({
  tils,
  ...props
}) => {
  const { collapsible, mediaQueries } = useResponsiveContext();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const favoritesCxt = useFavoritesContext();

  React.useEffect(() => {
    Prism.highlightAll();
  });

  const onFavoriteClick = React.useCallback((slug: string) => {
    favoritesCxt.methods.onFavoriteToggle(slug);
  }, []);

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      py="2.5em"
      {...props}
    >
      <HStack spacing={4} alignItems={'center'}>
        <IconWrapper fontSize={'1.2em'}>
          <IdeaIcon />
        </IconWrapper>
        <SubTitle fontSize={'2em'}>Today I Learned</SubTitle>
        <IconWrapper fontSize={'1.2em'}>
          <IdeaIcon />
        </IconWrapper>
      </HStack>
      <Flex mt="5" mb="12">
        <Tag># {router.query?.tag}</Tag>
      </Flex>
      <VStack
        spacing={12}
        {...(!collapsible.state.collapsed &&
          !mediaQueries.state.isLargerThan500 && {
            onClick: collapsible.methods.toggleCollapsed,
          })}
      >
        {tils.map(TIL => {
          return (
            <Box key={TIL.slug} width={['95%', 700]}>
              <LatestTIL
                onFavoriteClick={onFavoriteClick}
                isLight={colorMode === 'light'}
                til={TIL}
              />
            </Box>
          );
        })}
      </VStack>
    </Flex>
  );
};
