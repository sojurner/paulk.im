import { µGraphCMS } from '.';

export const CONTENT_OF_WEEK_QUERY = `
  contentOfTheWeeks(orderBy: weekNumber_DESC) {
    createdAt
    youtubeUrl
    soundCloudUrl
    weekNumber
    year
    videoUrl
    image {
      url
      width
      height
    }
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

export const POSTS_QUERY = ({
  tagQuery,
  typeQuery,
  first,
  skip,
}: {
  tagQuery?: string;
  typeQuery?: string;
  first?: number;
  skip?: number;
}) => `
  posts (
    ${
      tagQuery || typeQuery
        ? `where: { ${typeQuery ? `type: ${typeQuery}` : ''} ${
            tagQuery ? `tag_contains_some: ${tagQuery}` : ''
          } }`
        : ''
    } 
    ${first ? `first: ${first}` : ''} 
    ${skip ? `skip: ${skip}` : ''} 
    orderBy: uploadDate_DESC
  ){
    title
    slug
    resource
    type
    tag
    uploadDate
    asset {
      url
      height
      width
    }
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

export const ENUM_QUERY = (name: string) => {
  return `__type(name: "${name}") {
    enumValues {
      name
    }
  }`;
};

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

export const CONTENT_TAG_QUERYABLE: µGraphCMS.Methods['queryable'] = ({
  query,
}) => `
  tils(where: {  })
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
