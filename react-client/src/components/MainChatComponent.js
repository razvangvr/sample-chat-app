import React, {useState} from 'react';
import MessageArrayComponent from "./MessageArrayComponent";
import UncontrolledTextInput from "./UncontrolledTextInput";
import ApolloAppProvider from "../ApolloProvider";
import MessageSender from "./MessageSender";
import ApolloProviderGraphqlWs from "../ApolloProviderGraphqlWs";
import MessageSubscriptionArray from "./MessageSubscriptionArray";


const MainChatComponent = ({user}) => {

    const [messageCounter, setMessageCounter] = useState(0);

    const [currentUser, setCurrentUser] = useState(user);
    const [messageInput, setMessageInput] = useState("");
    const [postedMessages, setPostedMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);


    const onMessageEntered = (newMessage) => {

        //postedMessages.push(messageInput); --> Bad Mistake Don't change the State Directly!
        const arrNew = [...postedMessages, newMessage]
        //Update State
        setPostedMessages(arrNew);

        const incremented = messageCounter + 1;
        setMessageCounter(incremented);
        setMessageInput(newMessage);
    }


    const onMessageReceived = (newMessage) => {
        const arrNew = [...receivedMessages, newMessage]
        //Update State
        setReceivedMessages(arrNew);
    }

    return (
        <div>
            <p>currentUser: <b><i>{currentUser}</i></b></p>
            <div>
                <UncontrolledTextInput handleMessageEntered={onMessageEntered}/>
                <ApolloAppProvider>
                    <MessageSender initialAuthor={user}
                                   initialText={messageInput}
                                   counter={messageCounter}/>
                </ApolloAppProvider>
            </div>
            <div style={{display: 'flex', width: '80%'}}>
                <div style={{flex: 1, width: '50%'}}>
                    <MessageArrayComponent header={"Sent"} messages={postedMessages}/>
                </div>
                <div style={{flex: 1, width: '50%'}}>
                    <MessageArrayComponent header={"Received"} messages={receivedMessages}/>
                </div>
            </div>
            <ApolloProviderGraphqlWs>
                <MessageSubscriptionArray currentUser={user} handleMessageReceived={onMessageReceived}/>
            </ApolloProviderGraphqlWs>
        </div>
    );

}

export default MainChatComponent;
