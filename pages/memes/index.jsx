import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, memes_query } from '@/lib/graphcms';

import { MemesRoot } from '@/features/memes';

dayjs.extend(relativeTime);

export default function MemesPage({ memes }) {
  return <MemesRoot memes={memes} gridArea="body" />;
}

export async function getStaticProps() {
  const { memes } = await request({
    query: `{
      ${memes_query}
    }`,
  });

  return {
    props: {
      memes: memes.map(MEME => ({
        ...MEME,
        date: {
          label: dayjs(MEME.date).format('MMM D, YYYY'),
          timeFromNow: dayjs(MEME.date).fromNow(),
        },
      })),
    },
  };
}
