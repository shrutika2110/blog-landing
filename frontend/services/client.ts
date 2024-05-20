import { ApolloClient, InMemoryCache } from "@apollo/client";
const url = process.env.NEXT_PUBLIC_API_URL;
const client = new ApolloClient({
    uri: `${url}/graphql`,
    cache: new InMemoryCache()
});
export default client;