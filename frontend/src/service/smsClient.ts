// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const cmsClient = new ApolloClient({
//   ssrMode: true,
//   uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
//   cache: new InMemoryCache(),
// });

// export default cmsClient;

// import { ApolloClient, InMemoryCache } from "@apollo/client";
// const url = process.env.NEXT_PUBLIC_API_URL;
// const client = new ApolloClient({
//     uri: `${url}/graphql`,
//     cache: new InMemoryCache()
// });
// export default client;


import { ApolloClient, InMemoryCache } from "@apollo/client";
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const url = process.env.NEXT_PUBLIC_API_URL;
const cmsClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network', // Fetch from cache first, then fetch from network
      pollInterval: 60000, // Poll data every 60 seconds (60000 milliseconds)
    },
  },
});
export default cmsClient;