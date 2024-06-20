import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Ensure environment variables are loaded
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// Log environment variables for debugging (Remove this in production)
console.log('Environment Variables:', { token, baseURL });

// Validate environment variables
if (!token) {
  throw new Error("NEXT_PUBLIC_STRAPI_API_TOKEN is not defined");
}

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

// Create HttpLink instance
const httpLink = new HttpLink({
  uri: `${baseURL}/graphql`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Initialize Apollo Client
const cmsClient = new ApolloClient({
  ssrMode: typeof window === "undefined", // Check if SSR mode is enabled
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

// Log client creation for debugging
// console.log('Apollo Client created:', cmsClient);

export default cmsClient;