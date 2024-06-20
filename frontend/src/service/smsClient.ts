

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


import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const httpLink = new HttpLink({
  uri: `${baseUrl}/graphql`,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cmsClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export default cmsClient;