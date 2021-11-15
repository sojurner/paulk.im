import { GraphQLClient } from "graphql-request";

export function request({ query, variables }) {
  const url = process.env.GRAPHCMS_URL
  const token = process.env.GRAPHCMS_TOKEN

  const client = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return client.request(query, variables);
}