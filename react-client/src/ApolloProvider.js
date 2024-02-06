import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql', // Replace with your GraphQL API endpoint
    cache: new InMemoryCache(),
});

const ApolloAppProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
