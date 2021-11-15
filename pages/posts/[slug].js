import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { getPostBySlug, getAllPosts } from '@/lib/api'
import { markdown2Html } from '@/lib/markdown2Html'

import { Appbar } from '@/components/Appbar';
import { PanelPosts, PostTemplate } from '@/features/posts'

export default function Post({ post, posts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <PanelPosts posts={posts} gridArea="posts" />
      <Appbar gridArea="appbar" />
      <PostTemplate post={post} />
    </>
  )
}

export async function getStaticProps({ params }) {

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'tags',
    'content',
    'image'
  ])
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'category'
  ])

  const content = await markdown2Html(post.content || '') || null;

  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}