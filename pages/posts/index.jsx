import React from 'react';
import { request, articles_query} from '@/lib/graphcms';

import { PanelPosts } from '@/features/posts';
import { PostsRoot } from '@/features/posts';

import { Appbar } from '@/components/Appbar';

export default function Posts({ posts }) {
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
