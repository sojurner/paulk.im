import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, memes_query, meme_queryable } from '@/lib/graphcms';

import { PanelMemes } from '@/features/memes';
import { MemeTemplate } from '@/features/memes';

import { Appbar } from '@/components/Appbar';

dayjs.extend(relativeTime);

export default function MemePage({ memes, meme }) {
  return (
    <>
      <PanelMemes memes={memes} gridArea="panel" />
      <Appbar gridArea="appbar" />
      <MemeTemplate gridArea="body" meme={meme} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { meme, memes } = await request({
    query: `{
      ${memes_query}
      ${meme_queryable(params)}
    }`,
  });


  await request({
    query: `mutation {
      updateMeme(
        where: {slug: "${params.slug}"}
        data: {viewCount: ${meme.viewCount + 1}}
      ) {
        title
      }
      publishMeme(where: {slug: "${params.slug}"}) {
        id
      }
    }`,
  });

  return {
    props: {
      meme: {
        ...meme,
        viewCount: meme.viewCount + 1,
        date: {
          timeFromNow: dayjs(meme.date).fromNow(),
          label: dayjs(meme.date).format('MMM D, YYYY'),
        },
      },
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

export async function getStaticPaths() {
  const { memes } = await request({
    query: `{
      ${memes_query}
    }`,
  });

  return {
    paths: memes.map(MEME => {
      return {
        params: {
          slug: MEME.slug,
        },
      };
    }),
    fallback: false,
  };
}
