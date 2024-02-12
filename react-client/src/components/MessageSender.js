import {useState} from 'react';
import {gql, useMutation, useQuery} from '@apollo/client';

const SEND_MESSAGE = gql`
    mutation AddMessageMutation($author: String!, $text: String!) {
        postMessage(message: {author: $author, content:$text}){
            id
            author{username}
            content
            recipient{username}
        }
    }
`;

const MessageSender = ({initialAuthor, initialText}) => {


    const [text, setText] = useState(initialText || '');
    const [author, setAuthor] = useState(initialAuthor || '');

    const [sendText, {loading, error}] = useMutation(SEND_MESSAGE);

    const handleSendText = () => {
        sendText({variables: {author, text}})
            .then(() => {
                console.log('Text sent successfully!');
                setText('');
                setAuthor('');
                //Once successfully Sent, Reset the Properties
            })
            .catch((error) => {
                console.error('Error sending text:', error);
            });
    };
};

export default MessageSender;
