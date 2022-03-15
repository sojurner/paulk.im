import { useState, useEffect } from 'react';
import { Document } from 'flexsearch';

import { µUseFlexSearch } from '.';

export const useFlexSearch = (
  args?: µUseFlexSearch.Args
): µUseFlexSearch.Return => {
  const [memeDocument] = useState<µUseFlexSearch.State['memeDocument']>(
    new Document({
      document: {
        id: 'slug',
        index: ['title'],
        store: true,
      },
      tokenize: 'full',
    })
  );
  const [postDocument] = useState<µUseFlexSearch.State['postDocument']>(
    new Document({
      document: {
        id: 'slug',
        index: ['title'],
        store: true,
      },
      tokenize: 'full',
    })
  );

  useEffect(() => {
    if (!args?.memes.length || !args?.posts.length) return;

    args.memes.forEach(MEME => {
      memeDocument.add({
        title: MEME.title,
        date: MEME.date,
        slug: MEME.slug,
      });
    });

    args.posts.forEach(POST => {
      postDocument.add({
        title: POST.title,
        date: POST.date,
        slug: POST.slug,
      });
    });
  }, [args]);

  const state = {
    memeDocument,
    postDocument,
  };

  const methods = {};

  return { state, methods };
};
