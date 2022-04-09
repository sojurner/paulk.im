import { RegularText, SubTitle } from '@/components/Typography';
import { Flex, Box, Tag, HStack } from '@chakra-ui/react';
import { BookmarkIcon, IconWrapper } from '@/components/Icon';
import NextLink from 'next/link';
import { µLatestTIL } from '.';

export const LatestTIL: React.FC<{
  til: Models.TIL;
  isFavorited?: boolean;
  isLight: boolean;
  onFavoriteClick: (slug: string) => void;
}> = ({ til, isLight, isFavorited, onFavoriteClick }) => {
  return (
    <Flex
      background={isLight ? "gray.100" :"whiteAlpha.100"}
      borderRadius={10}
      padding="3"
      flexDir="column"
      pos="relative"
    >
      <Box
        left={['0', '-5em']}
        top={['-1.2em', '0']}
        pos="absolute"
        fontSize={'1.5em'}
      >
        <RegularText opacity={0.7} fontStyle={'italic'}>
          {til.date}
        </RegularText>
      </Box>
      <SubTitle fontSize={'1.2em'} maxWidth="95%" opacity={0.8} mb="2">
        {til.title}
      </SubTitle>
      <IconWrapper
        cursor="pointer"
        fontSize="1.5em"
        pos="absolute"
        right="2.5"
        isActive={!!isFavorited}
        onClick={() => onFavoriteClick(til.slug)}
      >
        <BookmarkIcon />
      </IconWrapper>

      <µLatestTIL.Article
        isLight={isLight}
        dangerouslySetInnerHTML={{ __html: til?.content }}
      />
      {/* <MDXRemote key={til?.slug} {...til?.??content} /> */}
      <HStack mt="2">
        {til.tags.map(TAG => {
          return (
            <NextLink key={TAG} href={`/tils/${TAG}`}>
              <div>
                <Tag
                  cursor="pointer"
                  width="max-content"
                  variant={'subtle'}
                  colorScheme={isLight ? "blue" : "gray"}
                  key={TAG}
                  _hover={{
                    outline: isLight ? '1px solid var(--chakra-colors-blue-200)' : '1px solid #fdb54a',
                  }}
                >
                  #{TAG}
                </Tag>
              </div>
            </NextLink>
          );
        })}
      </HStack>
    </Flex>
  );
};
