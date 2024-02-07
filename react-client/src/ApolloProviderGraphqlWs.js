/**
 * Finally This has worked
 * https://www.apollographql.com/docs/react/data/subscriptions/#2-initialize-a-graphqlwslink
 * */

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:8080/graphql',
}));

const client = new ApolloClient({
    // uri: 'http://localhost:3000/graphql', // --Si asta o mers
    // uri: '/graphql',
    link: wsLink,
    cache: new InMemoryCache(),
});

const ApolloProviderGraphqlWs = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderGraphqlWs;
