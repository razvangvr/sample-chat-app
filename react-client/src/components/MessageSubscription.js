import React from 'react';
import { gql, useSubscription } from '@apollo/client';

const NEW_MESSAGE_SUBSCRIPTION = gql`
    subscription NewMessagePosted {
        messageCreated {
            author{username}
            id
            content
            recipient{username}
        }
    }
`;

const MessageSubscription = () => {
    const { loading, error, data } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }

    return (
        <div>
            <span>From: {data.messageCreated.author.username}</span>
            <p>: {data.messageCreated.content}</p>
            <span>To: {data.messageCreated.recipient.username}</span>
        </div>
    );
};

export default MessageSubscription;
