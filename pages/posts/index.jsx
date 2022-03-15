import React from 'react';
import { request, articles_query } from '@/lib/graphcms';

import { PostsRoot } from '@/features/posts';
import { useResponsiveContext } from '@/features/responsive';

export default function Posts({ posts }) {
  const { collapsible, mediaQueries } = useResponsiveContext();
  console.log(posts);
  React.useEffect(() => {
    if (!mediaQueries.state.isLargerThan500 || !collapsible.state.collapsed)
      return;

    collapsible.methods.toggleCollapsed();
  }, []);

  return <PostsRoot posts={posts} gridArea="body" />;
}

export async function getStaticProps() {
  const { articles } = await request({
    query: `{
      ${articles_query}
    }`,
  });
  // console.log(posts)
  return { props: { posts: articles } };
}
