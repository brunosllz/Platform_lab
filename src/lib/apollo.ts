import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o0nu6702bi01xihd0wggtj/master',
  cache: new InMemoryCache()
})