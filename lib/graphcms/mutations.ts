import { µGraphCMS } from '.';

export const article_viewcount_mutation: µGraphCMS.Methods['queryable'] = ({
  slug,
  viewCount,
}) => `
  updateArticle(
    where: {slug: "${slug}"}
    data: {viewCount: ${viewCount}}
  ) {
    title
    excerpt
    slug
    date
    tags
    viewCount
    category
    body
  }
  publishArticle(where: {slug: "${slug}"}) {
    id
  }
`;

// export const meme_viewcount_mutation: µGraphCMS.Methods['queryable'] = ({
//   slug,
//   viewCount
// }) => `
//   updateMeme(
//     where: {}
//   )
// `