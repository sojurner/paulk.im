import dayjs from 'dayjs';

import objectSupport from 'dayjs/plugin/objectSupport';

import React from 'react';
import { request, POSTS_QUERY, ENUM_QUERY } from '@/lib/graphcms';

import { PostsRoot } from '@/features/posts';

dayjs.extend(objectSupport);

const HomePage = props => <PostsRoot gridArea="body" {...props} />;

export async function getStaticProps() {
  const response = await request({
    query: `{
      ${POSTS_QUERY({ first: 25, skip: 0 })}
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

  return { props: { results, tags } };
}

export default HomePage;
