import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import { request, articles_query, article_queryable } from '@/lib/graphcms';
import { markdown2Html } from '@/lib/markdown2Html';

import { PanelPosts, PostTemplate } from '@/features/posts';

import { Appbar } from '@/components/Appbar';

export default function Post({ post, posts }) {
  return (
    <>
      <PanelPosts posts={posts} gridArea="panel" />
      <Appbar gridArea="appbar" />
      <PostTemplate post={post} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { article, articles } = await request({
    query: `{
      ${articles_query}
      ${article_queryable(params.slug)}
    }`,
  });

  const content = (await markdown2Html(article.body || '')) || null;
  return {
    props: {
      post: {
        ...article,
        content,
      },
      posts: articles,
    },
  };
}

export async function getStaticPaths() {
  const { articles } = await request({
    query: `{
      ${articles_query}
    }`,
  });

  return {
    paths: articles.map(ART => {
      return {
        params: {
          slug: ART.slug,
        },
      };
    }),
    fallback: false,
  };
}
