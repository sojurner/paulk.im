import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, memes_query } from '@/lib/graphcms';

import { PanelMemes } from '@/features/memes/';
import { MemesRoot } from '@/features/memes';

import { Appbar } from '@/components/Appbar';

dayjs.extend(relativeTime);

export default function MemesPage({ memes }) {
  return (
    <>
      <PanelMemes memes={memes} gridArea="panel" />
      <Appbar gridArea="appbar" />
      <MemesRoot memes={memes} gridArea="body" />
    </>
  );
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
