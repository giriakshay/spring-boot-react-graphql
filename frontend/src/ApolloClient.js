// src/ApolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Replace this URL with your Spring Boot GraphQL endpoint
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:8080/graphql" }), // Spring Boot GraphQL URL
  cache: new InMemoryCache(),
});

export default client;
