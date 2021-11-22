import { request, memes_query } from '@/lib/graphcms';

import { PanelMemes } from '@/features/memes/';
import { MemesRoot } from '@/features/memes';

import { Appbar } from '@/components/Appbar';

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
    props: { memes },
  };
}
