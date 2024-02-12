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

//Message Subscription Debug Component

const MessageSubscription = () => {
    const { loading, error, data } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }

    return (
        <div>
            <p>
                <span>{data.messageCreated.author.username}</span>-><span>{data.messageCreated.recipient.username}</span>:{data.messageCreated.content}</p>
        </div>
    );
};

export default MessageSubscription;
