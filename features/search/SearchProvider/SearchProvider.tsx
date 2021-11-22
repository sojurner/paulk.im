import React from 'react';
import { useRouter } from 'next/router';
import { createContextProvider } from '@/lib/createContextProvider';
import { µSearchProvider } from './types';
import { Document } from 'flexsearch';

export const [SearchContextProvider, useSearchContext] =
  createContextProvider<µSearchProvider.Return>({
    name: 'SearchContext',
    errorMessage: 'context must be wrapped in Search Provider',
  });

export const SearchProvider: React.FC<µSearchProvider.Props> = props => {
  const { query } = useRouter();

  const [memeDocument] = React.useState(
    new Document({
      document: {
        id: 'slug',
        index: ['title'],
        store: true,
      },
      tokenize: 'full',
    })
  );
  const [postDocument] = React.useState(
    new Document({
      document: {
        id: 'slug',
        index: ['title'],
        store: true,
      },
      tokenize: 'full',
    })
  );

  const onAddMemes: µSearchProvider.Methods['onAddMemes'] = memes => {
    memes.forEach(MEME => {
      memeDocument.add({
        title: MEME.title,
        date: MEME.date,
        slug: MEME.slug,
      });
    });
  };

  const onAddPosts: µSearchProvider.Methods['onAddPosts'] = posts => {
    posts.forEach(POST => {
      postDocument.add({
        title: POST.title,
        date: POST.date,
        slug: POST.slug,
      });
    });
  };

  React.useEffect(() => {
    onAddMemes(props.memes);
    onAddPosts(props.posts);
  }, []);

  const state = {
    ...(typeof query?.search === 'string' && { initialQuery: query.search }),
    memeDocument,
    postDocument,
  };
  
  const methods = {
    onAddMemes,
    onAddPosts,
  };

  return <SearchContextProvider value={{ state, methods }} {...props} />;
};
