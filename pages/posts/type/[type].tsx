import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, ENUM_QUERY, POSTS_QUERY } from '@/lib/graphcms';

import { PostsType } from '@/features/posts';

dayjs.extend(relativeTime);

export default function ContentTypePage(props: {
  type: string;
  posts: Models.Post[];
}) {
  return <PostsType gridArea="body" {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await request({
    query: `query {
      ${POSTS_QUERY({ typeQuery: params?.type as string })}
    }`,
  });

  const posts = response.posts.map((POST: Models.Post) => {
    return {
      ...POST,
      uploadDate: dayjs(POST?.uploadDate).format('MMM D, YYYY'),
    };
  });

  return { props: { posts, type: params?.type } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { types } = await request({
    query: `query {
      types: ${ENUM_QUERY('ContentType')}
    }`,
  });

  const paths = types.enumValues.map((TAG: { name: string }) => ({
    params: {
      type: TAG.name,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
