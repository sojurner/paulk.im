import { useState, useEffect } from 'react';
import { Document } from 'flexsearch';

import { µUseFlexSearch } from '.';

export const useFlexSearch = (
  args?: µUseFlexSearch.Args
): µUseFlexSearch.Return => {
  const [tilsDocument] = useState<µUseFlexSearch.State['tilsDocument']>(
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
    if (!args?.tils.length) return;

    args.tils.forEach(TIL => {
      tilsDocument.add({
        title: TIL.title,
        date: TIL.date,
        slug: TIL.slug,
        content: TIL.content,
        tags: TIL.tags,
      });
    });
  }, [args]);

  const state = { tilsDocument };

  const methods = {};

  return { state, methods };
};
