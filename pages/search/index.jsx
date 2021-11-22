import { request, memes_query, articles_query } from '@/lib/graphcms';

import { SearchRoot, SearchProvider, PanelSearch } from '@/features/search';

import { Appbar } from '@/components/Appbar';

export default function SearchPage({ memes, posts }) {
  return (
    <SearchProvider memes={memes} posts={posts}>
      <PanelSearch gridArea="panel" />
      <Appbar gridArea="appbar" />
      <SearchRoot gridArea="body" />
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
