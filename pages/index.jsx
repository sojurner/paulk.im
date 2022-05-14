import dayjs from 'dayjs';

import objectSupport from 'dayjs/plugin/objectSupport';

import React from 'react';
import {
  request,
  POSTS_QUERY,
  ENUM_QUERY,
  POSTS_AGGREGATE_QUERY,
} from '@/lib/graphcms';

import { PostsLatest } from '@/features/posts';
import { SEO } from '@/components/SEO';

dayjs.extend(objectSupport);

const HomePage = props => (
  <>
    <SEO />
    <PostsLatest gridArea="body" {...props} />;
  </>
);

export async function getStaticProps() {
  const response = await request({
    query: `{
      ${POSTS_QUERY({ first: 25, skip: 0 })}
      ${POSTS_AGGREGATE_QUERY}
      tags: ${ENUM_QUERY('ContentTag')}
    }`,
  });

  const results = response.posts.map(POST => {
    return {
      ...POST,
      uploadDate: dayjs(POST?.uploadDate).format('MMM D, YYYY'),
    };
  });

  const tags = response.tags.enumValues.map(TAG => TAG.name);
  const pageCount = Math.ceil(response.postsConnection.aggregate.count / 25);

  return { props: { results, pageCount, tags } };
}

export default HomePage;
