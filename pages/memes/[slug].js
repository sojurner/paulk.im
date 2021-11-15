import { request } from '@/lib/graphcms';

import { PanelMemes } from '@/features/memes'
import { MemeTemplate } from '@/features/memes'
import { Appbar } from '@/components/Appbar';

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


export default function MemePage({ memes, meme }) {

  return (
    <>
      <PanelMemes memes={memes} gridArea="posts" />
      <Appbar gridArea="appbar" />
      <MemeTemplate gridArea="body" meme={meme} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const { memes } = await request({
    query: meme_query,
  });

  const meme = memes.find(meme => meme.id === params.slug);

  return {
    props: { memes, meme }
  };
}

export async function getStaticPaths() {
  const { memes } = await request({
    query: meme_query,
  });

  return {
    paths: memes.map(MEME => {
      return {
        params: {
          slug: MEME.id,
        },
      }
    }),
    fallback: false,
  }
}