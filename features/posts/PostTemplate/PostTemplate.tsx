import React from 'react';
import { Flex } from '@chakra-ui/react';
import { SubHeading } from '@/components/Typography';
import { MDXRemote } from 'next-mdx-remote';

import { useComments } from '@/features/comments';
import { useResponsiveContext } from '@/features/responsive';
import { useRouter } from 'next/router';
import { ReactLiveEditor } from '@/components/ReactLiveEditor';

import { µPostTemplate } from '.';

const components = {
  ReactLiveEditor,
};

export const PostTemplate: React.FC<µPostTemplate.Types.Props> = ({ post }) => {
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
    <Flex gridArea="body" overflow="auto" justifyContent="center">
      <Flex
        flexDir="column"
        maxW={['100%', '650px']}
        minW={'375px'}
        py="40px"
        px="20px"
        className="mb-32"
      >
        <SubHeading>{post.title}</SubHeading>
        <µPostTemplate.Styles.Article>
          <MDXRemote {...post.content} components={components} />
        </µPostTemplate.Styles.Article>
      </Flex>
      <div ref={ref} />
    </Flex>
  );
};
