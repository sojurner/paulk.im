import { Document } from 'flexsearch';

export class ƒSearchUtils {
  static initializeMemeDocument = (memes: Models.Meme[]) => {
    const memeDocument = new Document({
      document: {
        id: 'slug',
        index: ['title'],
        store: true,
      },
      tokenize: 'full',
    });

    memes.forEach(MEME => {
      memeDocument.add({
        title: MEME.title,
        date: MEME.date,
        slug: MEME.slug,
      });
    });

    return memeDocument;
  };

  static initializePostDocument = (posts: Models.Post[]) => {
    const postDocument = new Document({
      document: {
        id: 'slug',
        index: ['title'],
        store: true,
      },
      tokenize: 'full',
    });

    posts.forEach(POST => {
      postDocument.add({
        title: POST.title,
        date: POST.date,
        slug: POST.slug,
      });
    });

    return postDocument;
  };
}

export namespace ƒSearch {
  export interface Suggestion {
    doc: Models.Document;
    id: string;
  }

  export namespace Enums {
    export enum SuggestionCategory {
      POST,
      MEME,
    }
  }
}
