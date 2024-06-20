

// import { ApolloClient, InMemoryCache } from "@apollo/client";
// const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// const url = process.env.NEXT_PUBLIC_API_URL;
// const cmsClient = new ApolloClient({
//   uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: "no-cache",
//       // pollInterval: 60000, // Poll data every 60 seconds (60000 milliseconds)
//     },
//   },
// });
// export default cmsClient;


import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!token || !baseUrl) {
  throw new Error("Environment variables NEXT_PUBLIC_STRAPI_API_TOKEN and NEXT_PUBLIC_BASE_URL must be set");
}

const httpLink = new HttpLink({
  uri: `${baseUrl}/graphql`,
  fetch: (uri, options) => {
    return fetch(uri, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`
      }
    });
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
    }
  }
});

export default client;