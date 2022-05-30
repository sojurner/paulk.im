import { Flex, FlexProps, Tag } from '@chakra-ui/react';

export const Skillset: React.FC<FlexProps> = props => {
  return (
    <Flex mt="4" flexWrap="wrap" {...props}>
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
          <Tag key={`header-${TAG}`} variant="outline" my="1" mr="2">
            {TAG}
          </Tag>
        );
      })}
    </Flex>
  );
};
