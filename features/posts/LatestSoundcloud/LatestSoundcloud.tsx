import { Flex, Box, useColorMode } from '@chakra-ui/react';

export const LatestSoundcloud: React.FC<{ url: string }> = ({ url }) => {
  const { colorMode } = useColorMode();

  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <iframe
        id={'sc-iframe'}
        {...(colorMode === 'dark' && {
          style: { filter: 'invert(.85)' },
        })}
        width="100%"
        height="130px"
        scrolling="no"
        loading="lazy"
        frameBorder="no"
        src={`https://w.soundcloud.com/player?url=${url}&sharing=false&buying=false&share=false&show_user=false&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false`}
      />
    </Flex>
  );
};
