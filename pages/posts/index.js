import React from 'react'

import { PanelPosts } from '@/features/posts'
import { Appbar } from '@/components/Appbar';
import { getAllPosts } from '@/lib/api'
import {PostsRoot} from '@/features/posts'

export default function Posts({ posts, preview }) {
  return (
    <>
      <PanelPosts posts={posts} gridArea="posts" />
      <Appbar gridArea="appbar" />
      <PostsRoot gridArea="body" />
    </>
  )
}

export async function getStaticProps() {

  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'category'
  ])
  return {
    props: {
      posts: posts.map((post) => ({
        ...post
      })),
      fallback: false,
    }
  }
}
