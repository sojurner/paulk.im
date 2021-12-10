import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, memes_query, meme_queryable } from '@/lib/graphcms';

import { MemeTemplate } from '@/features/memes';

dayjs.extend(relativeTime);

export default function MemePage({ meme }) {
  return <MemeTemplate gridArea="body" meme={meme} />;
}

export async function getStaticProps({ params }) {
  const { meme } = await request({
    query: `{
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
