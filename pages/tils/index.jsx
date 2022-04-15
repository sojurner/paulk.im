import React from 'react';
import { request, TIL_QUERY } from '@/lib/graphcms';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { TilRoot } from '@/features/tils';
import { markdown2HTML } from '@/lib/markdown';
import Script from 'next/script';

dayjs.extend(relativeTime);

export default function Posts(props) {
  return (
    <>
      <TilRoot gridArea="body" {...props} />
      <Script
        src="//s.imgur.com/min/embed.js"
        strategy="afterInteractive"
        charSet="utf-8"
      />
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