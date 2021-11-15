import { request } from '@/lib/graphcms';

import { PanelMemes } from '@/features/memes/'
import { Appbar } from '@/components/Appbar';
import { MemesRoot } from '@/features/memes'

const meme_query = `{
  memes {
    title
    id
    date
    image {
      url
    }
  }
}`;


export default function MemesPage({ data }) {
  return (
    <>
      <PanelMemes memes={data} gridArea="posts" />
      <Appbar gridArea="appbar" />
      <MemesRoot gridArea="body" />
    </>
  )
}

export async function getStaticProps() {
  const { memes } = await request({
    query: meme_query,
  });
  return {
    props: { data: memes },
  };
}