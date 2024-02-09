import React, { useState } from 'react';
import TextInputComponent from "./TextInputComponent";


const MainChatComponent = ({ user }) => {

    const [currentUser, setCurrentUser] = useState(user);
    const [messageInput, setMessageInput] = useState("");
    const [postedMessages, setPostedMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);


    const handleInputChange = (textValue) => {
        setMessageInput(textValue);
    };

    return (
        <div>
            <p>currentUser: {currentUser}</p>
            <div>
                <TextInputComponent content={messageInput}  handleInputChange={handleInputChange}/>
            </div>
            <div style={{ display: 'flex', width: '80%' }}>
                <div style={{ flex: 1, width: '50%' }}>
                    <table>
                        <th>Sent</th>
                    </table>
                </div>
                <div style={{ flex: 1, width: '50%' }}>
                    <table>
                        <th>Received</th>
                    </table>
                </div>
            </div>

        </div>
    );

}

export default MainChatComponent;
