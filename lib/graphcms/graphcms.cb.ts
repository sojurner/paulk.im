export interface Args {
  slug: string;
  viewCount?: number;
  upvote?: number;
}

export interface Methods {
  queryable: (args: Args) => string;
  mutation: (args: Args) => string;
}

