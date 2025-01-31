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
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
  // defaultOptions: {
  //   watchQuery: {
  //     fetchPolicy: "no-cache",
  //     pollInterval: 60000, // Poll data every 60 seconds (60000 milliseconds)
  //   },
  // },

});
export default cmsClient;