import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';


const webSocketLink = new WebSocketLink({
    // uri: `ws://localhost:3000/graphql`, // Your GraphQL server WebSocket URI
    uri: `ws://localhost:8080/graphql`,
    options: {
        reconnect: true,
        timeout: 3000,
        lazy: true,
    },
});

const client = new ApolloClient({
    // uri: 'http://localhost:3000/graphql', // --Si asta o mers
    // uri: '/graphql',
    link: webSocketLink,
    cache: new InMemoryCache(),
});

const ApolloAppProviderWebSocketLink = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProviderWebSocketLink;
