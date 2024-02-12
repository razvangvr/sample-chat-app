import {useState, useEffect} from 'react';
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

const MessageSender = ({initialAuthor, initialText, counter}) => {


    // const [text, setText] = useState(initialText || '');
    // const [author, setAuthor] = useState(initialAuthor || '');

    const [sendText, {loading, error}] = useMutation(SEND_MESSAGE);


    useEffect(() => {
        console.log("MessageSender.useEffect. Text:",initialText);
        if (counter > 0) {
            console.log("MessageSender.useEffect SENDing TEXT. Author:",initialAuthor);
            console.log("MessageText:",initialText);
            console.log("MessageCounter:",counter);
            const author = initialAuthor;
            const text = initialText;
            sendText({variables: {author, text}})
                .then(() => {
                    console.log('Text sent successfully!');
                    //setText('');
                    //setAuthor('');
                    //Once successfully Sent, Reset the Properties
                })
                .catch((error) => {
                    console.error('Error sending text:', error);
                });
        }
    }, [counter, sendText, initialText, initialAuthor]);

};

export default MessageSender;
