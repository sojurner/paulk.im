import { µGraphCMS } from './types';

export const memes_query = `
  memes {
    title
    slug
    date
    image {
      url(transformation: {image: {resize: {height: 400, width: 300}}})
    }
  }
`;

export const meme_queryable: µGraphCMS.Methods['queryable'] = (
  slug: string
) => `
  meme(where: {slug: "${slug}"}) {
    title
    slug
    date
    image {
      url(transformation: {image: {resize: {height: 400, width: 300}}})
    }
  }
`;

export const article_queryable: µGraphCMS.Methods['queryable'] = (slug: string) => `
  article(where: {slug: "${slug}"}) {
    title
    excerpt
    slug
  	date
    tags
    category
    body
  }
`;

export const articles_query = `
  articles {
    title
    excerpt
    slug
  	date
    tags
    category
  }
`;
