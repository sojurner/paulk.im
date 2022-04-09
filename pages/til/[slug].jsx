import { markdown2HTML } from '@/lib/markdown2Html';
import { request, TIL_QUERY, TIL_QUERYABLE } from '@/lib/graphcms';

import { TilTemplate } from '@/features/tils';

export default function Post(props) {
  return <TilTemplate gridArea="body" {...props} />;
}

export async function getStaticProps({ params }) {
  const { til } = await request({
    query: `query {
      ${TIL_QUERYABLE(params)}
    }`,
  });

  const content = await markdown2HTML(til.content || '');
  return {
    props: {
      post: {
        ...til,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const { tils } = await request({
    query: `{
      ${TIL_QUERY}
    }`,
  });

  return {
    paths: tils.map(TIL => {
      return {
        params: {
          slug: TIL.slug,
        },
      };
    }),
    fallback: false,
  };
}
