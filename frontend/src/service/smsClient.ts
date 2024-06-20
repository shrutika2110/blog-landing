// import { HttpLink,ApolloClient, InMemoryCache } from "@apollo/client";
// const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// const url = process.env.NEXT_PUBLIC_API_URL;
// const cmsClient = new ApolloClient({
//   ssrMode: true,
//   uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: "no-cache",
//       // pollInterval: 60000, // Poll data every 60 seconds (60000 milliseconds)
//       errorPolicy: "ignore",

//     }

//   },
// });
// export default cmsClient;

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const httpLink = new HttpLink({
  uri: `${baseURL}/graphql`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const cmsClient = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      // pollInterval: 60000, // Poll data every 60 seconds (60000 milliseconds)
      errorPolicy: "ignore",
    },
  },
});

export default cmsClient;
