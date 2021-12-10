import { µGraphCMS } from '.';

export const memes_query = `
  memes {
    title
    slug
    date
    tags
    viewCount
    upvotes
    image {
      url(
        transformation: {
          image: { resize: { width: 420, fit: clip } }
        }
      )
    }
  }
`;

export const meme_queryable: µGraphCMS.Methods['queryable'] = ({ slug }) => `
  meme(where: {slug: "${slug}"}) {
    title
    slug
    date
    tags
    viewCount
    upvotes
    image {
      url(transformation: {image: {resize: {height: 400, width: 300}}})
    }
  }
`;

export const article_queryable: µGraphCMS.Methods['queryable'] = ({ slug }) => `
  article(where: {slug: "${slug}"}) {
    title
    excerpt
    slug
  	date
    tags
    viewCount
    upvotes
    category
    body
    coverImage {
      url
    }
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
    viewCount
    upvotes
    coverImage {
      url(
        transformation: {
          image: { resize: { width: 420, fit: clip } }
        }
      )
    }
  }
`;

export const latest_articles_query = `
  articles(orderBy: createdAt_ASC, first: 5) {
    title
    excerpt
    slug
  	date
    tags
    category
    viewCount
    upvotes
    coverImage {
      url(
        transformation: {
          image: { resize: { width: 420, fit: clip } }
        }
      )
    }
  }
`;

export const latest_memes_query = `
  memes(orderBy: createdAt_ASC, first: 5) {
    title
    slug
    date
    tags
    viewCount
    upvotes
    image {
      url(
        transformation: {
          image: { resize: { width: 420, fit: clip } }
        }
      )
    }
  }
`;
