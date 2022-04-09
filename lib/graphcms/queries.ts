import { µGraphCMS } from '.';

export const CONTENT_OF_WEEK_QUERY = `
  contentOfTheWeeks {
    createdAt
    youtubeUrl
    soundCloudUrl
    imgurUrl
    weekNumber
    year
  }
`;

export const TIL_QUERY = `
  tils {
    slug
    title
    tags
    content
    date
  }
`;

// export const TILS_QUERYABLE: µGraphCMS.Methods['queryable'] = ({ slug }) => `
//   meme(where: {slug: "${slug}"}) {
//     slug
//     title
//     tags
//     content
//     date
//   }
// `;

// export const POW_QUERYABLE: µGraphCMS.Methods['queryable'] = ({ slug }) => `
//   vow(where: {slug: "${slug}"}) {
//     title
//     slug
//     img {
//       url(
//         transformation: {
//           image: { resize: { width: 420, fit: clip } }
//         }
//       )
//     }
//     year
//     week
//   }
// `;

export const TAG_ENUM_QUERY = `
  __type(name: "Tag") {
    enumValues {
      name
    }
  }
`;

export const TIL_TAG_QUERYABLE: µGraphCMS.Methods['queryable'] = ({
  query,
}) => `
  tils(where: { tags_contains_some: ${query}}) {
      slug
      title
      tags
      content
      date
    }
`;

// export const latest_memes_query = `
//   memes(orderBy: createdAt_ASC, first: 5) {
//     title
//     slug
//     date
//     tags
//     viewCount
//     upvotes
//     image {
//       url(
//         transformation: {
//           image: { resize: { width: 420, fit: clip } }
//         }
//       )
//     }
//   }
// `;
