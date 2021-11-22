import { request, memes_query, meme_queryable } from '@/lib/graphcms';

import { PanelMemes } from '@/features/memes';
import { MemeTemplate } from '@/features/memes';

import { Appbar } from '@/components/Appbar';

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
      ${meme_queryable(params.slug)}
    }`,
  });

  return {
    props: { meme, memes },
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
