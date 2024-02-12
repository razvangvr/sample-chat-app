import React from 'react';

const UncontrolledTextInput = ({handleMessageEntered}) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const inputValue = event.target.value;
            console.log("Entered text:", inputValue);
            handleMessageEntered(inputValue);
            // You can perform any action with the entered text here
        }
    };

    return (
        <div>
            <input type="text"
                   size="55"
                   onKeyPress={handleKeyPress} />
        </div>
    );
};

export default UncontrolledTextInput;
