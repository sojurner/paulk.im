import { request, memes_query, articles_query } from '@/lib/graphcms';

import { SearchRoot, SearchProvider, PanelSearch } from '@/features/search';

import { Appbar } from '@/components/Appbar';

export default function SearchPage({ memes, posts }) {
  return (
    <SearchProvider memes={memes} posts={posts}>
      <Appbar gridArea="panel / panel / appbar / appbar" />
      <SearchRoot gridArea="body / panel / body / body" />
    </SearchProvider>
  );
}

export async function getStaticProps() {
  const { memes, articles } = await request({
    query: `{
      ${memes_query}
      ${articles_query}
    }`,
  });

  return {
    props: { memes, posts: articles },
  };
}
