import { µGraphCMS } from '.';

export const TIL_QUERY = `
  tils(orderBy: date_DESC) {
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

export const POSTS_AGGREGATE_QUERY = `
  postsConnection {
    aggregate {
      count
    }
  }
`;

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