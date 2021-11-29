import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import {
  request,
  articles_query,
  article_queryable,
  article_viewcount_mutation,
} from '@/lib/graphcms';
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
    query: `query {
      ${articles_query}
      ${article_queryable(params)}
    }`,
  });
  await request({
    query: `mutation {
      ${article_viewcount_mutation({
        ...params,
        viewCount: article.viewCount + 1,
      })}
    }`,
  });

  const content = (await markdown2Html(article.body || '')) || null;
  return {
    props: {
      post: {
        ...article,
        viewCount: article.viewCount + 1,
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
