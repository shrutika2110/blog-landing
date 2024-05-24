import { ApolloClient, InMemoryCache } from '@apollo/client';

const cmsClient = new ApolloClient({
  ssrMode: true,
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default cmsClient;
