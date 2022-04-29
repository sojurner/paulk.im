import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, ENUM_QUERY, POSTS_QUERY } from '@/lib/graphcms';

import { PostsTag } from '@/features/posts';

dayjs.extend(relativeTime);

export default function ContentTagPage(props: {
  tag: string;
  tags: string[];
  posts: Models.Post[];
}) {
  return <PostsTag gridArea="body" {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await request({
    query: `query {
      ${POSTS_QUERY({ tagQuery: params?.tag as string })}
      tags: ${ENUM_QUERY('ContentTag')}
    }`,
  });

  const posts = response.posts.map((POST: Models.Post) => {
    return {
      ...POST,
      uploadDate: dayjs(POST?.uploadDate).format('MMM D, YYYY'),
    };
  });

  const tags = response.tags.enumValues.map(
    (TAG: { name: string }) => TAG.name
  );

  return { props: { posts, tag: params?.tag, tags } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { tags } = await request({
    query: `query {
      tags: ${ENUM_QUERY('ContentTag')}
    }`,
  });

  const paths = tags.enumValues.map((TAG: { name: string }) => {
    return {
      params: {
        tag: TAG.name,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
