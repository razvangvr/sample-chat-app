import React from 'react';

const MessageArrayComponent = ({header,messages}) => {

    console.log("messages ::", messages);

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>{header}</th>
                </tr>
                </thead>
                {messages.map((stringMsg, index) => (
                    <tr key={index}>
                        <td>{stringMsg}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default MessageArrayComponent;
