import React, { useState } from 'react';
import TextInputComponent from "./TextInputComponent";
import MessageArrayComponent from "./MessageArrayComponent";


const MainChatComponent = ({ user }) => {

    const [currentUser, setCurrentUser] = useState(user);
    const [messageInput, setMessageInput] = useState("");
    const [postedMessages, setPostedMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);


    const handleInputChange = (textValue) => {
        setMessageInput(textValue);
    };

    const onMessageEntered = () => {
        console.log('Post The Message, call GraphQL Mutation:',postedMessages);
        //postedMessages.push(messageInput); --> Bad Mistake Don't change the State Directly!
        const arrNew = [...postedMessages, messageInput]
        //Update State
        setPostedMessages(arrNew);
    }

    return (
        <div>
            <p>currentUser: {currentUser}</p>
            <div>
                <TextInputComponent
                    content={messageInput}
                    handleInputChange={handleInputChange}
                    handleMessageEntered={onMessageEntered}
                />
            </div>
            <div style={{ display: 'flex', width: '80%' }}>
                <div style={{ flex: 1, width: '50%' }}>
                   <MessageArrayComponent messages={postedMessages}/>
                </div>
                <div style={{ flex: 1, width: '50%' }}>
                    <table><thead><tr><th>Received</th></tr></thead>

                    </table>
                </div>
            </div>

        </div>
    );

}

export default MainChatComponent;
