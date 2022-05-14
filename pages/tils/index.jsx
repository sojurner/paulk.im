import React from 'react';
import { request, TIL_QUERY } from '@/lib/graphcms';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { TilRoot } from '@/features/tils';
import { markdown2HTML } from '@/lib/markdown';
import { SEO } from '@/components/SEO';

dayjs.extend(relativeTime);

export default function Posts(props) {
  return (
    <>
      <SEO />
      <TilRoot gridArea="body" {...props} />;
    </>
  );
}

export async function getStaticProps() {
  const response = await request({
    query: `{
      ${TIL_QUERY}
    }`,
  });

  const pendingTils = response.tils.map(async TIL => {
    const content = await markdown2HTML(TIL.content || '');

    return {
      ...TIL,
      content,
      date: dayjs(TIL?.date).format('MMM D, YYYY'),
    };
  });

  const tils = await Promise.all(pendingTils);

  return { props: { tils } };
}
