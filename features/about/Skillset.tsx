import { Flex, Tag } from '@chakra-ui/react';

export const Skillset = () => {
  return (
    <Flex mt="4" flexWrap="wrap" width={['95%', 540]}>
      {[
        'React',
        'NextJS',
        'Typescript',
        'ChakraUI',
        'C#',
        '.NET',
        'Blazor',
        'Git',
        'PostgreSQL',
      ]?.map(TAG => {
        return (
          <Tag
            key={`header-${TAG}`}
            variant="outline"
            my="1"
            mr="2"
          >
            {TAG}
          </Tag>
        );
      })}
    </Flex>
  );
};
