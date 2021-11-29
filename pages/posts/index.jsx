import React from 'react';
import { request, articles_query } from '@/lib/graphcms';

import { PanelPosts } from '@/features/posts';
import { PostsRoot } from '@/features/posts';

import { Appbar } from '@/components/Appbar';
import { useResponsiveContext } from '@/features/responsive';

export default function Posts({ posts }) {
  const { collapsible, mediaQueries } = useResponsiveContext();

  React.useEffect(() => {
    if (!mediaQueries.state.isLargerThan500 || !collapsible.state.collapsed)
      return;

    collapsible.methods.toggleCollapsed();
  }, []);

  return (
    <>
      <PanelPosts posts={posts} gridArea="panel" />
      <Appbar gridArea="appbar" />
      <PostsRoot posts={posts} gridArea="body" />
    </>
  );
}

export async function getStaticProps() {
  const { articles } = await request({
    query: `{
      ${articles_query}
    }`,
  });

  return { props: { posts: articles } };
}
