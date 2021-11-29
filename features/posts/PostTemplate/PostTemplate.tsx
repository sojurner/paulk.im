import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SubHeading } from '@/components/Typography';

import { Article } from './styles';
import { µPostTemplate } from '.';
import { useComments } from '@/features/comments';
import { useResponsiveContext } from '@/features/responsive';
import { useRouter } from 'next/router';

export const PostTemplate: React.FC<µPostTemplate.Props> = ({ post }) => {
  const ref = React.useRef(null);
  const { asPath } = useRouter();
  const { collapsible } = useResponsiveContext();

  const { status } = useComments({
    url: 'https://utteranc.es/client.js',
    theme: 'github-dark',
    issueTerm: post.slug,
    repo: 'sojurner/paulk.im',
    ref,
  });

  React.useEffect(() => {
    if (collapsible.state.collapsed) return;
    collapsible.methods.toggleCollapsed();
  }, [asPath]);

  return (
    <Flex gridArea="body" overflow="auto">
      <Flex flexDir="column" px="50px" py="40px" className="mb-32">
        <SubHeading>{post.title}</SubHeading>
        <Article dangerouslySetInnerHTML={{ __html: post.content }} />
      </Flex>
      <div ref={ref} />
    </Flex>
  );
};
