import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

import {
  request,
  articles_query,
  article_queryable,
  article_viewcount_mutation,
} from '@/lib/graphcms';

import { PostTemplate } from '@/features/posts';

export default function Post({ post }) {
  return <PostTemplate gridArea="body" post={post} />;
}

export async function getStaticProps({ params }) {
  const { article } = await request({
    query: `query {
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
  const gray = matter(article.body);

  const content = await serialize(gray.content);
  return {
    props: {
      post: {
        ...article,
        viewCount: article.viewCount + 1,
        content,
      },
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
