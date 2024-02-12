import React, {useState} from 'react';
import MessageArrayComponent from "./MessageArrayComponent";
import UncontrolledTextInput from "./UncontrolledTextInput";
import ApolloAppProvider from "../ApolloProvider";
import MessageSender from "./MessageSender";


const MainChatComponent = ({user}) => {

    const [messageCounter, setMessageCounter] = useState(0);

    const [currentUser, setCurrentUser] = useState(user);
    const [messageInput, setMessageInput] = useState("");
    const [postedMessages, setPostedMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);


    const handleInputChange = (textValue) => {
        setMessageInput(textValue);
    };

    const onMessageEntered = (newMessage) => {

        //postedMessages.push(messageInput); --> Bad Mistake Don't change the State Directly!
        const arrNew = [...postedMessages, newMessage]
        //Update State
        setPostedMessages(arrNew);

        const incremented = messageCounter + 1;
        setMessageCounter(incremented);
        setMessageInput(newMessage);
    }

    return (
        <div>
            <p>currentUser: {currentUser}</p>
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
                    <MessageArrayComponent messages={postedMessages}/>
                </div>
                <div style={{flex: 1, width: '50%'}}>
                    <table>
                        <thead>
                        <tr>
                            <th>Received</th>
                        </tr>
                        </thead>

                    </table>
                </div>
            </div>

        </div>
    );

}

export default MainChatComponent;
