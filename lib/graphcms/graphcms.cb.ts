export interface Args {
  query: string;
}

export interface Methods {
  queryable: (args: Args) => string;
  mutation: (args: Args) => string;
}
