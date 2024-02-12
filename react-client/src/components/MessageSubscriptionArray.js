import React, {useState} from 'react';
import { gql, useSubscription } from '@apollo/client';
import MessageArrayComponent from "./MessageArrayComponent";

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

const MessageSubscriptionArray = ({currentUser, handleMessageReceived}) => {

    //const [receivedMessages, setReceivedMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // const { loading, error, data } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);
    useSubscription(NEW_MESSAGE_SUBSCRIPTION, {
        onSubscriptionData: ({ subscriptionData }) => {
            console.log(">>>",subscriptionData)
            const newMessage = {
                author: subscriptionData.data.messageCreated.author.username,
                content: subscriptionData.data.messageCreated.content,
                recipient: subscriptionData.data.messageCreated.recipient.username
            }
            if(newMessage.recipient ===  currentUser) {
                handleMessageReceived(newMessage.content);
            }else {
                //message from Self, ignore it
            }
            setLoading(false);
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.log(error);
        return <p>Error :(</p>;
    }

    return (
        <div>
           {/*TODO, Display the message received count*/}
        </div>
    );
};

export default MessageSubscriptionArray;
