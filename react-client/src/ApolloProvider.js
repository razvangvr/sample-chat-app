import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    // uri: 'http://localhost:3000/graphql', // --Si asta o mers
     uri: 'http://localhost:8080/graphql',
    // uri: '/graphql',
    cache: new InMemoryCache(),
});

const ApolloAppProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
