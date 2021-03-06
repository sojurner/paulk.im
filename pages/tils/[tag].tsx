import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { request, ENUM_QUERY, TIL_TAG_QUERYABLE } from '@/lib/graphcms';

import { TilTag } from '@/features/tils/TilTag';
import { markdown2HTML } from '@/lib/markdown';
import { SEO } from '@/components/SEO';

dayjs.extend(relativeTime);

export default function TilTagPage({
  tils,
}: {
  tils: Models.TIL[];
}): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <>
      <SEO />
      <TilTag gridArea="body" tils={tils} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await request({
    query: `query {
      ${TIL_TAG_QUERYABLE({ query: params?.tag as string })}
    }`,
  });
  const pendingTils = response.tils.map(async (TIL: Models.TIL) => {
    const content = await markdown2HTML(TIL.content || '');

    return {
      ...TIL,
      content,
      date: dayjs(TIL?.date).format('MMM D, YYYY'),
    };
  });

  const tils = await Promise.all(pendingTils);

  return { props: { tils } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await request({
    query: `query {
      ${ENUM_QUERY('TilTag')}
    }`,
  });

  return {
    paths: response.__type.enumValues.map((TAG: { name: string }) => {
      return {
        params: {
          tag: TAG.name,
        },
      };
    }),
    fallback: false,
  };
};
